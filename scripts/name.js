import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }

  render() {
    return React.createElement(
      'h1',
      null,
      this.state.title
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));