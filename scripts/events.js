
import {colorArray, getRandomColor} from './colorArray.js'

export function btn() {
    let randomStringColor;

    const spanTextColor = document.querySelector('.text-color')
    
    const btnElement = document.querySelector('.js-btn')


    btnElement.addEventListener('click', () => {
        randomStringColor = getRandomColor(colorArray)
        document.body.style.backgroundColor = randomStringColor
        
        spanTextColor.textContent = ` ${randomStringColor}`
        spanTextColor.style.color = randomStringColor

    })
}