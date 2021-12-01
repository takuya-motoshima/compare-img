/**
 * Check if the contents of multiple images are all the same.
 * Returns true if all images are the same, false if there is even one different image
 *
 * @param   {...string|string[]}  List of image URLs to check.
 * @return  {Promise<boolean>}    Returns true if all images are the same, false if there is even one different image.
 */
export default function (...imgs: string[]): Promise<boolean>;
