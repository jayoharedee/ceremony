import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import '../css/fonts.css'
import '../css/style.css'
// import '../css/desktop.css'


render(<App />, document.getElementById('app'))

module.hot.accept();
