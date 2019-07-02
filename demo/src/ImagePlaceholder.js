import React from 'react'
import PropTypes from 'prop-types'

const ImagePlaceholder = ({ aspectRatio }) => {
  return (
    <div className='image-placeholder' style={{ paddingBottom: `${aspectRatio * 100}%` }}>
      <div style={{ transform: `rotate(${45 * aspectRatio}deg)` }} />
      <div style={{ transform: `rotate(-${45 * aspectRatio}deg)` }} />
    </div>
  )
}

ImagePlaceholder.propTypes = {
  aspectRatio: PropTypes.number.isRequired
}

export default ImagePlaceholder
