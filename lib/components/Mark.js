'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mark = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdown = require('markdown');

var _componentLoop = require('../helpers/componentLoop');

var _componentLoop2 = _interopRequireDefault(_componentLoop);

var _transformCodeBlocks = require('../helpers/transformCodeBlocks');

var _transformCodeBlocks2 = _interopRequireDefault(_transformCodeBlocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mark = exports.Mark = (function (_React$Component) {
  _inherits(Mark, _React$Component);

  function Mark() {
    _classCallCheck(this, Mark);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Mark).apply(this, arguments));
  }

  _createClass(Mark, [{
    key: 'render',
    value: function render() {
      var input = this.props.text || this.props.children || [];
      window.input = input;
      var blocked = (0, _transformCodeBlocks2.default)(input);
      var elements = _markdown.markdown.parse(blocked);
      window.elements = elements;
      return (0, _componentLoop2.default)(elements, this.props.replace);
    }
  }]);

  return Mark;
})(_react2.default.Component);

;

Mark.defaultProps = {
  replace: {}
};

exports.default = Mark;