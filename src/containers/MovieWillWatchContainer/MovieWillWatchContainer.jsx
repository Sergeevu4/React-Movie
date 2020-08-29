import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movieRemovedToWillWatch, allMoviesDeletedToWillWatch } from '../../actions';
import { MovieWillWatch } from '../../components';

// # Компонент Контейнер - отвечает за Логику, но не за отображения
class MovieWillWatchContainer extends Component {
  state = {
    showMenu: true,
  };

  toggleShowMenuWillWatch = () => {
    if (!this.props.movieWillWatch.length) {
      return;
    }

    this.setState((state) => ({ showMenu: !state.showMenu }));
  };

  render() {
    const {
      movieWillWatch,
      movieRemovedToWillWatch,
      allMoviesDeletedToWillWatch,
    } = this.props;

    return (
      <MovieWillWatch
        showMenu={this.state.showMenu}
        toggleShowMenuWillWatch={this.toggleShowMenuWillWatch}
        movieWillWatch={movieWillWatch}
        movieRemovedToWillWatch={movieRemovedToWillWatch}
        allMoviesDeletedToWillWatch={allMoviesDeletedToWillWatch}
      />
    );
  }
}

const mapStateToProps = ({ movieWillWatchList: { movieWillWatch } }) => ({
  movieWillWatch,
});

const mapDispatchToProps = {
  movieRemovedToWillWatch,
  allMoviesDeletedToWillWatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieWillWatchContainer);
