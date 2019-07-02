import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const MainStyle = {
  marginTop: '120px',
  flex: '1 0 auto'
}

const AppStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
}

const App = ({ children }) => (
  <div style={AppStyle}>
    <Header />
    <main style={MainStyle}>
      <div className='container'>
        {children}
      </div>
    </main>
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
