'use strict';

export const transformCodeBlocks = (input) => {
  let codeBlockPattern = /\`\`\`.*\n([\s\S]*?)\`\`\`/g;
  let matches;
  while (matches = codeBlockPattern.exec(input)) {
    let block = matches[0];
    let code = matches[1];
    let lines = code.split('\n');

    lines.map((line, i) => {
      if (line) {
        lines[i] = '    ' + line;
      }
    });

    input = input.replace(block, lines.join('\n'));
  }

  return input;
};

export default transformCodeBlocks;
