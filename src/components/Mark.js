'use strict';

import React from 'react';
import { markdown } from 'markdown';
import getComponent from '../helpers/getComponent';

export class Mark extends React.Component {
  render() {
    var elements = markdown.parse(this.props.text || this.props.children || '');
    console.dir(elements);

    return (
      <div>
        { elements.map((element, i) => {
          if (i !== 0) {
            var type = '';
            var args = {};
            var text = '';

            if (element[2]) {
              var type = element[0];
              var args = element[1];
              var text = element[2];
            } else {
              var type = element[0];
              var text = element[1];
            }

            var Component = getComponent(type, args);

            return <Component key={ i }>{ text }</Component>;
          }
        }) }
      </div>
    );
  }
};

export default Mark;
