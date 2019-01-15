const persons = [
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
        for(var i = 0; i<persons.length; i++ ) {

        }
        return (
            <ul>
                <li>{persons.map((persons) => persons.name)}</li>
            </ul>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('app'));