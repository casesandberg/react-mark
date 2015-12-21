'use strict';

import React from 'react';
import { markdown } from 'markdown';
import componentLoop from '../helpers/componentLoop';
import transformCodeBlocks from '../helpers/transformCodeBlocks';

export class Mark extends React.Component {
  render() {
    let input = this.props.text || this.props.children || [];
    window.input = input;
    let blocked = transformCodeBlocks(input);
    let elements = markdown.parse(blocked);
    window.elements = elements;
    return componentLoop(elements, this.props.replace);
  }
};

Mark.defaultProps = {
  replace: {},
};

export default Mark;
