'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import { generate } from 'shortid';

import Highlight from 'react-highlight';

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
          margin: '20px 0',
          display: 'flex',
        },
        numbers: {
          minWidth: '34px',
        },
        number: {
          color: '#ccc',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          MsUserSelect: 'none',
          userSelect: 'none',
        },
        text: {
          height: '21px',
        },
      },
    };
  }

  render() {
    var code = this.props.children[0];
    return (
      <div is="code" className="codeblock">
        <div is="numbers">
          { code.split('\n').map((lineText, i) => {
            return <div is="number" key={ generate() }>{ i + 1 }</div>;
          }) }
        </div>
        <div is="numbers">
          { code.split('\n').map((lineText, i) => {
            return <pre is="text" key={ generate() }><Highlight className="javascript">{ lineText ? lineText : '' }</Highlight></pre>;
          }) }
        </div>
      </div>
    );
  }
};

export default ReactCSS(Code);
