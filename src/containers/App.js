require('../styles/main.scss');

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Follower from '../components/follower';
import * as FollowerActions from '../actions/followers';

const App = React.createClass({
  handleTest() {
    this.actions.addFollower('Awesome follower');
  },

  renderFollower(follower) {
    if (follower) {
      return (
        <Follower name={follower.name} />
      )
    }
  },

  render() {
    const { dispatch, latestFollower } = this.props;
    this.actions = bindActionCreators(FollowerActions, dispatch);

    return (
      <div>
        <h1>Hello world</h1>
        <button onClick={this.handleTest}>Test</button>
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
    latestFollower: selectLatestFollower(state.followers)
  };
}

export default connect(select)(App);
