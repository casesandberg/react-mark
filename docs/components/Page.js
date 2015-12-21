'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Code from './Code';
import InlineCode from './InlineCode';
import Markdown from '../../src/components/Mark';

import documentation from '../documentation/index';

export class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      copy: documentation,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    return {
      'default': {
        page: {
          display: 'flex',
          alignItems: 'stretch',
          Absolute: '0 0 0 0',
        },
        left: {
          flex: 1,
          position: 'relative',
          padding: '40px',
        },
        right: {
          flex: 1,
          padding: '40px',
          background: '#fff',
          boxShadow: '0 0 16px rgba(0,0,0,.14), 0 0 2px rgba(0,0,0,.14)',
          overflowY: 'scroll',
        },
        textarea: {
          Absolute: '0 6% 0 6%',
          width: '88%',
          border: 'none',
          padding: '0',
          outline: 'none',
          background: 'transparent',
          fontSize: '16px',
          lineHeight: '24px',
          margin: '0',
        },
        header: {
          margin: '-20px -20px 30px -20px',
          display: 'flex',
        },
        count: {
          padding: '3px 10px',
        },
        github: {
          marginLeft: 'auto',
          marginRight: '-6px',
          padding: '6px',
          fill: '#999',
        },
      },
    };
  }

  handleChange(e) {
    this.setState({ copy: e.target.value });
  }

  render() {
    return (
      <div is="page">
        <div is="left">
          <textarea is="textarea" className="markdown-text" value={ this.state.copy } onChange={ this.handleChange } />
        </div>
        <div is="right">
          <div is="header">
            <svg width="107px" height="37px" viewBox="0 0 107 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" fill="none" fill-rule="evenodd">
                    <g id="Artboard-1" transform="translate(-143.000000, -204.000000)" fill="#7ED321">
                        <path d="M143,206.0024 C143,204.896505 143.892883,204 144.994967,204 L248.005033,204 C249.106823,204 250,204.896279 250,206.0024 L250,238.9976 C250,240.103495 249.107117,241 248.005033,241 L144.994967,241 C143.893177,241 143,240.103721 143,238.9976 L143,206.0024 Z M145,206 L248,206 L248,239 L145,239 L145,206 Z M175.13,212.79 L175.13,233.28 C175.13,233.480001 175.060001,233.649999 174.92,233.79 C174.779999,233.930001 174.610001,234 174.41,234 L169.88,234 C169.679999,234 169.510001,233.930001 169.37,233.79 C169.229999,233.649999 169.16,233.480001 169.16,233.28 L169.16,223.62 C169.16,223.419999 169.070001,223.31 168.89,223.29 C168.709999,223.27 168.560001,223.339999 168.44,223.5 L163.4,231.63 C163.3,231.790001 163.140001,231.87 162.92,231.87 C162.699999,231.87 162.530001,231.790001 162.41,231.63 L157.37,223.5 C157.27,223.339999 157.130001,223.27 156.95,223.29 C156.769999,223.31 156.68,223.419999 156.68,223.62 L156.68,233.28 C156.68,233.480001 156.610001,233.649999 156.47,233.79 C156.329999,233.930001 156.160001,234 155.96,234 L151.43,234 C151.229999,234 151.060001,233.930001 150.92,233.79 C150.779999,233.649999 150.71,233.480001 150.71,233.28 L150.71,212.79 C150.71,212.589999 150.779999,212.420001 150.92,212.28 C151.060001,212.139999 151.229999,212.07 151.43,212.07 L155.63,212.07 C155.830001,212.07 156.039999,212.129999 156.26,212.25 C156.480001,212.370001 156.64,212.509999 156.74,212.67 L162.5,221.13 C162.620001,221.290001 162.759999,221.37 162.92,221.37 C163.080001,221.37 163.21,221.290001 163.31,221.13 L169.07,212.67 C169.190001,212.509999 169.359999,212.370001 169.58,212.25 C169.800001,212.129999 170.009999,212.07 170.21,212.07 L174.41,212.07 C174.610001,212.07 174.779999,212.139999 174.92,212.28 C175.060001,212.420001 175.13,212.589999 175.13,212.79 Z M185.96,212.73 C186.04,212.549999 186.174999,212.395001 186.365,212.265 C186.555001,212.134999 186.759999,212.07 186.98,212.07 L191.18,212.07 C191.380001,212.07 191.574999,212.134999 191.765,212.265 C191.955001,212.395001 192.09,212.549999 192.17,212.73 L200.93,233.13 C201.01,233.310001 200.995001,233.499999 200.885,233.7 C200.774999,233.900001 200.560002,234 200.24,234 L195.11,234 C194.889999,234 194.685001,233.935001 194.495,233.805 C194.304999,233.674999 194.160001,233.520001 194.06,233.34 L193.25,231.54 C193.15,231.359999 193.005001,231.205001 192.815,231.075 C192.624999,230.944999 192.430001,230.88 192.23,230.88 L185.9,230.88 C185.679999,230.88 185.475001,230.944999 185.285,231.075 C185.094999,231.205001 184.96,231.359999 184.88,231.54 L184.04,233.34 C183.96,233.520001 183.825001,233.674999 183.635,233.805 C183.444999,233.935001 183.250001,234 183.05,234 L177.89,234 C177.79,234 177.685001,233.98 177.575,233.94 C177.464999,233.9 177.375,233.84 177.305,233.76 C177.235,233.68 177.19,233.580001 177.17,233.46 C177.15,233.339999 177.18,233.200001 177.26,233.04 L185.96,212.73 Z M187.73,225.78 L190.4,225.78 C190.600001,225.78 190.745,225.715001 190.835,225.585 C190.925,225.454999 190.920001,225.300001 190.82,225.12 C190.619999,224.619997 190.380001,224.035003 190.1,223.365 C189.819999,222.694997 189.560001,222.070003 189.32,221.49 C189.24,221.309999 189.150001,221.22 189.05,221.22 C188.949999,221.22 188.86,221.309999 188.78,221.49 L187.28,225.12 C187.2,225.300001 187.2,225.454999 187.28,225.585 C187.36,225.715001 187.509999,225.78 187.73,225.78 Z M207.08,234 L202.61,234 C202.409999,234 202.240001,233.930001 202.1,233.79 C201.959999,233.649999 201.89,233.480001 201.89,233.28 L201.89,212.76 C201.89,212.559999 201.959999,212.390001 202.1,212.25 C202.240001,212.109999 202.409999,212.04 202.61,212.04 L211.94,212.04 C213.100006,212.04 214.169995,212.234998 215.15,212.625 C216.130005,213.015002 216.964997,213.559996 217.655,214.26 C218.345003,214.960003 218.884998,215.789995 219.275,216.75 C219.665002,217.710005 219.86,218.769994 219.86,219.93 C219.86,220.570003 219.785001,221.204997 219.635,221.835 C219.484999,222.465003 219.270001,223.059997 218.99,223.62 C218.709999,224.180003 218.380002,224.684998 218,225.135 C217.619998,225.585002 217.190002,225.959998 216.71,226.26 C216.549999,226.380001 216.445,226.524999 216.395,226.695 C216.345,226.865001 216.379999,227.029999 216.5,227.19 C217.260004,228.190005 218.059996,229.219995 218.9,230.28 C219.740004,231.340005 220.489997,232.309996 221.15,233.19 C221.270001,233.350001 221.3,233.524999 221.24,233.715 C221.18,233.905001 221.050001,234 220.85,234 L215.27,234 C215.069999,234 214.855001,233.945001 214.625,233.835 C214.394999,233.724999 214.220001,233.590001 214.1,233.43 C213.459997,232.589996 212.825003,231.740004 212.195,230.88 C211.564997,230.019996 210.940003,229.150004 210.32,228.27 C210.199999,228.109999 210.030001,227.975001 209.81,227.865 C209.589999,227.754999 209.380001,227.7 209.18,227.7 L208.52,227.7 C208.319999,227.7 208.150001,227.769999 208.01,227.91 C207.869999,228.050001 207.8,228.219999 207.8,228.42 L207.8,233.28 C207.8,233.480001 207.730001,233.649999 207.59,233.79 C207.449999,233.930001 207.280001,234 207.08,234 Z M208.52,222.18 L211.7,222.18 C211.940001,222.18 212.189999,222.135 212.45,222.045 C212.710001,221.955 212.949999,221.815001 213.17,221.625 C213.390001,221.434999 213.569999,221.200001 213.71,220.92 C213.850001,220.639999 213.92,220.310002 213.92,219.93 C213.92,219.729999 213.885,219.495001 213.815,219.225 C213.745,218.954999 213.625001,218.695001 213.455,218.445 C213.284999,218.194999 213.055001,217.985001 212.765,217.815 C212.474999,217.644999 212.120002,217.56 211.7,217.56 L208.52,217.56 C208.319999,217.56 208.150001,217.629999 208.01,217.77 C207.869999,217.910001 207.8,218.079999 207.8,218.28 L207.8,221.46 C207.8,221.660001 207.869999,221.829999 208.01,221.97 C208.150001,222.110001 208.319999,222.18 208.52,222.18 Z M235.79,233.46 L229.97,226.95 C229.829999,226.789999 229.715,226.73 229.625,226.77 C229.535,226.81 229.49,226.929999 229.49,227.13 L229.49,233.28 C229.49,233.480001 229.420001,233.649999 229.28,233.79 C229.139999,233.930001 228.970001,234 228.77,234 L224.27,234 C224.049999,234 223.875001,233.930001 223.745,233.79 C223.614999,233.649999 223.55,233.480001 223.55,233.28 L223.55,212.76 C223.55,212.559999 223.614999,212.390001 223.745,212.25 C223.875001,212.109999 224.049999,212.04 224.27,212.04 L228.77,212.04 C228.970001,212.04 229.139999,212.109999 229.28,212.25 C229.420001,212.390001 229.49,212.559999 229.49,212.76 L229.49,219.66 C229.49,219.860001 229.53,219.975 229.61,220.005 C229.69,220.035 229.789999,219.970001 229.91,219.81 L235.31,212.64 C235.430001,212.479999 235.599999,212.345001 235.82,212.235 C236.040001,212.124999 236.259999,212.07 236.48,212.07 L242.21,212.07 C242.430001,212.07 242.57,212.164999 242.63,212.355 C242.69,212.545001 242.660001,212.719999 242.54,212.88 L234.65,222.75 C234.529999,222.910001 234.475,223.094999 234.485,223.305 C234.495,223.515001 234.569999,223.689999 234.71,223.83 C235.390003,224.570004 236.109996,225.339996 236.87,226.14 C237.630004,226.940004 238.384996,227.744996 239.135,228.555 C239.885004,229.365004 240.624996,230.164996 241.355,230.955 C242.085004,231.745004 242.779997,232.479997 243.44,233.16 C243.580001,233.320001 243.63,233.499999 243.59,233.7 C243.55,233.900001 243.420001,234 243.2,234 L236.99,234 C236.769999,234 236.545001,233.95 236.315,233.85 C236.084999,233.749999 235.910001,233.620001 235.79,233.46 Z"></path>
                    </g>
                </g>
            </svg>
            <div is="count">
              <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-mark&type=star&count=true&size=large" scrolling="0" width="140px" height="30px" frameBorder="0"></iframe>
            </div>
            <a is="github" href="https://github.com/casesandberg/react-mark" target="__blank">
              <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </div>
          <Markdown text={ this.state.copy } replace={{ pre: Code, code: InlineCode }} />
        </div>
      </div>
    );
  }
};

export default ReactCSS(Page);
