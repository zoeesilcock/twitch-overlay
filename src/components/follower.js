import React from 'react';
import { bindActionCreators } from 'redux';
import { VelocityComponent } from 'velocity-react';
import * as FollowerActions from '../actions/followers';

class Follower extends React.Component {
  componentDidMount() {
    window.setTimeout(() => {
      this.refs.velocity.runAnimation();
    }, 100);
    window.setTimeout(() => {
      this.actions.removeFollower(this.props.id);
    }, 3000);
  }

  render() {
    const { dispatch, latestFollower } = this.props;
    this.actions = bindActionCreators(FollowerActions, dispatch);

    return (
      <VelocityComponent ref="velocity" animation={"callout.tada"} duration={800}>
        <div className="follower">
          <h1>{this.props.name}</h1>
          <span className="followed"> has just followed</span>
        </div>
      </VelocityComponent>
    );
  }
};

Follower.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Follower;
