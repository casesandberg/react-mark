'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from './config';

import componentLoop from '../../src/helpers/componentLoop.js';

describe('Component Loop', () => {
  it('should parse a simple markdown string', () => {
    let elements = ['markdown', ['header', { level: 1 }, 'title'], ['para', ['strong', 'asterisks and ', ['em', 'underscores'], '!']], ['para', 'foo bar'], ['para', 'hello']];
    const simple = ReactDOMServer.renderToStaticMarkup(componentLoop(elements));
    expect(simple).to.eql('<div><h1>title</h1><p><strong>asterisks and <em>underscores</em>!</strong></p><p>foo bar</p><p>hello</p></div>');
  });
});
