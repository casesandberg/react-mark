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

class HR extends React.Component {
  render() {
    return <hr />;
  }
}

export const getComponent = (type, args) => {
  if (type === 'header') {
    if (eval('H' + args.level)) {
      return eval('H' + args.level);
    }
  }

  if (type === 'para') {

    // if (args[0] === 'em') {
    //
    // }
    return P;
  }

  if (type === 'hr') {
    return HR;
  }

  console.log('COMPONENT DOESNT EXIST', type);
  return class Foo extends React.Component {
    render() {
      return <div>{ this.props.children }</div>;
    }
  };
};

export default getComponent;
