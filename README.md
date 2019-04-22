![Efflux Icons](https://user-images.githubusercontent.com/16481834/56536217-1dd0e180-6523-11e9-84c6-7045dcc18034.png)

---
Insert Version Badge Here

*Last Updated*: [Date]

-   Bundled with [Webpack](https://webpack.js.org/)
-   Developed with Hot Module Replacement [(HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
-   Includes linting with [ESLint](http://eslint.org/)
-   Formatted with [Prettier](https://prettier.io/)
-   Testing with [Jest](http://facebook.github.io/jest/).

## Installation

1. Install modules - `yarn`

2. Start example and start coding - `yarn start`

3. Run tests - `yarn test`

4. Bundle with - `yarn build`

5. To test if it works correctly in another project you can use npm `npm install -S ../efflux-cons` Note the relative path


## NPM equivalent

| yarn         | npm             |
| ------------ | --------------- |
| `yarn`       | `npm install`   |
| `yarn test`  | `npm run test`  |
| `yarn build` | `npm run build` |

# Basic Usage

```
import React from 'react'
import Icon from 'efflux-icons';

export default function Example() {
  return (
    <div>
      <Icon name={'Home'} color={'blue'} fill />
    </div>
  )
}

```

# Props
| prop name | type    | description                                                                                   | required | default |
|-----------|---------|-----------------------------------------------------------------------------------------------|----------|---------|
| name      | String  | name of icon to be used as source                                                             | yes      | n/a     |
| color     | String  | color to be used in stroke and fill properties                                                | no       | black   |
| size      | Number  | size of icon in `px` this defines the bounding box of the icon relative to `width` & `height` | no       | 20px    |
| fill      | Boolean | Determines whether icon will be filled with the `color` prop                                  | no       | false   |

# Icon Catalogue
The following Icons are available within this icon library. These Icons are ordered in alphabetical order

| preview         | name             |
| ------------ | --------------- |
| `test`       | `test`   |
| `test`  | `test`  |
| `test` | `test` |
