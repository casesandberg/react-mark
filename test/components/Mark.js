'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from '../helpers/config';

import Mark from '../../src/components/Mark.js';

// https://daringfireball.net/projects/markdown/syntax
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

describe('Mark', function() {
  it('should parse headers', function() {
    // class El extends React.Component {
    //   render() {
    //     return (
    //       <>
    //         {`# header 1 \n
    //         ## header 2 \n
    //         ### header 3 \n
    //         #### header 4 \n
    //         ##### header 5 \n
    //         ###### header 6`}
    //       </Mark>
    //     );
    //   }
    // }

    // var el = TestUtils.renderIntoDocument(<El />);
    // expect(el.render().props).to.eql('foo');

    var h1 = ReactDOMServer.renderToStaticMarkup(<Mark text="# header 1"/>);
    expect(h1).to.eql('<div><h1>header 1</h1></div>');

    var h2 = ReactDOMServer.renderToStaticMarkup(<Mark text="## header 2"/>);
    expect(h2).to.eql('<div><h2>header 2</h2></div>');

    var h3 = ReactDOMServer.renderToStaticMarkup(<Mark text="### header 3"/>);
    expect(h3).to.eql('<div><h3>header 3</h3></div>');

    var h4 = ReactDOMServer.renderToStaticMarkup(<Mark text="#### header 4"/>);
    expect(h4).to.eql('<div><h4>header 4</h4></div>');

    var h5 = ReactDOMServer.renderToStaticMarkup(<Mark text="##### header 5"/>);
    expect(h5).to.eql('<div><h5>header 5</h5></div>');

    var h6 = ReactDOMServer.renderToStaticMarkup(<Mark text="###### header 6"/>);
    expect(h6).to.eql('<div><h6>header 6</h6></div>');
  });

  it('should parse emphasis', function() {
    var italic = ReactDOMServer.renderToStaticMarkup(<Mark text="*asterisks*"/>);
    expect(italic).to.eql('<div><p><em>asterisk</em></p></div>');

    var italic2 = ReactDOMServer.renderToStaticMarkup(<Mark text="_asterisks_"/>);
    expect(italic2).to.eql('<div><p><em>asterisk</em></p></div>');

    var bold = ReactDOMServer.renderToStaticMarkup(<Mark text="**bold**"/>);
    expect(bold).to.eql('<div><p><srong>bold</srong></p></div>');

    var bold2 = ReactDOMServer.renderToStaticMarkup(<Mark text="__bold__"/>);
    expect(bold2).to.eql('<div><p><srong>bold</srong></p></div>');

    var both = ReactDOMServer.renderToStaticMarkup(<Mark text="**asterisks and _underscores_**"/>);
    expect(both).to.eql('<div><p><strong>asterisks and <em>underscores</em></strong></p></div>');

    var strike = ReactDOMServer.renderToStaticMarkup(<Mark text="~~strike~~"/>);
    expect(strike).to.eql('<div><p><del>strike</del></p></div>');
  });

  it('should parse lists', function() {
    var ol = `
    1. Foo
    2. Bar
    3. Baz
    `;
    var list = ReactDOMServer.renderToStaticMarkup(<Mark text={ ol } />);
    expect(list).to.eql('<div><ul><li>Foo</li><li>Bar</li><li>Baz</li></div>');

    var ul = `
    * Foo
    * Bar
    * Baz
    `;
    var list2 = ReactDOMServer.renderToStaticMarkup(<Mark text={ ul } />);
    expect(list2).to.eql('<div><ul><li>Foo</li><li>Bar</li><li>Baz</li></div>');
  });

  it('should parse links', function() {
    var link = ReactDOMServer.renderToStaticMarkup(<Mark text="[Some Link](http://chant.io/)" />);
    expect(link).to.eql('<div><a href="http://chant.io/">Some Link</a></div>');

    var link2 = ReactDOMServer.renderToStaticMarkup(<Mark text="[Some Link](http://chant.io/ 'Conquer Social Support as a Team')" />);
    expect(link2).to.eql('<div><a title="Conquer Social Support as a Team" href="http://chant.io/">Some Link</a></div>');
  });

  it('should parse images', function() {
    var img = ReactDOMServer.renderToStaticMarkup(<Mark text="![Alt Text](http://chant.io/splash.png)" />);
    expect(img).to.eql('<div><img src="http://chant.io/splash.png" alt="Alt Text"></div>');
  });

  it('should parse blockquotes', function() {
    var block = ReactDOMServer.renderToStaticMarkup(<Mark text="> Some Amazing Takeaway" />);
    expect(block).to.eql('<div><blockquote>Some Amazing Takeaway</blockquote></div>');
  });

  it('should parse hrs', function() {
    var hr = ReactDOMServer.renderToStaticMarkup(<Mark text="---" />);
    expect(hr).to.eql('<div><hr /></div>');

    var hr2 = ReactDOMServer.renderToStaticMarkup(<Mark text="***" />);
    expect(hr2).to.eql('<div><hr /></div>');

    var hr3 = ReactDOMServer.renderToStaticMarkup(<Mark text="___" />);
    expect(hr3).to.eql('<div><hr /></div>');
  });
});
