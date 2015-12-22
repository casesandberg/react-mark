'use strict';

export default `
# React Mark

Markdown in React components.

> - Highly configurable! Wrap markdown with your own custom components.
> - Compatabile with markdown stylesheets.
> - Uses evilstreak's [markdown-js](https://github.com/evilstreak/markdown-js) for parsing.

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
    return <Markdown text="# React Mark"/>;
  }
}

class OtherComponent extends React.Component {
  render() {
    return <Markdown># React Mark</Markdown>;
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

You can take a look at the basic react components for each element [here](https://github.com/casesandberg/react-mark/tree/master/src/components/basic).

## Custom components

The real power of \`react-mark\` is being able to swap out any of the components above for your own custom components. Say we want to make our codeblocks have line numbers:

\`\`\`js
// NumberCode.js
import React from 'react';

export class NumberCode extends React.Component {
  render() {
    var code = this.props.children[0];
    return (
      <div className="code">
        { code.split('\\n').map((lineText, i) => {
          return (
            <div is="line" key={ i }>
              <div is="number">{ i + 1 }</div>
              <pre is="text">{ lineText }</pre>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default NumberCode;
\`\`\`

And then we can use it in place of the default code \`pre\` component:

\`\`\`js
import React from 'react';
import Markdown from 'react-mark';

import NumberCode from './NumberCode'

export class Component extends React.Component {
  render() {
    return (
      <Markdown replace={{ pre: NumberCode }}>
        import React from 'react';
        import Markdown from 'react-mark';
      </Markdown>
    );
  }
}

export default Component;
\`\`\`

To wrap markdown with a custom component, pass an object down via the \`replace\` prop with the key being the element you want to replace (in this case \`code\`) and the value being the component.

`;
