const profile = {
  name: 'Vlad Mocanu',
  age: 28,
  nationality: 'Romanian',
}

MyName.propTypes = {

}

class MyName extends React.Component {
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