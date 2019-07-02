import React from 'react'
import { Grid, Row, Column } from '../../../build'
import ImagePlaceholder from '../ImagePlaceholder'

const Basic = () => (
  <div>
    <div className='grid-container'>
      <Grid className='grid' fillRows>
        <Row spacing={1} columnSpacing={1.5} sm={1} lg={2} xl={3}>
          <Column>
            <ImagePlaceholder aspectRatio={0.75} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et. Sed enim ut sem viverra aliquet eget. Blandit cursus risus at ultrices mi tempus imperdiet. Risus viverra adipiscing at in tellus. Fringilla ut morbi tincidunt augue. Faucibus purus in massa tempor nec feugiat nisl. Varius vel pharetra vel turpis nunc eget lorem dolor. Sed lectus vestibulum mattis ullamcorper velit sed. Dictum sit amet justo donec enim diam vulputate. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Enim eu turpis egestas pretium aenean pharetra magna ac. Augue ut lectus arcu bibendum at. Enim ut tellus elementum sagittis vitae et leo. Habitant morbi tristique senectus et netus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            </p>
          </Column>
          <Column>
            <ImagePlaceholder aspectRatio={0.75} />
            <p>
              Varius quam quisque id diam vel. Consequat ac felis donec et odio pellentesque diam volutpat. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Feugiat scelerisque varius morbi enim nunc faucibus. Sit amet consectetur adipiscing elit pellentesque. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Nulla pellentesque dignissim enim sit amet venenatis. Arcu cursus vitae congue mauris rhoncus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Metus dictum at tempor commodo ullamcorper. At erat pellentesque adipiscing commodo elit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Lorem donec massa sapien faucibus. Rutrum quisque non tellus orci ac auctor augue. Tristique nulla aliquet enim tortor at. Eget dolor morbi non arcu risus quis. Molestie ac feugiat sed lectus vestibulum.
            </p>
          </Column>
          <Column>
            <ImagePlaceholder aspectRatio={0.75} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Urna duis convallis convallis tellus id interdum velit. Bibendum est ultricies integer quis auctor elit sed. Et egestas quis ipsum suspendisse. Ultricies integer quis auctor elit sed. Massa tincidunt dui ut ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Amet porttitor eget dolor morbi non arcu. Cursus in hac habitasse platea dictumst. Blandit massa enim nec dui nunc mattis enim. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Molestie nunc non blandit massa enim. Suscipit tellus mauris a diam maecenas sed enim.
            </p>
            <p>
              Egestas congue quisque egestas diam in arcu. Integer malesuada nunc vel risus commodo viverra. Et malesuada fames ac turpis. A diam maecenas sed enim ut sem. Condimentum vitae sapien pellentesque habitant morbi. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Placerat orci nulla pellentesque dignissim enim sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus in. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Non tellus orci ac auctor augue mauris. Montes nascetur ridiculus mus mauris vitae ultricies. Est velit egestas dui id ornare. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sagittis orci a scelerisque purus semper. Etiam erat velit scelerisque in dictum non consectetur a erat.
            </p>
          </Column>
        </Row>
      </Grid>
    </div>
    <hr />
    <pre>
      <code>
        {`
<Grid fillRows>
  <Row spacing={1} columnSpacing={1.5} sm={1} lg={2} xl={3}>
    <Column />
    <Column />
    <Column />
  </Row>
</Grid>
        `}
      </code>
    </pre>
  </div>
)

export default Basic
