'use strict';

export default `
# React Mark

Configurable Markdown Components in React.

> - Wrap markdown with custom components.
- Compatible with markdown stylesheets.
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

By default, \`react-mark\` outputs all the standard markdown elements listed below:

- Headers (<h1> ... <h6>)
- Font Styles (<strong>, <em>, <del>)
- Lists (<ul>, <ol>, <li>)
- Links (<a>)
- Images (<img>)
- Blockquotes (<blockquote>)
- Hrs (<hr>)
- Code (<code>, <pre>)

You can take a look at the basic react components for each element [here](https://github.com/casesandberg/react-mark/tree/master/src/components/basic).

## Custom Components

\`react-mark\`'s real power is the ability to swap out any of the components above for custom components. Say you want codeblocks to have line numbers:

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

Then, we can use it in place of the default code \`pre\` component:

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

To wrap markdown with a custom component, pass an object down via the \`replace\` prop with the element name as the key (in this case \`pre\`) and the component as the value.

## props

### text, children
Type: \`string\`

The Markdown to be rendered in React components.

### replace
Type: \`obj\`

Pass down custom components to replace tags. Tag names include: \`a\` \`blockquote\` \`code\` \`del\` \`em\` \`header\` \`hr\` \`img\` \`li\` \`list\` \`p\` \`pre\` \`ref\` \`span\` \`strong\` \`ul\`
`;
