import React, { memo } from 'react';

const Button = ({ className = '', onClick, children, disabled }) => {
  return (
    <button
      type='button'
      className={`btn btn-sm ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
