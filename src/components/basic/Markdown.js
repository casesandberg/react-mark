'use strict';

import React from 'react';
import { generate } from 'shortid';

export class MARKDOWN extends React.Component {
  render() {
    var refs = [];

    for (var refName in this.props.references) {
      var ref = this.props.references[refName];
      refs.push(<p key={ generate() } id={ refName }>[{ refName }] { ref.href }</p>);
    }

    return (
      <div>
        { this.props.children }
        { refs }
      </div>
    );
  }
}

export default MARKDOWN;
