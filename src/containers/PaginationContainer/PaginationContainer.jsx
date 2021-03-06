import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../actions';
import { getPaginationNumbers } from './getPaginationNumbers';
import { Pagination } from '../../components';

class PaginationContainer extends Component {
  maxPages = 10;

  setFirstPage = () => {
    const firstPage = 1;
    this.props.setCurrentPage(firstPage);
  };

  setLastPage = () => {
    const { totalPages, setCurrentPage } = this.props;
    setCurrentPage(totalPages);
  };

  setNextPage = () => {
    const { setCurrentPage, page, totalPages } = this.props;
    const nextPage = Math.min(page + 1, totalPages);
    setCurrentPage(nextPage);
  };

  setPrevPage = () => {
    const { page, setCurrentPage } = this.props;
    const firstPage = 1;
    const prevPage = Math.max(page - 1, firstPage);
    setCurrentPage(prevPage);
  };

  setNumbersPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
  };

  render() {
    const { page, totalPages } = this.props;
    const pageNumbers = getPaginationNumbers(page, totalPages, this.maxPages);

    return (
      <Pagination
        pageNumbers={pageNumbers}
        page={page}
        totalPages={totalPages}
        setFirstPage={this.setFirstPage}
        setLastPage={this.setLastPage}
        setNextPage={this.setNextPage}
        setPrevPage={this.setPrevPage}
        setNumbersPage={this.setNumbersPage}
      />
    );
  }
}

const mapStateToProps = ({ pageInfo, sortType }) => {
  const { page, totalPages } = pageInfo;
  const { sortTypeByMovies } = sortType;

  return {
    page,
    totalPages,
    sortTypeByMovies,
  };
};

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
