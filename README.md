# React-Color-Thief
🎨 A React component for grabbing the color palette from an image. [See a Demo](https://chensiun.github.io/react-color-thief/)
  >It is based on Lokesh's [color-thief](https://github.com/lokesh/color-thief/).

![](https://user-gold-cdn.xitu.io/2018/9/9/165be9299e074233?w=1368&h=842&f=png&s=1358264)

## How to use
可以把src/ColorThief.js文件拷贝到自己的项目下，直接使用。
### Get the dominant color from an image
```js
const colorThief = new ColorThief()
colorThief.getColor(imgDom) //需要在Image onload完成后调用
colorThief.getColorFromUrl(imgUrl).then(...) //异步方法，返回一个Promise
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
const colorThief = new ColorThief()
colorThief.getPalette(imgDom, 8) //需要在Image onload完成后调用
```

### ColorThief Methods

| function | returns |
| --------|-------------|
| `getColor(imgDom[, quality])` | `[r, g, b]` |
| `getPalette(imgDom[, colorCount, quality])` | `[ [r, g, b], [r, g, b], ...]` |
| `getColorFromUrl(imgUrl[, quality])` | `[r, g, b]` |
| `getColorAsync(imgUrl[, quality])` | `[r, g, b]` |
| `convertColorRgb(rgbArray)` | `"rgb(r, g, b)"` |

*`colorCount` determines the size of the palette, the number of colors returned. If not set, it defaults to 10.*<br/>
*`quality` is an optional argument. It needs to be an integer. 1 is the highest quality settings. 10 is the default. There is a trade-off between quality and speed. The bigger the number, the faster the palette generation but the greater the likelihood that colors will be missed.*
