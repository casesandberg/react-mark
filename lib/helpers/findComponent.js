'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/basic/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findComponent = exports.findComponent = function findComponent(name, args, children) {
  var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var possible = {
    'header': replace.header,
    'para': replace.p,
    'em': replace.em,
    'strong': replace.strong,
    'hr': replace.hr,
    'numberlist': replace.ol,
    'bulletlist': replace.ul,
    'listitem': replace.li,
    'link': replace.a,
    'img': replace.img,
    'blockquote': replace.blockquote,
    'inlinecode': replace.code,
    'code_block': replace.pre,
    'link_ref': replace.ref
  }[name];

  var basic = {
    'header': _index.H,
    'para': _index.P,
    'em': _index.EM,
    'strong': _index.STRONG,
    'hr': _index.HR,
    'numberlist': _index.OL,
    'bulletlist': _index.UL,
    'listitem': _index.LI,
    'link': _index.A,
    'img': _index.IMG,
    'blockquote': _index.BLOCKQUOTE,
    'inlinecode': _index.INLINECODE,
    'code_block': _index.CODEBLOCK,
    'markdown': _index.MARKDOWN,
    'link_ref': _index.REF
  }[name];

  if (!possible && !basic) {
    console.log('COMPONENT DOESNT EXIST', name, args, children);
  }

  var el = possible || basic || _index.SPAN;

  return _react2.default.createElement(el, Object.assign({}, args, { key: 'r' + Math.random(), target: args.ref }), children);
};

exports.default = findComponent;