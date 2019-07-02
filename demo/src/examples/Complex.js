import React from 'react'
import { Grid, Row, Column } from '../../../build'
import ImagePlaceholder from '../ImagePlaceholder'

const Complex = () => (
  <div>
    <div className='grid-container'>
      <Grid className='grid' fillRows>
        <Row spacing={1} columnSpacing={1.5} sm={1} xl={2}>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={0.75} />
          </Column>
          <Column>
            <Grid className='grid' fillRows>
              <Row xl={2} lg={1} columnSpacing={0.5}>
                <Column>
                  <p>
                    Varius quam quisque id diam vel. Consequat ac felis donec et odio pellentesque diam volutpat. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Feugiat scelerisque varius morbi enim nunc faucibus. Sit amet consectetur adipiscing elit pellentesque. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Nulla pellentesque dignissim enim sit amet venenatis. Arcu cursus vitae congue mauris rhoncus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Metus dictum at tempor commodo ullamcorper. At erat pellentesque adipiscing commodo elit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Lorem donec massa sapien faucibus. Rutrum quisque non tellus orci ac auctor augue. Tristique nulla aliquet enim tortor at. Eget dolor morbi non arcu risus quis. Molestie ac feugiat sed lectus vestibulum.
                  </p>
                </Column>
                <Column>
                  <p>
                    Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus in. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Non tellus orci ac auctor augue mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Est velit egestas dui id ornare. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sagittis orci a scelerisque purus semper. Etiam erat velit scelerisque in dictum non consectetur a erat.
                  </p>
                </Column>
              </Row>
            </Grid>
          </Column>
        </Row>
        <Row columnSpacing={1} spacing={0.5} xl={8} sm={4}>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1.2} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={0.9} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1.1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1.1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1.1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1} />
          </Column>
          <Column verticalAlign='center'>
            <ImagePlaceholder aspectRatio={1.1} />
          </Column>
        </Row>
      </Grid>
    </div>
    <hr />
    <pre>
      <code>
        {`
<Grid fillRows>
  <Row spacing={1} columnSpacing={1.5} sm={1} xl={2}>
    <Column verticalAlign='center' />
    <Column>
      <Grid fillRows>
        <Row xl={2} lg={1} columnSpacing={0.5}>
          <Column />
          <Column />
        </Row>
      </Grid>
    </Column>
  </Row>
  <Row columnSpacing={1} spacing={0.5} xl={8} sm={4}>
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
    <Column verticalAlign='center' />
  </Row>
</Grid>
        `}
      </code>
    </pre>
  </div>
)

export default Complex
