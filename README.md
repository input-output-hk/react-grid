# React Grid

A modern lightweight React grid layout library inspired by [bootstrap](https://getbootstrap.com/).

[DEMO](https://input-output-hk.github.io/react-grid/)

## Contents

1. Install
1. Dependencies
1. Quick start
1. API
1. Contributing

## Install

```
npm i --save @input-output-hk/react-grid
```

or

```
yarn add @input-output-hk/react-grid
```

## Dependencies

* [React](https://reactjs.org/)

## Quick start

Add the provider to your top level component (See [React context API docs for more info](https://reactjs.org/docs/context.html))
```
import { Provider } from '@input-output-hk/react-grid'

...

export default () => (
  <Provider>
    ...
    <MyApp />
    ...
  </Provider>
)
```

Use the grid under the `Provider` tree
```
import { Grid, Row, Column } from '@input-output-hk/react-grid'

...

export default () => (
  <Grid>
    <Row sm={1}>
      <Column>Column 1 content</Column>
      <Column>Column 2 content</Column>
    </Row>
  </Grid>
)
```

The example above will render a grid with 2 columns of equal width, when the screen width reaches the `sm` breakpoint there will be two rows with a single column

## API

### Grid

Each grid layout starts with the `Grid` component. The Grid must contain at least one child `Row` component. No other component types should be child components of a `Grid`.

| PROP | TYPE | DEFAULT VALUE | REQUIRED | DESCRIPTION |
| ---- | ---- | ------------- | -------- | ----------- |
| fillRows | boolean | false | false | When a maximum amount of columns is specified on a row, but there are not enough columns to fill that row, enabling `fillRows` will add empty columns. |
| spacing | number | 0 | false | Adds vertical padding to the grid component in `rem` units |
| style | object | null | false | React style object |
| className | string | null | false | React className |
| children | ReactNode | null | true | Child components, either a single node or array of nodes. Each node must be a `Row` component |

### Row

Each `Row` component must be a direct child of a `Grid`. Each `Row` should have at least one `Column` child component. No other component types should be child components of a `Row`.

| PROP | TYPE | DEFAULT VALUE | REQUIRED | DESCRIPTION |
| ---- | ---- | ------------- | -------- | ----------- |
| spacing | number | 0 | false | Vertical padding applied to the row, in `rem` units. |
| columnSpacing | number | 0 | false | Horizontal padding applied to each column, in `rem` units. Columns can individually override this value. |
| xl | number | null | false | The amount of columns per row on `xl` screen widths. |
| lg | number | null | false | The amount of columns per row on `lg` screen widths. Inherits from `xl`. |
| md | number | null | false | The amount of columns per row on `md` screen widths. Inherits from `lg`. |
| sm | number | null | false | The amount of columns per row on `sm` screen widths. Inherits from `md`. |
| xs | number | null | false | The amount of columns per row on `xs` screen widths. Inherits from `sm`. |

*Any props not listed in the table are automatically added.*

### Column

Each `Column` component must be a direct child of a `Row`. Columns can contain anything, even more grids.

| PROP | TYPE | DEFAULT VALUE | REQUIRED | DESCRIPTION |
| ---- | ---- | ------------- | -------- | ----------- |
| size | number | 1 | false | The size value applied as `flex` |
| spacing | number | 0 | false | Horizontal padding applied to the column, in `rem` units. |
| verticalAlign | string | null | false | One of `top`, `center` or `bottom`. How to vertically align content within column relative to the row |
| xlOffset | number | 0 | false | How many columns to offset on `xl` screen widths. |
| lgOffset | number | 0 | false | How many columns to offset on `lg` screen widths. Inherits from `xl`. |
| mdOffset | number | 0 | false | How many columns to offset on `md` screen widths. Inherits from `lg`. |
| smOffset | number | 0 | false | How many columns to offset on `sm` screen widths. Inherits from `md`. |
| xsOffset | number | 0 | false | How many columns to offset on `xs` screen widths. Inherits from `sm`. |

*Any props not listed in the table are automatically added.*

### Provider

The provider state component comes from the [React context API](https://reactjs.org/docs/context.html) and is used to set the screen width breakpoints.

| PROP | TYPE | DEFAULT VALUE | REQUIRED | DESCRIPTION |
| ---- | ---- | ------------- | -------- | ----------- |
| children | ReactNode | null | true | Children to render under the provider tree |
| screenSizes | object | null | false | Object containing the screen sizes. See the [screen sizes schema](#screen-sizes-schema) for details. |

#### Screen sizes schema

| KEY | TYPE | DEFAULT VALUE | REQUIRED | DESCRIPTION |
| --- | ---- | ------------- | -------- | ----------- |
| xl | number | 1200 | false | Anything greater than this number (included) is an `xl` screen |
| lg | number | 992 | false | Anything between this number (included) and `xl` is an `lg` screen |
| md | number | 768 | false | Anything between this number (included) and `lg` is an `md` screen |
| sm | number | 576 | false | Anything less than this is `xs`, anything between this number (included) and `md` is an `sm` screen |

## Contributing

Contributions are welcome, see [contributing](https://github.com/input-output-hk/react-grid/tree/staging/docs/contributing.md) for more info.
