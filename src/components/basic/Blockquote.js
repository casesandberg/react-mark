'use strict';

import React from 'react';

export class BLOCKQUOTE extends React.Component {
  render() {
    return <blockquote>{ this.props.children }</blockquote>;
  }
}

export default BLOCKQUOTE;
