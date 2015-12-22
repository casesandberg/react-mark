'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentLoop = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _findComponent = require('./findComponent');

var _findComponent2 = _interopRequireDefault(_findComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentLoop = exports.componentLoop = function componentLoop(elements, replace) {
  var children = [];
  var name = undefined;
  var args = {};
  elements.map(function (element, i) {
    if (i === 0) {
      name = element;
    } else {
      if (_underscore2.default.isObject(element) && !_underscore2.default.isArray(element)) {
        args = element;
      } else {

        if (_underscore2.default.isArray(element)) {
          children.push(componentLoop(element, replace));
        } else {
          children.push(element);
        }
      }
    }
  });

  return (0, _findComponent2.default)(name, args, children, replace);
};

exports.default = componentLoop;