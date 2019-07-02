import React from 'react'
import { Grid, Row, Column } from '../../../build'
import ImagePlaceholder from '../ImagePlaceholder'

const KitchenSink = () => (
  <div>
    <div className='grid-container'>
      <Grid className='grid' fillRows>
        <Row spacing={0.6} columnSpacing={0.5} xl={3} xs={1}>
          <Column>
            <ImagePlaceholder aspectRatio={0.8} />
          </Column>
          <Column>
            <ImagePlaceholder aspectRatio={0.8} />
          </Column>
          <Column>
            <ImagePlaceholder aspectRatio={0.8} />
          </Column>
        </Row>
        <Row spacing={0.6} columnSpacing={0.5} xl={3} xs={1}>
          <Column xlOffset={1} xsOffset={0}>
            <p>
              Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet.
            </p>
          </Column>
        </Row>
        <Row xs={1} sm={2} xl={3}>
          <Column>
            <Grid className='grid'>
              <Row lg={1} xl={2} columnSpacing={1}>
                <Column verticalAlign='bottom'>
                  <ImagePlaceholder aspectRatio={0.8} />
                </Column>
                <Column>
                  <p>
                    Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet.
                  </p>
                </Column>
              </Row>
            </Grid>
          </Column>
          <Column>
            <Grid className='grid'>
              <Row lg={1} xl={2} columnSpacing={1}>
                <Column verticalAlign='bottom'>
                  <ImagePlaceholder aspectRatio={0.8} />
                </Column>
                <Column>
                  <p>
                    Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet.
                  </p>
                </Column>
              </Row>
            </Grid>
          </Column>
          <Column>
            <Grid className='grid'>
              <Row lg={1} xl={2} columnSpacing={1}>
                <Column verticalAlign='bottom'>
                  <ImagePlaceholder aspectRatio={0.8} />
                </Column>
                <Column>
                  <p>
                    Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet.
                  </p>
                </Column>
              </Row>
            </Grid>
          </Column>
        </Row>
      </Grid>
    </div>
    <hr />
    <pre>
      <code>
        {`
<Grid fillRows>
  <Row spacing={0.6} columnSpacing={0.5} xl={3} xs={1}>
    <Column />
    <Column />
    <Column />
  </Row>
  <Row spacing={0.6} columnSpacing={0.5} xl={3} xs={1}>
    <Column xlOffset={1} xsOffset={0} />
  </Row>
  <Row xs={1} sm={2} xl={3}>
    <Column>
      <Grid>
        <Row lg={1} xl={2} columnSpacing={1}>
          <Column verticalAlign='bottom' />
          <Column />
        </Row>
      </Grid>
    </Column>
    <Column>
      <Grid>
        <Row lg={1} xl={2} columnSpacing={1}>
          <Column verticalAlign='bottom' />
          <Column />
        </Row>
      </Grid>
    </Column>
    <Column>
      <Grid>
        <Row lg={1} xl={2} columnSpacing={1}>
          <Column verticalAlign='bottom' />
          <Column />
        </Row>
      </Grid>
    </Column>
  </Row>
</Grid>
        `}
      </code>
    </pre>
  </div>
)

export default KitchenSink
