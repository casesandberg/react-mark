import chai from 'chai';
const expect = chai.expect;
require('testdom')('<html><body></body></html>');
import spies from 'chai-spies';
chai.use(spies);

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const ReactDOMServer = require('react-dom/server');

export { React, ReactDOM, ReactDOMServer, TestUtils, expect, chai, spies };
