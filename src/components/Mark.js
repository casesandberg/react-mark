'use strict';

import React from 'react';
import { markdown } from 'markdown';
import getComponent from '../helpers/getComponent';
import componentLoop from '../helpers/componentLoop';

export class Mark extends React.Component {
  render() {
    var elements = markdown.parse(this.props.text || this.props.children || '');
    console.log(JSON.stringify(elements, null, 4));

    // elements.shift();

    console.log(JSON.stringify(componentLoop(elements), null, 4));

    return <div></div>;
  }
};

export default Mark;
