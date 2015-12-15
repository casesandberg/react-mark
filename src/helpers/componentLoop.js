'use strict';

import React from 'react';
import _ from 'underscore';
import findComponent from './findComponent';

export const componentLoop = (elements) => {
  const children = [];
  let name;
  let args = {};
  elements.map((element, i) => {
    if (i === 0) {
      name = element;
    } else {
      if (_.isObject(element) && !_.isArray(element)) {
        args = element;
      } else {

        if (_.isArray(element)) {
          children.push(componentLoop(element));
        } else {
          children.push(element);
        }
      }
    }
  });

  return findComponent(name, args, children);
};

export default componentLoop;
