export const colorArray = [
    `blue`,
    `red`,
    `green`,
    `AliceBlue`,
    `AntiqueWhite`,
    `Aqua`,
    `Aquamarine`,
    `Azure`,
    `Beige`,
    `Bisque`,
    `Black`,
    `BlanchedAlmond`,
    `Blue`,
    `BlueViolet`,
    `Brown`,
    `BurlyWood`,
    `CadetBlue`,
    `Chartreuse`,
];

/**
 * Get a random color from the provided array.
 * @param {string[]} arr - An array of color strings.
 * @returns {string|null} - A random color string or null if the array is empty.
 */
export function getRandomColor(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}



// export function getrandomColor(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
// };

