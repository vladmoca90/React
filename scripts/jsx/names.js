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

function returnPersonName(persons) {
    return persons.map((persons) => <li key={persons.name} className="name">{persons.name}</li>);
}

function returnPersonAge(persons) {
    return persons.map((persons) => <option key={persons.age} className="age">{persons.age}</option>);
}

class Names extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {returnPersonName(persons)}
                </ul>
                <select>
                    {returnPersonAge(persons)}
                </select>
            </div>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('app'));