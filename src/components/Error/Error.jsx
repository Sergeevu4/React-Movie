import React from 'react';

export const Error = ({ children }) => (
  <div className='alert alert-warning' role='alert'>
    {children}
  </div>
);
