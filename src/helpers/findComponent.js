'use strict';

import React from 'react';

class H1 extends React.Component {
  render() {
    return <h1>{ this.props.children }</h1>;
  }
}

class H2 extends React.Component {
  render() {
    return <h2>{ this.props.children }</h2>;
  }
}

class H3 extends React.Component {
  render() {
    return <h3>{ this.props.children }</h3>;
  }
}

class H4 extends React.Component {
  render() {
    return <h4>{ this.props.children }</h4>;
  }
}

class H5 extends React.Component {
  render() {
    return <h5>{ this.props.children }</h5>;
  }
}

class H6 extends React.Component {
  render() {
    return <h6>{ this.props.children }</h6>;
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

export const findComponent = (name, args, children) => {
  let el;
  if (name === 'header') {
    if (eval('H' + args.level)) {
      el = eval('H' + args.level);
    }
  } else if (name === 'para') {
    el = P;
  } else if (name === 'em') {
    el = EM;
  } else if (name === 'strong') {
    el = STRONG;
  } else if (name === 'hr') {
    el = HR;
  } else if (name === 'numberlist') {
    el = UL;
  } else if (name === 'bulletlist') {
    el = UL;
  } else if (name === 'listitem') {
    el = LI;
  } else if (name === 'link') {
    el = A;
  } else if (name === 'img') {
    el = IMG;
  } else if (name === 'blockquote') {
    el = BLOCKQUOTE;
  } else if (name === 'inlinecode') {
    el = INLINECODE;
  } else if (name === 'code_block') {
    el = CODEBLOCK;

  // } else if (name === 'link_ref') {
  } else {
    name !== 'markdown' && console.log('COMPONENT DOESNT EXIST', name);
    el = class Foo extends React.Component {
      render() {
        return <div>{ this.props.children }</div>;
      }
    };
  }

  return React.createElement(el, Object.assign({}, args, { key: 'r' + Math.random() }), children);
};

export default findComponent;
