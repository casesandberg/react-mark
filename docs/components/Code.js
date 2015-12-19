'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class Code extends React.Component {
  classes() {
    return {
      'default': {
        code: {
          background: 'rgba(0,0,0,.05)',
          padding: '15px',
          fontFamily: 'Consolas, Monaco, Andale Mono, monospace',
          lineHeight: '1.5',
          fontSize: '14px',
          borderRadius: '4px',
        },
        line: {
          display: 'flex',
        },
        number: {
          minWidth: '34px',
          color: '#ccc',
        },
      },
    };
  }

  render() {
    var code = this.props.children[0];
    return (
      <div is="code">
        { code.split('\n').map((lineText, i) => {
          return (
            <div is="line" key={ i }>
              <div is="number">{ i + 1 }</div>
              <div is="text">{ lineText.replace(' ', '\s') }</div>
            </div>
          );
        }) }
      </div>
    );
  }
};

export default ReactCSS(Code);
