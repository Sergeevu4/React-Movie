import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { MovieTabs, MovieList, Pagination, MovieWillWatch } from '../../containers';
import { Error } from '../Error/Error';

export const App = () => {
  return (
    <Switch>
      <Route path='/page/:currentPage?'>
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
      </Route>

      <Route exact path='/'>
        <Redirect to='/page/1' />
      </Route>
    </Switch>
  );
};
