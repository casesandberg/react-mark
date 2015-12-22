'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transformCodeBlocks = exports.transformCodeBlocks = function transformCodeBlocks(input) {
  var codeBlockPattern = /\`\`\`.*\n([\s\S]*?)\`\`\`/g;
  var matches = undefined;

  var _loop = function _loop() {
    var block = matches[0];
    var code = matches[1];
    var lines = code.split('\n');

    lines.map(function (line, i) {
      if (line) {
        lines[i] = '    ' + line;
      }
    });

    input = input.replace(block, lines.join('\n'));
  };

  while (matches = codeBlockPattern.exec(input)) {
    _loop();
  }

  return input;
};

exports.default = transformCodeBlocks;