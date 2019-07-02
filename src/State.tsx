import React, { createContext, useState, FunctionComponent, useCallback, useEffect, ReactNode } from 'react'
import PropTypes from 'prop-types'

interface ScreenSizes {
  sm: number,
  md: number,
  lg: number,
  xl: number
}

enum ScreenSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

interface PartialScreenSizes {
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number
}

interface DefaultState {
  screenSizes: ScreenSizes,
  screenSize: ScreenSize,
  updateScreenSizes?(newScreenSizes: PartialScreenSizes): void
}

interface StateProps {
  children: ReactNode,
  screenSizes?: PartialScreenSizes
}

const DEFAULT_SCREEN_SIZES: ScreenSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const getScreenSize: Function = (screenSizes: ScreenSizes): ScreenSize => {
  const screenWidth: number = window.innerWidth || 0
  if (screenWidth < screenSizes.sm) return ScreenSize.xs
  if (screenWidth >= screenSizes.sm && screenWidth < screenSizes.md) return ScreenSize.sm
  if (screenWidth >= screenSizes.md && screenWidth < screenSizes.lg) return ScreenSize.md
  if (screenWidth >= screenSizes.lg && screenWidth < screenSizes.xl) return ScreenSize.lg
  if (screenWidth >= screenSizes.xl) return ScreenSize.xl
}

const Context: React.Context<DefaultState> = createContext({ screenSizes: DEFAULT_SCREEN_SIZES, screenSize: getScreenSize(DEFAULT_SCREEN_SIZES) })
const ContextProvider = Context.Provider
export const Consumer = Context.Consumer

export const Provider: FunctionComponent = (props: StateProps) => {
  const [ screenSizes, setScreenSizes ]: [ ScreenSizes, Function ] = useState({ ...DEFAULT_SCREEN_SIZES, ...props.screenSizes })
  const [ screenSize, setScreenSize ]: [ ScreenSize, Function ] = useState(getScreenSize(screenSizes))
  const updateScreenSizes = (newScreenSizes: PartialScreenSizes): void => setScreenSizes({ ...screenSizes, ...newScreenSizes })
  const onResize: EventListener = useCallback(() => setScreenSize(getScreenSize(screenSizes)), [])

  useEffect(() => {
    setScreenSize(getScreenSize(screenSizes))
    window.removeEventListener && window.removeEventListener('resize', onResize)
    window.addEventListener && window.addEventListener('resize', onResize)
    return () => window.removeEventListener && window.removeEventListener('resize', onResize)
  }, [ screenSizes ])

  return (
    <ContextProvider value={{ screenSizes, updateScreenSizes, screenSize }}>
      {props.children}
    </ContextProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  screenSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  })
}
