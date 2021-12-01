import compare from 'compare-img';

(async() => {
  try {
    // Compare two same images. 
    // Output: compared is true
    let res = await compare('img/sample-1.png', 'img/sample-1.png');
    console.log(`compared is ${res}`);

    // Compare two different images.
    // Output: false
    res = await compare('img/sample-1.png', 'img/sample-2.png');
    console.log(`compared is ${res}`);

    // Compare two or more images.
    // Output: false
    res = await compare('img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png');
    console.log(`compared is ${res}`);

    // The images to be checked can also be passed as an array.
    // Output: false
    res = await compare(['img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png']);
    console.log(`compared is ${res}`);
  } catch(err) {
    console.error(err);
    alert(err.message);
  }
})();