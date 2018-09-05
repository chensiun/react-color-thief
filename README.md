# React-Color-Thief
🎨 A React component for grabbing the color palette from an image. [See a Demo](https://chensiun.github.io/react-color-thief/)
  >It is based on Lokesh's color-thief [library](https://github.com/lokesh/color-thief/).

## How to use
可以把src/ColorThief.js文件拷贝到自己的项目下，直接使用。
### Get the dominant color from an image
```js
const colorThief = new ColorThief()
colorThief.getColor(sourceImage) //sourceImage是一个img元素，且需要在Image onload完成后调用
colorThief.getColorFromUrl(imageSrc) //异步方法，返回一个Promise
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
var colorThief = new ColorThief()
colorThief.getPalette(sourceImage, 8) //sourceImage是一个img元素，且需要在Image onload完成后调用
```

### ColorThief Methods

| function | returns |
| --------|-------------|
| getColor(imageDom[, quality]) | [r(num), g(num), b(num)] |
| getPalette(imageDom[, colorCount, quality]) | [ [r(num), g(num), b(num)], [r(num), g(num), b(num)], ...] |
| getColorFromUrl(imageUrl[, quality]) | [r(num), g(num), b(num)] |
| getColorAsync(imageUrl[, quality]) | [r(num), g(num), b(num)] |
| convertColorRgb(rgbArray) | "rgb(r, g, b)" |