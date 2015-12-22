'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from './config';

import componentLoop from '../../src/helpers/componentLoop.js';

// describe('Component Loop', () => {
//   it('should parse a simple markdown string', () => {
//     const text = '# title\n\n**asterisks and _underscores_!**\n\nfoo bar\n\nhello';
//     const simple = ReactDOMServer.renderToStaticMarkup(<Mark text={ text }/>);
//     expect(simple).to.eql('<div><h1>title</h1><p><strong>asterisks and <em>underscores</em>!</strong></p><p>foo bar</p><p>hello</p></div>');
//   });
// });
