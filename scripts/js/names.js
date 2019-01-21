var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var persons = [{
    name: "Joe",
    age: 27
}, {
    name: "John",
    age: 27
}, {
    name: "Bill",
    age: 25
}];

function returnPersonName(persons) {
    return persons.map(function (persons) {
        return React.createElement(
            "li",
            null,
            persons.name
        );
    });
}

function returnPersonAge(persons) {
    return persons.map(function (persons) {
        return React.createElement(
            "option",
            null,
            persons.age
        );
    });
}

var Names = function (_React$Component) {
    _inherits(Names, _React$Component);

    function Names() {
        _classCallCheck(this, Names);

        return _possibleConstructorReturn(this, (Names.__proto__ || Object.getPrototypeOf(Names)).apply(this, arguments));
    }

    _createClass(Names, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    returnPersonName(persons)
                ),
                React.createElement(
                    "select",
                    null,
                    returnPersonAge(persons)
                )
            );
        }
    }]);

    return Names;
}(React.Component);

ReactDOM.render(React.createElement(Names, null), document.getElementById('app'));