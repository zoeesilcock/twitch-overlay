import React from 'react';
import classNames from 'classnames';

class Follower extends React.Component {
  render() {
    return (
      <div className="follower">
        <h1>{this.props.name}</h1>
        <span className="followed"> has just followed</span>
      </div>
    );
  }
};

Follower.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Follower;
