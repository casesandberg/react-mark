'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from './config';

import findComponent from '../../src/helpers/findComponent.js';

// (name, args, children, replace)

// describe('Component Loop', () => {
//   it('should output a header', () => {
//     const simple = ReactDOMServer.renderToStaticMarkup(findComponent('header', { level: 1 }, 'Hello'));
//     expect(simple).to.eql('<div><h1>Hello</h1></div>');
//   });
// });
