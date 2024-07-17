const hexadecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let fistcolorbox = document.getElementById("first-color-box")
let firstHexCode = document.getElementById("first-hex-code")
let secondcolorbox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdcolorbox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")

function generateRandomNumbers(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
   return randomNumber
}

button.addEventListener("click", function(){
    let hexcodeforfirstbox = "#"
    for(let myfirstLoop = 0; myfirstLoop < 6; myfirstLoop++){
        hexcodeforfirstbox +=  hexadecimalNumberSystem[generateRandomNumbers()]
    }
    firstHexCode.style.color = `white`
    fistcolorbox.style.backgroundColor = hexcodeforfirstbox
    firstHexCode.textContent = hexcodeforfirstbox


    let hexcodeforsecondbox = "#"
    for(let myseccondloop = 0; myseccondloop < 6; myseccondloop++){
        hexcodeforsecondbox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    secondHexCode.style.color = `white`
    secondcolorbox.style.backgroundColor = hexcodeforsecondbox
    secondHexCode.textContent = hexcodeforsecondbox

    let hexcodeforthirdbox = "#"
    for(let mythirdloop = 0; mythirdloop < 6; mythirdloop++ ){
        hexcodeforthirdbox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    thirdHexCode.style.color = `white`
    thirdcolorbox.style.backgroundColor = hexcodeforthirdbox
    thirdHexCode.textContent = hexcodeforthirdbox
})

