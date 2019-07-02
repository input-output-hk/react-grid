import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { Provider, Consumer } from './State'

const getWrapper = (props = {}) => {
  return mount((
    <Provider {...props}>
      <Consumer>
        {({ screenSizes, screenSize }) => (
          <div>
            <ul>
              {Object.keys(screenSizes).map(screenSize => (
                <li key={screenSize}>
                  {screenSizes[screenSize]}
                </li>
              ))}
            </ul>
            <span key='current screen size'>
              {screenSize}
            </span>
          </div>
        )}
      </Consumer>
    </Provider>
  ))
}

interface Global {
  triggerWindowEvent: Function,
  windowEventListeners: Object
}

declare const global: Global

describe('State', () => {
  afterEach(() => {
    global.windowEventListeners = {}
  })

  test('the default state is correct', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  describe('xs screens', () => {
    let wrapper
    beforeEach(() => {
      (window as any).innerWidth = 320
      wrapper = getWrapper()
    })

    test('the default state is correct', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('when screen resized to sm screen', () => {
      beforeEach(() => {
        (window as any).innerWidth = 600
        ReactTestUtils.act(() => {
          global.triggerWindowEvent('resize')
        })
      })

      test('it updates the wrapper correctly', () => {
        wrapper.update()
        expect(wrapper).toMatchSnapshot()
      })
    })
  })

  describe('sm screens', () => {
    beforeEach(() => {
      (window as any).innerWidth = 600
    })

    test('the default state is correct', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('md screens', () => {
    beforeEach(() => {
      (window as any).innerWidth = 800
    })

    test('the default state is correct', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('lg screens', () => {
    beforeEach(() => {
      (window as any).innerWidth = 1100
    })

    test('the default state is correct', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('xl screens', () => {
    beforeEach(() => {
      (window as any).innerWidth = 1600
    })

    test('the default state is correct', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('when using custom break points', () => {
    let wrapper
    beforeEach(() => {
      wrapper = getWrapper({
        screenSizes: {
          sm: 200,
          md: 300,
          lg: 400,
          xl: 400
        }
      })
    })

    test('it renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
