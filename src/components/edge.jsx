import React from 'react';

function Edge({ children, position }) {
  return (
    <div className={`edge ${position}`}>
      {children}
    </div>
  );
}

export default Edge;
