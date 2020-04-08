import React, { memo } from 'react';

const Button = ({ className = '', onClick, children }) => {
  return (
    <button type='button' className={`btn btn-sm ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
