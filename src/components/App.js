import React, { Component } from 'react'
import '../bootstrap.min.js'
import '../styles/style.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
// EDIT PAGES HERE
import Home from './Home'
import Dummy from './Dummy'



const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/dummy' component={ Dummy } />
          <Route render={ function () {return <p>404 Not Found</p>} } />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
