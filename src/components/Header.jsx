import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
        <h1>Logo</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </nav>
    </div>
  )
}

export default Header