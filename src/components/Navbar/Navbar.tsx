import React from 'react'
import './navbar.scss';
import logo from '../../img/apple.svg';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="apple" />
      </div>
      <nav className="navigate">
        <ul className='list'>
          <li>Features</li>
          <li>Partners</li>
          <li>Stories</li>
        </ul>
      </nav>
      <button className='btn'>Download for free</button>
    </div>
  )
}
