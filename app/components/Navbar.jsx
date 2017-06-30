import React from 'react'
import {Link} from 'react-router'

export const Navbar = () => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/home"><img src='images/iyc.png' height='85px' /></Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
              <li className="countdown"><p>Countdown</p></li>
              <li><a href="https://www.facebook.com/afciyc/"><img src="images/Facebook.png"/></a></li>
              <li><a href="https://www.instagram.com/iyc.afc/"><img src="images/Instagram.png"/></a></li>
              <li><a href="https://twitter.com/afciyc"><img src="images/Twitter.png"/></a></li>
            </ul>
            <br/>
            <ul className="nav navbar-nav">
              <li><Link to="/registration">Register</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/store">It's Lit Store</Link></li>
            </ul>
          </ul>
        </div>

      </div>
    </nav>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect () (Navbar)

