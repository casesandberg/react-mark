'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from '../helpers/config';

import Mark from '../../src/components/Mark.js';

// https://daringfireball.net/projects/markdown/syntax
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

describe('Mark', () => {
  it('should parse a simple markdown string', () => {
    const text = '# title\n\n**asterisks and _underscores_!**\n\nfoo bar\n\nhello';
    const simple = ReactDOMServer.renderToStaticMarkup(<Mark text={ text }/>);
    expect(simple).to.eql('<div><p><strong>asterisks and <em>underscores</em>!</strong></p></div>');
  });

  it('should parse headers', () => {
    // class El extends React.Component {
    //   render() {
    //     return (
    //       <Mark text="# header 1">
    //     );
    //   }
    // }

    // const el = TestUtils.renderIntoDocument(<El />);
    // expect(el.render().props).to.eql('foo');

    // const h1 = ReactDOMServer.renderToStaticMarkup(<Mark text="# header 1"/>);
    // expect(h1).to.eql('<div><h1>header 1</h1></div>');
    //
    // const h2 = ReactDOMServer.renderToStaticMarkup(<Mark text="## header 2"/>);
    // expect(h2).to.eql('<div><h2>header 2</h2></div>');
    //
    // const h3 = ReactDOMServer.renderToStaticMarkup(<Mark text="### header 3"/>);
    // expect(h3).to.eql('<div><h3>header 3</h3></div>');
    //
    // const h4 = ReactDOMServer.renderToStaticMarkup(<Mark text="#### header 4"/>);
    // expect(h4).to.eql('<div><h4>header 4</h4></div>');
    //
    // const h5 = ReactDOMServer.renderToStaticMarkup(<Mark text="##### header 5"/>);
    // expect(h5).to.eql('<div><h5>header 5</h5></div>');
    //
    // const h6 = ReactDOMServer.renderToStaticMarkup(<Mark text="###### header 6"/>);
    // expect(h6).to.eql('<div><h6>header 6</h6></div>');
  });

  it('should parse emphasis', () => {
    // const italic = ReactDOMServer.renderToStaticMarkup(<Mark text="*asterisks*"/>);
    // expect(italic).to.eql('<div><p><em>asterisk</em></p></div>');
    //
    // const italic2 = ReactDOMServer.renderToStaticMarkup(<Mark text="_asterisks_"/>);
    // expect(italic2).to.eql('<div><p><em>asterisk</em></p></div>');
    //
    // const bold = ReactDOMServer.renderToStaticMarkup(<Mark text="**bold**"/>);
    // expect(bold).to.eql('<div><p><srong>bold</srong></p></div>');
    //
    // const bold2 = ReactDOMServer.renderToStaticMarkup(<Mark text="__bold__"/>);
    // expect(bold2).to.eql('<div><p><srong>bold</srong></p></div>');

    // const both = ReactDOMServer.renderToStaticMarkup(<Mark text="'**asterisks and _underscores_**"/>);
    // expect(both).to.eql('<div><p><strong>asterisks and <em>underscores</em>!</strong></p></div>');

    // const strike = ReactDOMServer.renderToStaticMarkup(<Mark text="~~strike~~"/>);
    // expect(strike).to.eql('<div><p><del>strike</del></p></div>');
  });

  // it('should parse lists', () => {
  //   const ol = `
  //   1. Foo
  //   2. Bar
  //   3. Baz
  //   `;
  //   const list = ReactDOMServer.renderToStaticMarkup(<Mark text={ ol } />);
  //   expect(list).to.eql('<div><ul><li>Foo</li><li>Bar</li><li>Baz</li></div>');
  //
  //   const ul = `
  //   * Foo
  //   * Bar
  //   * Baz
  //   `;
  //   const list2 = ReactDOMServer.renderToStaticMarkup(<Mark text={ ul } />);
  //   expect(list2).to.eql('<div><ul><li>Foo</li><li>Bar</li><li>Baz</li></div>');
  // });

  // it('should parse links', () => {
  //   const link = ReactDOMServer.renderToStaticMarkup(<Mark text="[Some Link](http://chant.io/)" />);
  //   expect(link).to.eql('<div><a href="http://chant.io/">Some Link</a></div>');
  //
  //   const link2 = ReactDOMServer.renderToStaticMarkup(<Mark text="[Some Link](http://chant.io/ 'Conquer Social Support as a Team')" />);
  //   expect(link2).to.eql('<div><a title="Conquer Social Support as a Team" href="http://chant.io/">Some Link</a></div>');
  // });
  //
  // it('should parse images', () => {
  //   const img = ReactDOMServer.renderToStaticMarkup(<Mark text="![Alt Text](http://chant.io/splash.png)" />);
  //   expect(img).to.eql('<div><img src="http://chant.io/splash.png" alt="Alt Text"></div>');
  // });
  //
  // it('should parse blockquotes', () => {
  //   const block = ReactDOMServer.renderToStaticMarkup(<Mark text="> Some Amazing Takeaway" />);
  //   expect(block).to.eql('<div><blockquote>Some Amazing Takeaway</blockquote></div>');
  // });
  //
  // it('should parse hrs', () => {
  //   const hr = ReactDOMServer.renderToStaticMarkup(<Mark text="---" />);
  //   expect(hr).to.eql('<div><hr /></div>');
  //
  //   const hr2 = ReactDOMServer.renderToStaticMarkup(<Mark text="***" />);
  //   expect(hr2).to.eql('<div><hr /></div>');
  //
  //   const hr3 = ReactDOMServer.renderToStaticMarkup(<Mark text="___" />);
  //   expect(hr3).to.eql('<div><hr /></div>');
  // });
});
