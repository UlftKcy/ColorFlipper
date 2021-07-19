// variables
const colorName = document.querySelector(".color-name");
const button = document.querySelector(".btn")
const container = document.querySelector(".container");

// add event listener
window.addEventListener("load",randomColor);
button.addEventListener("click", randomColor);

// functions
function randomColor() {
    const number1 = Math.floor((Math.random() * 255) + 1)
    const number2 = Math.floor((Math.random() * 255) + 1)
    const number3 = Math.floor((Math.random() * 255) + 1)
    const rgbColor = [number1, number2, number3];
    colorName.innerHTML = `rgb(${rgbColor})`
    container.style.backgroundColor = `rgb(${rgbColor})`;
}