import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const contestList = ({ contests, onContestClick }) => (
  <div className="contest-list">
    {contests.map(contest => (
      <ContestPreview {...contest} key={contest.id} onClick={onContestClick} />
    ))}
  </div>
);

contestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired
};

export default contestList;
