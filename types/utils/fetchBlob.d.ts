/**
 * Fetch remote data and return the fetched result in blob.
 *
 * @param   {string}          url URL of the data to read.
 * @return  {Promise<Blob|null>}   Returns the blob of the read data.
 */
export default function (url: string): Promise<Blob | null>;
