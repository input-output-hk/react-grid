import React, { useState } from 'react'
import './examples.scss'
import { Provider } from '../../../build'
import Basic from '../examples/Basic'
import Complex from '../examples/Complex'
import KitchenSink from '../examples/KitchenSink'

const Examples = () => {
  const [ showBoundaries, setShowBoundaries ] = useState(false)
  return (
    <Provider>
      <h1>
        React Grid Examples
      </h1>
      <ul>
        <li><a href='#basic'>Basic</a></li>
        <li><a href='#complex'>Complex</a></li>
        <li><a href='#kitchen-sink'>Kitchen sink</a></li>
      </ul>
      <div className={showBoundaries ? 'show-boundaries' : ''}>
        <section id='basic'>
          <h2>Basic</h2>
          <div className='example-container'>
            <Basic />
          </div>
        </section>
        <section id='complex'>
          <h2>Complex</h2>
          <div className='example-container'>
            <Complex />
          </div>
        </section>
        <section id='kitchen-sink'>
          <h2>Kitchen sink</h2>
          <div className='example-container'>
            <KitchenSink />
          </div>
        </section>
      </div>
      <div className='toggle-boundaries'>
        <a
          href='#'
          className='waves-effect waves-teal btn'
          onClick={(e) => {
            e.preventDefault()
            setShowBoundaries(!showBoundaries)
          }}
        >
          {showBoundaries && 'Hide boundaries'}
          {!showBoundaries && 'Show boundaries'}
        </a>
      </div>
    </Provider>
  )
}

export default Examples
