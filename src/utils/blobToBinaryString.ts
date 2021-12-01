/**
 * Convert a blob to a binary string.
 *
 * @param   {Blob}            blob Blob to convert and optionnally sample.
 * @return  {Promise<String>} Binary data as a string.
 */
export default async function(blob: Blob): Promise<string> {
  return new Promise((rslv, rej) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => rslv(reader.result as string));
    reader.addEventListener('error', () => rej(reader.error));
    reader.readAsBinaryString(blob.slice(0, blob.size));
  });
}