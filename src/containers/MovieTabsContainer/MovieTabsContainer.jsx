import React, { Component } from 'react';
import { MovieTabs } from '../../components';
import { connect } from 'react-redux';
import { moviesChangeSort } from '../../actions';

class MovieTabsContainer extends Component {
  // sortType - тип серверной сортировки, label - название
  tabs = [
    { sortType: 'popularity', label: 'Popularity' },
    { sortType: 'revenue', label: 'Revenue desc' },
    { sortType: 'voteAverage', label: 'Vote average' },
  ];

  changeSortType = (sortType) => {
    // Не вызывать события при одинаковом типе серверной сортировки в Redux state и выбранном
    if (this.props.sortTypeByMovies === sortType) {
      return;
    }

    this.props.moviesChangeSort(sortType);
  };

  render() {
    return (
      <MovieTabs
        tabs={this.tabs}
        sortTypeByMovies={this.props.sortTypeByMovies}
        changeSortType={this.changeSortType}
      />
    );
  }
}

const mapStateToProps = ({ sortTypeByMovies }) => ({
  sortTypeByMovies,
});

const mapDispatchToProps = {
  moviesChangeSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTabsContainer);
