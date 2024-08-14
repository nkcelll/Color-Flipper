
const displayElement = document.querySelector('.js-display')
const colorArray = [
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

let randomStringColor;

function getrandomColor(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
};


function renderScreen() {

    let renderHTML = '';

    randomStringColor = getrandomColor(colorArray)

    let html = `
        <h1 class="h1-display">Background Color :<span class="text-color"></span></h1>
        <button class="btn js-btn">Click Me</button>
    `
    
    renderHTML += html

    displayElement.innerHTML = renderHTML

    // const h1Element = document.querySelector('.h1-display');
    const spanTextColor = document.querySelector('.text-color')

   
    const btnElement = document.querySelector('.js-btn')

    btnElement.addEventListener('click', () => {
        randomStringColor = getrandomColor(colorArray)
        document.body.style.backgroundColor = randomStringColor
        
        spanTextColor.textContent = ` ${randomStringColor}`
        spanTextColor.style.color = randomStringColor

    })

    
}
renderScreen()




