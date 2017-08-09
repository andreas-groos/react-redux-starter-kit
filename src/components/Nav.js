import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand text-primary" href="#">Crypto Watch</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              { /* FIXME: / is always active, i.e. /dummy it's still active*/ }
              <NavLink className="nav-item nav-link" exact activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" activeClassName='active' to='/dummy'>Dummy</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Nav