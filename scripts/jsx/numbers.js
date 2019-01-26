const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const colors =  {
    bottom: 10,
    red: 'red',
    size: 16,
}

function numberStyling(colors) {
    return {
        color: colors.red, fontSize: colors.size, marginBottom: colors.bottom
    };
}

class NumberList extends React.Component {

    render() {
        const listItems = numbers.map((number) =>
            <li style={numberStyling(colors)} key={number.toString()}>{number * 10}</li>
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