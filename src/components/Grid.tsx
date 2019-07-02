import React, { Children, cloneElement, ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../State'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  fillRows?: boolean,
  spacing?: number
}

const Grid = (props: GridProps): ReactElement => (
  <Consumer>
    {({ screenSize }): ReactElement => (
      <div className={props.className} style={{ ...props.style, padding: `${props.spacing}rem 0`, boxSizing: 'border-box' }}>
        {Children.toArray(props.children).map((child, index): ReactElement => cloneElement(child as React.ReactElement, { fill: props.fillRows, screenSize, rowKey: `${index}` }))}
      </div>
    )}
  </Consumer>
)

const defaultProps: GridProps = {
  fillRows: false,
  spacing: 0
}

Grid.propTypes = {
  fillRows: PropTypes.bool,
  spacing: PropTypes.number
}

Grid.defaultProps = defaultProps
export default Grid
