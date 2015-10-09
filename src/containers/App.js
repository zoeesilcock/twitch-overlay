require('../styles/main.scss');

import React from 'react';

require('velocity-animate');
require('velocity-animate/velocity.ui');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { VelocityTransitionGroup } from 'velocity-react';
import Follower from '../components/follower';
import * as FollowerActions from '../actions/followers';

const App = React.createClass({
  handleAdd() {
    this.actions.addFollower('Awesome follower');
  },

  handleRemove() {
    this.actions.removeFollower('Awesome follower');
  },

  renderFollower(follower) {
    return (
      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        {follower ? <Follower dispatch={this.props.dispatch} name={follower.name} /> : undefined}
      </VelocityTransitionGroup>
    );
  },

  render() {
    const { dispatch, latestFollower } = this.props;
    this.actions = bindActionCreators(FollowerActions, dispatch);

    return (
      <div>
        <h1>Hello world</h1>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>

        {this.renderFollower(latestFollower)}
      </div>
    );
  }
});

function selectLatestFollower(followers) {
  return followers[0];
}

function select(state) {
  return {
    latestFollower: selectLatestFollower(state.default.followers)
  };
}

export default connect(select)(App);
