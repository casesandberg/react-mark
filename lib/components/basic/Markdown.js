'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MARKDOWN = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MARKDOWN = exports.MARKDOWN = (function (_React$Component) {
  _inherits(MARKDOWN, _React$Component);

  function MARKDOWN() {
    _classCallCheck(this, MARKDOWN);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MARKDOWN).apply(this, arguments));
  }

  _createClass(MARKDOWN, [{
    key: 'render',
    value: function render() {
      var refs = [];

      for (var refName in this.props.references) {
        var ref = this.props.references[refName];
        refs.push(_react2.default.createElement(
          'p',
          { key: refName, id: refName },
          '[',
          refName,
          '] ',
          ref.href
        ));
      }

      return _react2.default.createElement(
        'div',
        null,
        this.props.children,
        refs
      );
    }
  }]);

  return MARKDOWN;
})(_react2.default.Component);

exports.default = MARKDOWN;