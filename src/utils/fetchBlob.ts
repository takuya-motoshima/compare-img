/**
 * Fetch remote data and return the fetched result in blob.
 *
 * @param   {string}          url URL of the data to read.
 * @return  {Promise<Blob>}   Returns the blob of the read data.
 */
export default async function(url: string): Promise<Blob> {
  // console.log(`Load ${url}`);
  // return new Promise<Blob>((rslv, rej) => {
  //   const img = new Image;
  //   img.addEventListener('load', () => {
  //     // Update canvas size to match image
  //     const cvs = document.createElement('canvas');
  //     cvs.width = img.naturalWidth;
  //     cvs.height = img.naturalHeight;
    
  //     // Draw in image.
  //     cvs.getContext('2d')!.drawImage(img, 0, 0);       
      
  //     // Get content as blob.
  //     cvs.toBlob(blob => {
  //       rslv(blob!);
  //     }, 'image/png');
  //   });
  //   img.addEventListener('error', () => {
  //     rej(new Error(`Error loading ${url}`));
  //   });

  //   // If from different origin.
  //   img.crossOrigin = '';
  //   img.src = url;
  // });

  // Fetch the specified URL.
  const res = await fetch(url, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include'
  });

  // Throw an exception if the response is an error. 
  if (!res.ok)
    throw Error(`${url} could not be loaded, response status is ${res.status}`);

  // Returns a blob of the read data if the load is successful.
  return res.blob();
}