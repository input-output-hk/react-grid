import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

type VerticalAlign = 'top' | 'bottom' | 'center'

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number,
  spacing?: number,
  verticalAlign?: VerticalAlign,
  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  xlOffset?: number
}

const getJustifyContentValue: Function = (verticalAlign: VerticalAlign): string => {
  switch (verticalAlign) {
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return verticalAlign
  }
}

const Column = (props: ColumnProps): ReactElement => (
  <div
    style={{ ...props.style, flex: props.size, padding: `0 ${props.spacing}rem`, boxSizing: 'border-box' }}
    className={props.className}
  >
    {props.verticalAlign &&
      <div
        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: getJustifyContentValue(props.verticalAlign) }}
      >
        {props.children}
      </div>
    }
    {!props.verticalAlign && props.children}
  </div>
)

export const defaultProps: ColumnProps = {
  size: 1,
  spacing: 0
}

Column.propTypes = {
  size: PropTypes.number,
  spacing: PropTypes.number,
  verticalAlign: PropTypes.oneOf([ 'top', 'center', 'bottom' ]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number
}

Column.defaultProps = defaultProps

export default Column
