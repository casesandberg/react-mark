'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Code from './Code';
import Markdown from '../../src/components/Mark';

import documentation from '../documentation/index';

export class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      copy: documentation,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        page: {
          display: 'flex',
          alignItems: 'stretch',
          Absolute: '0 0 0 0',
          background: '#f3f5f6',
        },
        left: {
          flex: 1,
          position: 'relative',
          padding: '40px',
        },
        right: {
          flex: 1,
          padding: '40px',
          background: '#fff',
          boxShadow: '0 0 16px rgba(0,0,0,.14), 0 0 2px rgba(0,0,0,.14)',
          overflowY: 'scroll',
        },
        textarea: {
          Absolute: '20px 6% 20px 6%',
          width: '88%',
          border: 'none',
          padding: '0',
          outline: 'none',
          background: 'transparent',
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
    };
  }

  handleChange(e) {
    this.setState({ copy: e.target.value });
  }

  render() {
    return (
      <div is="page">
        <div is="left">
          <textarea is="textarea" value={ this.state.copy } onChange={ this.handleChange } />
        </div>
        <div is="right">
          <Markdown text={ this.state.copy } replace={{ codeblock: Code }} />
        </div>
      </div>
    );
  }
};

export default ReactCSS(Page);
