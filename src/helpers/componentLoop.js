'use strict';

import _ from 'underscore';

export const componentLoop = (elements) => {
  const toReturn = [];
  let elementName;
  let elementArgs;
  elements.map((element, i) => {
    if (i === 0) {
      elementName = element;

    } else {
      if (_.isObject(element) && !_.isArray(element)) {
        elementArgs = element;
      } else {

        if (!toReturn.length) {
          toReturn.push('<' + elementName + '>');
        }

        if (_.isArray(element)) {
          toReturn.push(componentLoop(element));
        } else {
          toReturn.push(element);
        }

        if (i === elements.length - 1) {
          toReturn.push('</' + elementName + '>');
        }
      }
    }
  });

  return toReturn;
};

export default componentLoop;
