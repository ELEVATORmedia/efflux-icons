![Efflux Icons](https://user-images.githubusercontent.com/16481834/56536217-1dd0e180-6523-11e9-84c6-7045dcc18034.png)

---

_Last Updated_: [Tue Apr 23 2019]

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

5. To test if it works correctly in another project you can use npm `npm install -S ../efflux-icons` Note the relative path

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
      <Icon name={'Home'} color={'blue'} />
    </div>
  )
}
```

# Props

| prop name | type   | description                                                                                   | required | default |
| --------- | ------ | --------------------------------------------------------------------------------------------- | -------- | ------- |
| `name`      | `String` | name of icon to be used as source                                                             | yes      | n/a     |
| `color`     | `String` | color to be used in stroke and fill properties                                                | no       | `black`   |
| `size`      | `Number` | size of icon in `px` this defines the bounding box of the icon relative to `width` & `height` | no       | `20px`    |

# Icon Catalogue

The following Icons are available within this icon library. These Icons are ordered in alphabetical order

| preview                                     | name           |
| ------------------------------------------- | -------------- |
| ![ArrowDown](assets/svgs/ArrowDown.svg)     | `Arrow Down`   |
| ![ArrowLeft](assets/svgs/ArrowLeft.svg)     | `Arrow Left`   |
| ![ArrowRight](assets/svgs/ArrowRight.svg)   | `Arrow Right`  |
| ![ArrowUp](assets/svgs/ArrowUp.svg)         | `Arrow Up`     |
| ![Bell](assets/svgs/Bell.svg)               | `Bell`         |
| ![Chart](assets/svgs/Chart.svg)             | `Chart`        |
| ![Check](assets/svgs/Check.svg)             | `Check`        |
| ![Close](assets/svgs/Close.svg)             | `Close`        |
| ![Currency](assets/svgs/Currency.svg)       | `Currency`     |
| ![External](assets/svgs/External.svg)       | `External`     |
| ![Facebook](assets/svgs/Facebook.svg)       | `Facebook`     |
| ![Home](assets/svgs/Home.svg)               | `Home`         |
| ![Instagram](assets/svgs/Instagram.svg)     | `Instagram`    |
| ![Laptop](assets/svgs/Laptop.svg)           | `Laptop`       |
| ![Location](assets/svgs/LocationPin.svg)    | `Location Pin` |
| ![Lock](assets/svgs/Lock.svg)               | `Lock`         |
| ![MailPending](assets/svgs/MailPending.svg) | `Mail Pending` |
| ![Mail](assets/svgs/Mail.svg)               | `Mail`         |
| ![Menu](assets/svgs/Menu.svg)               | `Menu`         |
| ![Overflow](assets/svgs/Overflow.svg)       | `Overflow`     |
| ![Phone](assets/svgs/Phone.svg)             | `Phone`        |
| ![Refresh](assets/svgs/Refresh.svg)         | `Refresh`      |
| ![Soundcloud](assets/svgs/Soundcloud.svg)   | `Soundcloud`   |
| ![Star](assets/svgs/Star.svg)               | `Star`         |
| ![Twitter](assets/svgs/Twitter.svg)         | `Twitter`      |
| ![UserAdd](assets/svgs/UserAdd.svg)         | `User Add`     |
| ![UserRoles](assets/svgs/UserRoles.svg)     | `User Roles`   |
| ![UserSearch](assets/svgs/UserSearch.svg)   | `User Search`  |
| ![Users](assets/svgs/Users.svg)             | `Users`        |
| ![Video](assets/svgs/Video.svg)             | `Video`        |
| ![Vimeo](assets/svgs/Vimeo.svg)             | `Vimeo`        |
| ![Youtube](assets/svgs/Youtube.svg)         | `Youtube`      |
| ![Warning](assets/svgs/Warning.svg)         | `Warning`      |
