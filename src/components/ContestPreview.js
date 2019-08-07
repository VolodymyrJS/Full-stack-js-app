import React from 'react';

const contestPreview = contest => {
  return (
    <div className="contestPreview">
      <div className="categoryName">{contest.contestName}</div>
      <div className="contestName">{contest.categoryName}</div>
    </div>
  );
};

export default contestPreview;
