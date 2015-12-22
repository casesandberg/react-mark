# React Mark

Configurable Markdown Components in React.

> - Wrap markdown with custom components.
- Compatible with markdown stylesheets.
- Uses evilstreak's [markdown-js](https://github.com/evilstreak/markdown-js) for parsing.

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
    return <Markdown># React Mark</Markdown>;
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
