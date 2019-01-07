const profile = {
  name: 'Vlad Mocanu',
  age: 28,
  nationality: 'Romanian',
}
class MyName extends React.Component {
   constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }
  render() {
    return (
      <div>
        <h1>{ profile.name }</h1>
        <h2>{ profile.age }</h2>
        <h3>{ profile.nationality }</h3>
    </div>
    );
  }
};

ReactDOM.render(<MyName />, document.getElementById('app'));