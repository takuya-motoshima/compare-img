import {allEqual, blobToBinaryString, fetchBlob} from '~/utils';

/**
 * Check if the contents of multiple images are all the same.
 * Returns true if all images are the same, false if there is even one different image
 * 
 * @param   {...string|string[]}  List of image URLs to check.
 * @return  {Promise<boolean>}    Returns true if all images are the same, false if there is even one different image.
 */
export default async function(...imgs: string[]): Promise<boolean> {
  if (Array.isArray(imgs[0]))
    imgs = imgs[0];

  // NOTE: Since URL string comparison cannot detect nonexistent URLs, we decided not to compare URL strings.
  // // Returns true if all image URLs are the same.
  // if (allEqual(imgs))
  //   return true;

  // Load all images as binary data.
  const bins = await Promise.all(imgs.map(img => {
    return new Promise(async (rslv, rej) => {
      try {
        // Add a random parameter to the image URL to always load the latest image.
        if (/(\?.*)$/.test(img))
          img += `&t=${+new Date}`;
        else
          img += `?t=${+new Date}`;
        // Load image.
        const blob = await fetchBlob(img);

        // Returns null if the image cannot be loaded.
        if (!blob)
          return void rslv(null);

        // Convert image to binary string.
        const bin = await blobToBinaryString(blob);
        rslv(bin);
      } catch(err) {
        rej(err);
      }
    });
  }));

  // Compare if all image binary data have the same content.
  return allEqual(bins);
}