'use strict';

import React from 'react';
import { markdown } from 'markdown';
import componentLoop from '../helpers/componentLoop';

export class Mark extends React.Component {
  render() {
    var elements = markdown.parse(this.props.text || this.props.children || []);
    return componentLoop(elements);
  }
};

export default Mark;
