# nipponcolorsjs

日本の伝統色

## Install

    npm install nipponcolorsjs
    // or
    yarn add nipponcolorsjs

## Use

```Javascript
// nodejs
const {
    colors,
    getColorWithName,
    getColorWithRoma,
    getRandonColor
} = require('nipponcolorsjs')

// es6
import {
    colors,
    getColorWithName,
    getColorWithRoma,
    getRandonColor
} from 'nipponcolorsjs'

console.log(colors)  // [color1, color2, ……]
const color = getColorWithName('空')
const color = getColorWithRoma('SORA')
const color = getRandonColor()
```

## Reference

* http://nipponcolors.com/
* https://github.com/hurui200320/GetNipponcolors/blob/master/nipponcolors.com.json