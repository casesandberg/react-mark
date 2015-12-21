'use strict';

export default `



# React Mark

> Render markdown with React components.

- Highly configurable! Wrap markdown with your own custom components.
- Compatabile with all CSS markdown stylesheet.
- Uses evilstreak's [markdown-js](https://github.com/evilstreak/markdown-js) for parsing.

## Install

\`\`\`bash
npm install react-mark --save
\`\`\`

## Usage

\`\`\`js
import React from 'react';
import Markdown from 'react-mark';

class Component extends React.Component {
  render() {
    return <Markdown># ReactMark is cool</Markdown>;
  }
}
\`\`\`

## Default components

By default \`react-mark\` outputs all the standard markdown elements listed below:

- Headers (<h1> ... <h6>)
- Font Styles (<strong>, <em>, <del>)
- Lists (<ul>, <ol>, <li>)
- Links (<a>)
- Images (<img>)
- Blockquotes (<blockquote>)
- Hrs (<hr>)
- Code (<code>, <pre>)

You can take a look at the basic react components for each element [here](http://foo.bar/).

## Custom components

The real power of \`react-mark\` is being able to swap out any of the components above for your own custom components. Say we want to make our codeblocks have line numbers:

\`\`\`js
// CodeWithNumbers.js
import React from 'react';

class CodeWithNumbers extends React.Component {
  render() {
    return (
      <div className="code">
        { this.children.split('\n').map((lineText, i) => {
          return (
            <div className="code-line">
              <div className="line-number">{ i + 1 }</div>
              <div className="line-text">{ lineText }</div>
            </div>
          )
        }) }
      </div>
    );
  }
}
\`\`\`

And then we can use it in place of the default code component:

\`\`\`js
import React from 'react';
import Markdown from 'react-mark';

import CodeWithNumbers from './CodeWithNumbers'

class Component extends React.Component {
  render() {
    return (
      <Markdown replace={{ code: CodeWithNumbers }}>
        // \`\`\`
        // import React from 'react';
        // import Markdown from 'react-mark';
        // \`\`\`
      </Markdown>
    );
  }
}
\`\`\`

To wrap markdown with a custom component, pass an object down via the \`replace\` prop with the key being the element you want to replace (in this case \`code\`) and the value being the component.

`;
