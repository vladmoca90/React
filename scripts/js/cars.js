function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = [{
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    img: ''
}, {
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    img: ''
}, {
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    img: ''
}, {
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    img: ''
}];

var Showroom = function (_React$Component) {
    _inherits(Showroom, _React$Component);

    function Showroom() {
        _classCallCheck(this, Showroom);

        return _possibleConstructorReturn(this, (Showroom.__proto__ || Object.getPrototypeOf(Showroom)).apply(this, arguments));
    }

    return Showroom;
}(React.Component);

ReactDOM.render(React.createElement(Showroom, null), document.getElementById('app'));