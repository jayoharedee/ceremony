import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import TopNav from './topnav'
import Projects from './projects'
import Services from './company-services'
import About from './about'

const App = () => {
  return (
    <Router>
      <>
        <TopNav />
        <Route path="/" exact component={Projects} />
        <Route path="/services/" component={Services} />
        <Route path="/about/" component={About} />
      </>
    </Router>
  )
}

export default App
