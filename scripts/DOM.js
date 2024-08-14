import {colorArray, getRandomColor} from './colorArray.js'



export function display() {
    let randomStringColor;

    const displayElement = document.querySelector('.js-display')
    let renderHTML = '';

    randomStringColor = getRandomColor(colorArray)

    let html = `
        <h1 class="h1-display">Background Color :<span class="text-color"></span></h1>
        <button class="btn js-btn">Click Me</button>
    `
    
    renderHTML += html

    displayElement.innerHTML = renderHTML
}