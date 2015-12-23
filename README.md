# [React Mark](http://casesandberg.github.io/react-mark/)

Configurable Markdown Components in React. Make your own components to do custom things like to:

> - Add line numbers and syntax highlighting to `pre` tags.
- Transform absolute and relative link paths on `a` tags.
- Add anchor links to all `h1` and `h2` tags.

## Install

``` bash
npm install react-mark --save
```

## Usage

``` js
import React from 'react';
import Markdown from 'react-mark';

class Component extends React.Component {
  render() {
    return <Markdown text="# React Mark"/>;
  }
}

class OtherComponent extends React.Component {
  render() {
    return (
      <Markdown replace={{ pre: CodeWithNumbers }}>
        import React from 'react';
        import Markdown from 'react-mark';
      </Markdown>
    );
  }
}
```



## props

### text, children
Type: `string`

The Markdown to be rendered in React components.

### replace
Type: `obj`

To wrap markdown with a custom component, pass an object down with the element name as the key and the component as the value. Tag names include: `a` `blockquote` `code` `del` `em` `header` `hr` `img` `li` `list` `p` `pre` `ref` `span` `strong` `ul`.
