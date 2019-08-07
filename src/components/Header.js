import React from 'react';

const header = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default header;
