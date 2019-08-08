import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  handeleClick = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div className="contestPreview">
        <div className="categoryName link" onClick={this.handeleClick}>
          {this.props.contestName}
        </div>
        <div className="contestName">{this.props.categoryName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  contestName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ContestPreview;
