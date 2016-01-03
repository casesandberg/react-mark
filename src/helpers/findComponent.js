'use strict';

import React from 'react';

import { A, BLOCKQUOTE, CODEBLOCK, DEL, EM, H, HR, IMG, INLINECODE, LI, LIST, MARKDOWN, P, REF, SPAN, STRONG, UL } from '../components/basic/index';

export const findComponent = (name, args, children, replace = {}) => {
  let possible = {
    'header': replace.header,
    'para': replace.p,
    'em': replace.em,
    'strong': replace.strong,
    'hr': replace.hr,
    'numberlist': replace.ul,
    'bulletlist': replace.ol,
    'listitem': replace.li,
    'link': replace.a,
    'img': replace.img,
    'blockquote': replace.blockquote,
    'inlinecode': replace.code,
    'code_block': replace.pre,
    'link_ref': replace.ref,
  }[name];

  let basic = {
    'header': H,
    'para': P,
    'em': EM,
    'strong': STRONG,
    'hr': HR,
    'numberlist': UL,
    'bulletlist': UL,
    'listitem': LI,
    'link': A,
    'img': IMG,
    'blockquote': BLOCKQUOTE,
    'inlinecode': INLINECODE,
    'code_block': CODEBLOCK,
    'link_ref': null,
    'markdown': MARKDOWN,
    'link_ref': REF,
  }[name];

  if (!possible && !basic) {
    console.log('COMPONENT DOESNT EXIST', name, args, children);
  }

  const el = possible || basic || SPAN;

  return React.createElement(el, Object.assign({}, args, { key: 'r' + Math.random(), target: args.ref }), children);
};

export default findComponent;
