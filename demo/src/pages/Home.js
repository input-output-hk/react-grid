import React from 'react'
import readme from '../../../README.md'

const Home = () => (
  <div dangerouslySetInnerHTML={{ __html: readme }} />
)

export default Home
