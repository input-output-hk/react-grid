import React from 'react'

const NavStyle = {
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 0,
  width: '100%',
  textAlign: 'center'
}

const Header = () => (
  <nav style={NavStyle}>
    <div className='container'>
      <div className='nav-wrapper'>
        <ul className='center'>
          <li><a href='index.html'>Home</a></li>
          <li><a href='examples.html'>Examples</a></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
