const data = [
    {
        name: "Joe",
        age: 27
    },
    {
        name: "John",
        age: 27
    },
    {
        name: "Bill",
        age: 25
    }
];

class Names extends React.Component {

    render() {
        return (
            <div>{data.map((data) => data.name)}</div>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('app'));