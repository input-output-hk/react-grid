import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { Provider } from './State'
import Grid from './components/Grid'
import Row from './components/Row'
import Column from './components/Column'

const getWrapper = (children) => {
  return mount(
    <Provider>
      {children}
    </Provider>
  )
}

describe('ReactGrid', () => {
  const describeTestsForInput = children => {
    const screenSizes = {
      xs: 340,
      sm: 600,
      md: 800,
      lg: 1100,
      xl: 1600
    }

    Object.keys(screenSizes).forEach(size => {
      describe(`${size} screens`, () => {
        beforeEach(() => {
          (window as any).innerWidth = screenSizes[size]
        })

        test('it renders correctly', () => {
          expect(getWrapper(children)).toMatchSnapshot()
        })
      })
    })
  }

  describe('responsive grid with filled rows', () => {
    describeTestsForInput((
      <Grid fillRows>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
      </Grid>
    ))
  })

  describe('responsive grid with no filled rows', () => {
    describeTestsForInput((
      <Grid>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
      </Grid>
    ))
  })

  describe('non-responsive grid', () => {
    describeTestsForInput((
      <Grid>
        <Row>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
      </Grid>
    ))
  })

  describe('columns with offsets', () => {
    describeTestsForInput((
      <Grid>
        <Row xl={5} md={3}>
          <Column mdOffset={2} lgOffset={3} smOffset={0} />
          <Column xsOffset={1} xlOffset={4} />
        </Row>
      </Grid>
    ))
  })

  describe('center vertically aligned columns', () => {
    describeTestsForInput((
      <Grid fillRows>
        <Row sm={1} xl={3}>
          <Column verticalAlign='center' />
          <Column verticalAlign='center' />
          <Column verticalAlign='center' />
          <Column verticalAlign='center' />
        </Row>
      </Grid>
    ))
  })

  describe('bottom vertically aligned columns', () => {
    describeTestsForInput((
      <Grid fillRows>
        <Row sm={1} xl={3}>
          <Column verticalAlign='bottom' />
          <Column verticalAlign='bottom' />
          <Column verticalAlign='bottom' />
          <Column verticalAlign='bottom' />
        </Row>
      </Grid>
    ))
  })

  describe('top vertically aligned columns', () => {
    describeTestsForInput((
      <Grid fillRows>
        <Row sm={1} xl={3}>
          <Column verticalAlign='top' />
          <Column verticalAlign='top' />
          <Column verticalAlign='top' />
          <Column verticalAlign='top' />
        </Row>
      </Grid>
    ))
  })

  describe('nested grids', () => {
    describeTestsForInput((
      <Grid fillRows>
        <Row sm={1} xl={3}>
          <Column />
          <Column />
          <Column>
            <Grid>
              <Row sm={3} xl={5}>
                <Column>
                  <Grid fillRows>
                    <Row>
                      <Column />
                      <Column mdOffset={1} />
                      <Column />
                    </Row>
                  </Grid>
                </Column>
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
              </Row>
            </Grid>
          </Column>
          <Column />
        </Row>
      </Grid>
    ))
  })

  describe('grids with spacing', () => {
    describeTestsForInput((
      <Grid spacing={2}>
        <Row spacing={0.6}>
          <Column spacing={1.8} />
          <Column />
          <Column spacing={3.6} />
        </Row>
        <Row spacing={1.4} columnSpacing={1.2}>
          <Column spacing={1.8} />
          <Column />
          <Column spacing={3.6} />
          <Column />
        </Row>
      </Grid>
    ))
  })
})