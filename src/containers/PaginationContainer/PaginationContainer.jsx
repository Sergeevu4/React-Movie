import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../actions';
import { getPaginationNumbers } from './getPaginationNumbers';
import { Pagination } from '../../components';
import { withRouter } from 'react-router-dom';

class PaginationContainer extends Component {
  maxPages = 10;

  setUrlPage(page) {
    const { history } = this.props;
    history.push(`${page}`);
  }

  setPage = (namePage, pageNumber) => {
    const { match, totalPages } = this.props;
    const currentPage = Number(match.params.currentPage);
    const firstPage = 1;

    // Если выбранная и уже установленная страница совпадают
    if (currentPage === pageNumber) {
      return;
    }

    switch (namePage) {
      case 'FIRST_PAGE':
        this.setUrlPage(firstPage);
        break;

      case 'LAST_PAGE':
        this.setUrlPage(totalPages);
        break;

      case 'NEXT_PAGE':
        this.setUrlPage(Math.min(currentPage + 1, totalPages));
        break;

      case 'PREV_PAGE':
        this.setUrlPage(Math.max(currentPage - 1, firstPage));
        break;

      case 'NUMBER_PAGE':
        this.setUrlPage(pageNumber);
        break;

      default:
        // this.setUrlPage(currentPage);
        break;
    }
  };

  render() {
    const { match, totalPages } = this.props;
    const currentPage = Number(match.params.currentPage);

    const pageNumbers = getPaginationNumbers(currentPage, totalPages, this.maxPages);

    // console.log(currentPage);

    return (
      <Pagination
        pageNumbers={pageNumbers}
        setPage={this.setPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    );
  }
}

const mapStateToProps = ({ pageInfo }) => {
  const { totalPages } = pageInfo;

  return {
    totalPages,
  };
};

// const mapDispatchToProps = {
//   setCurrentPage,
// };

export default withRouter(connect(mapStateToProps, null)(PaginationContainer));
