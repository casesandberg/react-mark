'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class InlineCode extends React.Component {
  classes() {
    return {
      'default': {
        code: {
          background: 'rgba(0,0,0,.05)',
          fontFamily: 'Consolas, Monaco, Andale Mono, monospace',
          lineHeight: '1.5',
          fontSize: '14px',
          borderRadius: '4px',
          padding: '2px 4px',
        },
      },
    };
  }

  render() {
    return <span is="code">{ this.props.children }</span>;
  }
};

export default ReactCSS(InlineCode);
