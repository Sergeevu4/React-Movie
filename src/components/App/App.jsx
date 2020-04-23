import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { MovieTabs, MovieList, Pagination, MovieWillWatch } from '../../containers';

export const App = () => {
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
