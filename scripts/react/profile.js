const profile = {
  name: 'Vlad Mocanu',
  age: 28,
  nationality: 'Romanian',
}

class MyName extends React.Component {
  constructor(props) {
        super(props);
  }

    render() {
      function averageGrades(a, b, c) {
        return ((a + b + c)/3).toFixed(2);
      }

    return (
      <div>
        <h1>{ profile.name }</h1>
        <h2>{ profile.age }</h2>
        <h3>{ profile.nationality }</h3>
        <h3>{ averageGrades(9.55, 9.05, 9.95) }</h3>
    </div>
    );
  }
};

ReactDOM.render(<MyName />, document.getElementById('app'));