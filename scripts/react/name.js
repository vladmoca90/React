const profile = {
  name: 'Vlad Mocanu',
  age: 28,
  nationality: 'Romanian',
}

class MyName extends React.Component {

    render() {
      function sum(a, b) {
        return a + b;
      }

    return (
      <div>
        <h1>{ profile.name }</h1>
        <h2>{ profile.age }</h2>
        <h3>{ profile.nationality }</h3>
        <h5>{ sum(1, 7) }</h5>
    </div>
    );
  }
};

ReactDOM.render(<MyName />, document.getElementById('app'));