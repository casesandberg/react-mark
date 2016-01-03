'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from './config';

import findComponent from '../../src/helpers/findComponent.js';

describe('Component Loop', () => {
  it('should output a header', () => {
    const simple = ReactDOMServer.renderToStaticMarkup(findComponent('header', { level: 1 }, 'Hello'));
    expect(simple).to.eql('<h1>Hello</h1>');
  });

  it('should output a custom header', () => {
    class DivHeader extends React.Component {
      render() {
        return <div className={ 'h' + this.props.level }>{ this.props.children }</div>;
      }
    }
    const simple = ReactDOMServer.renderToStaticMarkup(findComponent('header', { level: 1 }, 'Hello', { header: DivHeader }));
    expect(simple).to.eql('<div class="h1">Hello</div>');
  });
});
