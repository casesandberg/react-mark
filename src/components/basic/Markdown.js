'use strict';

import React from 'react';

export class MARKDOWN extends React.Component {
  render() {
    return <div>{ this.props.children }</div>;
  }
}

export default MARKDOWN;
