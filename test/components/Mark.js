'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from '../helpers/config';

import Mark from '../../src/components/Mark.js';

describe('Mark', function() {
  it('should have an output with foo', function() {
    class El extends React.Component {
      render() {
        return <Mark />;
      }
    }

    // var el = TestUtils.renderIntoDocument(<El />);
    // expect(el.render().props).to.eql('foo');

    var serverEl = ReactDOMServer.renderToStaticMarkup(<El/>);
    expect(serverEl).to.eql('<div>foo</div>');
  });
});
