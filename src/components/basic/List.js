'use strict';

import React from 'react';

export class LIST extends React.Component {
  render() {
    return (
      <ul>
        { this.props.children.map((child, i) => {
          return <li>{ child }</li>;
        }) }
      </ul>);
  }
}

export default LIST;
