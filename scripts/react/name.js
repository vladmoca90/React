import React from 'react';
import ReactDOM from 'React-dom';

class myProfile extends React.Component {
  render() {
    return <h1>Vlad Mocanu</h1>;
  }
};

ReactDOM.render(<myProfile />, document.getElementById('app'));