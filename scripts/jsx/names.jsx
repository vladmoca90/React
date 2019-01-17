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

function returnPersonName({persons}) {
    return persons.map((persons) => <li>{persons.name}</li>);
}

class Names extends React.Component {

    render() {
        return (
            <ul>
                <returnPersonName/>
            </ul>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('app'));