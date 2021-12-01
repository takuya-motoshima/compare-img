/**
 * Returns true if all values are the same, false if there is even one different value.
 *
 * @example
 * // Output: true
 * allEqual(1, 1, 1);
 *
 * // Output: false
 * allEqual(1, 0, 1);
 *
 * // Output: true
 * allEqual([1, 1, 1]);
 *
 * // Output: false
 * allEqual([1, 0, 1]);
 *
 * @param   {...any|any[]} args List of values to check.
 * @return  {boolean}           Returns true if all values are the same, false if there is even one different value.
 */
export default function allEqual(...args: any[]): boolean;
