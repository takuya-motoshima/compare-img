import compare from 'compare-img';

(async() => {
  try {
    // Compare two same images. 
    // Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png' is true
    let res = await compare('img/sample-1.png', 'img/sample-1.png');
    console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png' is ${res}`);
      
    // Compare two different images.
    // Output: The comparison result of 'img/sample-1.png', 'img/sample-2.png' is false
    res = await compare('img/sample-1.png', 'img/sample-2.png');
    console.log(`The comparison result of 'img/sample-1.png', 'img/sample-2.png' is ${res}`);

    // Compare two or more images.
    // Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false
    res = await compare('img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png');
    console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);

    // The images to be checked can also be passed as an array.
    // Output: The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is false
    res = await compare(['img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png']);
    console.log(`The comparison result of 'img/sample-1.png', 'img/sample-1.png', 'img/sample-2.png' is ${res}`);
  } catch(err) {
    console.error(err);
    alert(err.message);
  }
})();