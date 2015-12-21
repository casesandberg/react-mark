'use strict';

import React from 'react';

export class CODEBLOCK extends React.Component {
  render() {
    return <pre><code>{ this.props.children }</code></pre>;
  }
}

export default CODEBLOCK;
