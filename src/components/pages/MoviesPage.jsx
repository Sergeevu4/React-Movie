import React from 'react';
import { MovieTabs, MovieList, Pagination, MovieWillWatch } from '../../containers';
import { Error } from '../Error/Error';
import { Switch, Route } from 'react-router-dom';

export const MoviesPage = () => {
  return (
    <div className='container-md'>
      <div className='row pt-4'>
        <div className='col-9'>
          <MovieTabs />
          <MovieList />
          <Pagination />
        </div>
        <MovieWillWatch />
      </div>
    </div>
  );
};

// {/* <Switch>
//   <Route path='/page' render={() => <Error>Please, current page</Error>} />
//   <Route path='/page/:currentPage' component={MovieList} />{' '}
// </Switch>;
//  */}
