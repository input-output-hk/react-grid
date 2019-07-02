import React from 'react'

const FooterStyle = {
  paddingBottom: '30px',
  marginTop: '50px'
}

const ImageStyle = {
  width: '40px',
  verticalAlign: 'middle',
  marginRight: '12px'
}

const Footer = () => (
  <footer className='page-footer' style={FooterStyle}>
    <div className='container center-align'>
      <a className='white-text' href='https://github.com/input-output-hk/react-grid' target='noopener noreferrer'>
        <img src='/images/GitHub-mark.png' alt='GitHub' style={ImageStyle} /> Source code
      </a>
    </div>
  </footer>
)

export default Footer
