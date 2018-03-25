import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <h2>Logo here</h2>
            {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <a className="navbar-item" href="http://mkplxix.net">
          Home
        </a>
        <Link className="navbar-item" to="/">
          Blog Posts
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
