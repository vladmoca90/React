import MyAge from 'age.js';
class MyName extends React.Component {
  render() {
    return <MyAge />;
  }
};

ReactDOM.render(<MyName />, document.getElementById('app'));