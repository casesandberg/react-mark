'use strict';

import React from 'react';
import { markdown } from 'markdown';
import componentLoop from '../helpers/componentLoop';

export class Mark extends React.Component {
  render() {
    var input = (this.props.text || this.props.children || []).replace('\`', '`');
    console.log(input);
    var elements = markdown.parse(input);
    return componentLoop(elements, this.props.replace);
  }
};

Mark.defaultProps = {
  replace: {},
};

export default Mark;
