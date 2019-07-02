import React, { Children, Fragment, ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import Column from './Column'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: boolean,
  screenSize?: ScreenSize,
  spacing?: number,
  columnSpacing?: number,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  rowKey?: string
}

interface DefaultProps {
  spacing: number,
  columnSpacing: number
}

enum ScreenSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

const availableScreenSizes: string[] = [
  ScreenSize.xs,
  ScreenSize.sm,
  ScreenSize.md,
  ScreenSize.lg,
  ScreenSize.xl
]

const fillRow: Function = (row: ReactElement[], maxColumns: number, columnSpacing: number): void => {
  const props = { spacing: columnSpacing }
  while (row.length < maxColumns) {
    row.push(<Column key={row.length} {...props} />)
  }
}

const getOffset: Function = (column: ReactElement, screenSize: ScreenSize ): number => {
  let offset: number = column.props[`${screenSize}Offset`]
  let fallbackSizes: string[] = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize))
  while (typeof offset !== 'number' && fallbackSizes.length > 0) {
    offset = column.props[`${fallbackSizes.shift()}Offset`]
  }

  return offset || 0
}

const buildRows: Function = (maxColumns: number, columns: ReactElement[], fill: boolean, screenSize: ScreenSize, columnSpacing: number): ReactElement[][] => {
  if (maxColumns === null) return [ columns ]
  let rows: ReactElement[][] = []
  let row: ReactElement[] = []
  for (let i = 0; i < columns.length; i++) {
    const offset: number = getOffset(columns[i], screenSize)
    const props = { spacing: columnSpacing }
    if (offset > 0) {
      rows.push(row.slice())
      row = new Array(offset).fill(null).map((_, i): ReactElement => <Column {...props} key={i} />)
    }

    const columnClone: ReactElement = <Column {...columns[i].props} spacing={columns[i].props.spacing || columnSpacing} key={row.length} />
    row.push(columnClone)
    if (row.length >= maxColumns || i === columns.length - 1) {
      rows.push(row.slice())
      row = []
    }
  }

  if (fill) fillRow(rows[rows.length - 1], maxColumns, columnSpacing)
  return rows
}

const Row = (props: RowProps): ReactElement => {
  const { children, fill, screenSize, columnSpacing } = props
  const columns: ReactNode[] = Children.toArray(children)
  const getMaxColumns: Function = (): number => {
    let maxColumns: number | undefined = props[screenSize]
    let fallbackSizes: string[] = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize))
    while (!maxColumns && fallbackSizes.length > 0) {
      maxColumns = props[fallbackSizes.shift()]
    }

    return maxColumns || columns.length
  }

  const rows: ReactElement[][] = buildRows(getMaxColumns(), columns, fill, screenSize, columnSpacing)
  return (
    <Fragment>
      {rows.map((row, index): ReactElement => (
        <div
          key={`${props.rowKey}_${index}`}
          style={{ ...props.style, display: 'flex', padding: `${props.spacing}rem 0`, boxSizing: 'border-box' }}
          className={props.className}
        >
          {row}
        </div>
      ))}
    </Fragment>
  )
}

Row.propTypes = {
  fill: PropTypes.bool,
  screenSize: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  columnSpacing: PropTypes.number,
  spacing: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  rowKey: PropTypes.string
}

const defaultProps: DefaultProps = {
  spacing: 0,
  columnSpacing: 0
}

Row.defaultProps = defaultProps
export default Row
