import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import '../css/fonts.css'
import '../css/style.css'
import '../css/desktop.css'


render(<App />, document.getElementById('app'))

module.hot.accept();
// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());
