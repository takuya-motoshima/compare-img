/**
 * Fetch remote data and return the fetched result in blob.
 *
 * @param   {string}          url URL of the data to read.
 * @return  {Promise<Blob>}   Returns the blob of the read data.
 */
export default async function(url: string): Promise<Blob> {
  // console.log(`Load ${url}`);
  // Fetch the specified URL.
  const res = await fetch(url, {mode: 'cors', cache: 'no-cache'});

  // Throw an exception if the response is an error. 
  if (!res.ok)
    throw Error(`${url} could not be loaded, response status is ${res.status}`);

  // Returns a blob of the read data if the load is successful.
  return res.blob();
}