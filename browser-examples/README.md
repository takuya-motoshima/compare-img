## Quick start

* Create a package.json file:
  ```bash
  npm init -y
  ```

* Install esbuild and glob required for build:
  ```bash
  npm i -D esbuild glob
  ```

* Install compare-img:
  ```bash
  npm i compare-img
  ```

* Create a "build.js" file on the root of your project: 
  ```js
  require('esbuild').build({
    target: 'es2020',
    platform: 'browser',
    entryPoints: require('glob').sync('./src/**/*.js'),
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: true
  }).catch(() => process.exit(1));
  ```

* Write the code in "src/app.js".
  ```js
  import compare from 'compare-img';

  (async() => {
    try {
      // Compare two same images. 
      let res = await compare('img/sample-1.png', 'img/sample-1.png');
      console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png' is ${res}`);
        
      // Compare two different images.
      res = await compare('img/sample-1.png', 'img/sample-2.png');
      console.log(`The comparison result of 'img/sample-1.png', 'img/sample-2.png' is ${res}`);

      // Compare two or more images.
      res = await compare('img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png');
      console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);

      // The images to be checked can also be passed as an array.
      res = await compare(['img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png']);
      console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);
    } catch(err) {
      console.error(err);
      alert(err.message);
    }
  })();
  ```

* Run your build:
  ```bash
  node build.js
  ```

  If the build is successful, the built file will be generated in "dist/app.js".  
  When you load this file in your browser, you should see the following text on the console:
  ```text
  Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png' is true
  Output: The comparison result of 'img/sample-1.png', 'img/sample-2.png' is false
  Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false
  Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false
  ```

* You should change your build scripts to use this build command.
  ```json
  "scripts": {
    "build": "node ./build.js"
  },
  ```

## What is this?

This is a simple example showing how to use [esbuild](https://esbuild.github.io/) to bundle up an app using compare-img.  
This will browserify "src/app.js" and create a distribution file in "dist/app.js".
Load index.html in a browser and open up the console to see sample output.

## Author

**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License

[MIT](LICENSE)