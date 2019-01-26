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

persons.PropsTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
}

function returnPersonName(persons) {
    return persons.map((persons) => <li>{persons.name}</li>);
}

function returnPersonAge(persons) {
    return persons.map((persons) => <option>{persons.age}</option>);
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