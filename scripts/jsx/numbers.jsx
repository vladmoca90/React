const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class NumberList extends React.Component {

    render() {
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('app')
);