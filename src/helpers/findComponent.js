'use strict';

import React from 'react';

class H extends React.Component {
  render() {
    return React.createElement('h' + this.props.level, {}, this.props.children);
  }
}

class P extends React.Component {
  render() {
    return <p>{ this.props.children }</p>;
  }
}

class EM extends React.Component {
  render() {
    return <em>{ this.props.children }</em>;
  }
}

class STRONG extends React.Component {
  render() {
    return <strong>{ this.props.children }</strong>;
  }
}

class DEL extends React.Component {
  render() {
    return <del>{ this.props.children }</del>;
  }
}

class UL extends React.Component {
  render() {
    return <ul>{ this.props.children }</ul>;
  }
}

class LI extends React.Component {
  render() {
    return <li>{ this.props.children }</li>;
  }
}

class LIST extends React.Component {
  render() {
    return (
      <ul>
        { this.props.children.map((child, i) => {
          return <li>{ child }</li>;
        }) }
      </ul>);
  }
}

class A extends React.Component {
  render() {
    return <a href={ this.props.href } title={ this.props.title }>{ this.props.children }</a>;
  }
}

class IMG extends React.Component {
  render() {
    return <img src={ this.props.href } alt={ this.props.alt } />;
  }
}

class BLOCKQUOTE extends React.Component {
  render() {
    return <blockquote>{ this.props.children }</blockquote>;
  }
}

class HR extends React.Component {
  render() {
    return <hr />;
  }
}

class INLINECODE extends React.Component {
  render() {
    return <code>{ this.props.children }</code>;
  }
}

class CODEBLOCK extends React.Component {
  render() {
    return <pre><code>{ this.props.children }</code></pre>;
  }
}

class SPAN extends React.Component {
  render() {
    return <span>{ this.props.children }</span>;
  }
}

class MARKDOWN extends React.Component {
  render() {
    return <div>{ this.props.children }</div>;
  }
}

export const findComponent = (name, args, children, replace) => {
  let possible = {
    'header': replace.header,
    'para': replace.p,
    'em': replace.em,
    'strong': replace.strong,
    'hr': replace.hr,
    'numberlist': replace.ul,
    'bulletlist': replace.ol,
    'listitem': replace.li,
    'link': replace.a,
    'img': replace.img,
    'blockquote': replace.blockquote,
    'inlinecode': replace.code,
    'code_block': replace.pre,
    'link_ref': null,
  }[name];

  let basic = {
    'header': H,
    'para': P,
    'em': EM,
    'strong': STRONG,
    'hr': HR,
    'numberlist': UL,
    'bulletlist': UL,
    'listitem': LI,
    'link': A,
    'img': IMG,
    'blockquote': BLOCKQUOTE,
    'inlinecode': INLINECODE,
    'code_block': CODEBLOCK,
    'link_ref': null,
    'markdown': MARKDOWN,
  }[name];

  if (!possible && !basic) {
    console.log('COMPONENT DOESNT EXIST', name);
  }

  const el = possible || basic || SPAN;

  return React.createElement(el, Object.assign({}, args, { key: 'r' + Math.random() }), children);
};

export default findComponent;
