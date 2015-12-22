'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Code from './Code';
import InlineCode from './InlineCode';
import Markdown from '../../src/components/Mark';

import documentation from '../documentation/index';

export class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      copy: documentation,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setBreakpoint = this.setBreakpoint.bind(this);
  }

  classes() {
    return {
      'default': {
        page: {
          display: 'flex',
          alignItems: 'stretch',
          Absolute: '0 0 0 0',
        },
        left: {
          flex: 2,
          position: 'relative',
          padding: '40px',
        },
        right: {
          flex: 3,
          padding: '40px',
          background: '#fff',
          boxShadow: '0 0 16px rgba(0,0,0,.14), 0 0 2px rgba(0,0,0,.14)',
          overflowY: 'scroll',
        },
        textarea: {
          Absolute: '0 6% 0 6%',
          width: '88%',
          border: 'none',
          padding: '0',
          outline: 'none',
          background: 'transparent',
          fontSize: '16px',
          lineHeight: '24px',
          margin: '0',
          fontFamily: 'Georgia, Palatino, serif',
          color: '#999',
          transform: 'color 200ms linear',
        },
        header: {
          margin: '-20px -20px 30px -20px',
          display: 'flex',
        },
        count: {
          padding: '3px',
        },
        github: {
          marginLeft: 'auto',
          marginRight: '-6px',
          padding: '6px',
          fill: '#999',
        },
      },
      'focus': {
        textarea: {
          color: '#333',
        },
      },
      'mobile': {
        left: {
          display: 'none',
        },
        right: {
          padding: '20px',
        },
        header: {
          margin: '-10px -10px 0 -10px',
        },
      },
    };
  }

  activations() {
    return {
      'focus': this.state.focus,
      'mobile': this.state.mobile,
    };
  }

  handleChange(e) {
    this.setState({ copy: e.target.value });
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  setBreakpoint() {
    if (window.innerWidth < 700) {
      if (!this.state.mobile) {
        this.setState({ mobile: true });
      }
    } else {
      if (this.state.mobile) {
        this.setState({ mobile: false });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setBreakpoint);
    this.setBreakpoint();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBreakpoint);
  }

  render() {
    return (
      <div is="page">
        <div is="left">
          <textarea is="textarea" onFocus={ this.handleFocus } onBlur={ this.handleBlur } className="markdown-text" value={ this.state.copy } onChange={ this.handleChange } />
        </div>
        <div is="right">
          <div is="header">
            <div is="count">
              <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-mark&type=star&count=true&size=large" scrolling="0" width="140px" height="30px" frameBorder="0"></iframe>
            </div>
            <a is="github" href="https://github.com/casesandberg/react-mark" target="__blank">
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </div>
          <Markdown text={ this.state.copy } replace={{ pre: Code, code: InlineCode }} />
        </div>
      </div>
    );
  }
};

export default ReactCSS(Page);
