# compare-img

Compare two or more images at the binary level.

## Docs
* <a href="https://github.com/takuya-motoshima/compare-img/blob/main/CHANGELOG.md" target="_blank">Changelog</a>

## Demo
You can see a working demo [here](https://takuya-motoshima.github.io/compare-img/demo).

<img src="https://raw.githubusercontent.com/takuya-motoshima/compare-img/main/screencaps/demo.jpg" width="800">

## Browser usage
See how to use [compare-img in the browser](https://github.com/takuya-motoshima/compare-img/tree/main/browser-examples).

### Usage

Installation.
```sh
npm install --save compare-img
```

Compare two same images.  
Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png' is true  
```js
import compare from 'compare-img';

let res = await compare('img/sample-1.png', 'img/sample-1.png');
console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png' is ${res}`);
```

Compare two different images.  
Output: The comparison result of 'img/sample-1.png', 'img/sample-2.png' is false  
```js
import compare from 'compare-img';

let res = await compare('img/sample-1.png', 'img/sample-2.png');
console.log(`The comparison result of 'img/sample-1.png', 'img/sample-2.png' is ${res}`);
```

Compare two or more images.  
Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false  
```js
import compare from 'compare-img';

let res = await compare('img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png');
console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);
```

The images to be checked can also be passed as an array.  
Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false  
```js
import compare from 'compare-img';

let res = await compare(['img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png']);
console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);
```

## Author

**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License

[MIT](LICENSE)