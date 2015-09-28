require('./styles/main.scss');

import React from 'react';
import Reflux from 'reflux';

const App = React.createClass({
  // componentDidMount() {
  //   SomethingStore.listen(this.onSomethingChange);
  // },

  // getInitialState() {
  //   return {
  //     something: SomethingStore.getSomething(),
  //   };
  // },

  // onSomething() {
  //   this.setState({
  //     something: SomethingStore.getSomething()
  //   });
  // },

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
});

React.render(<App />, document.body);
