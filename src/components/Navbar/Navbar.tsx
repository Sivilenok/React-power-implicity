import React from 'react'
import './navbar.scss';
import logo from '../../assets/apple.svg';

export const Navbar = () => {
  return (
    <header className='navbar'>
      <img src={logo} alt="apple" />
      <nav className="navbar__navigate">
        <a className='navbar__navigate--link' href='#'>
          Features
        </a>
        <a className='navbar__navigate--link' href='#'>
           Partners
        </a>
        <a className='navbar__navigate--link' href='#'>
           Stories
        </a>
      </nav>
      <button className='navbar__btn'>Download for free</button>
    </header>
  )
}
