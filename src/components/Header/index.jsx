import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo" />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
