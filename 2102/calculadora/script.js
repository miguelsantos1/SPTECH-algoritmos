document.querySelector('#sum').addEventListener('click', sum)
document.querySelector('#subtraction').addEventListener('click', subtraction)
document.querySelector('#multiplication').addEventListener('click', multiplication)
document.querySelector('#division').addEventListener('click', division)


function sum() {

    // get elements

    const number1 = document.querySelector("#number1").value
    const number2 = document.querySelector("#number2").value
    const res = document.querySelector("#result")

    // calc

    const calc = Number(number1) + Number(number2)

    // show in website

    res.textContent = `A soma entre ${number1} e ${number2} é ${calc}`
}

function subtraction() {

    // get elements

    const number1 = document.querySelector("#number1").value
    const number2 = document.querySelector("#number2").value
    const res = document.querySelector("#result")

    // calc

    const calc = Number(number1) - Number(number2)

    // show in website

    res.textContent = `A diferença entre ${number1} e ${number2} é ${calc}`
}

function multiplication() {

    // get elements

    const number1 = document.querySelector("#number1").value
    const number2 = document.querySelector("#number2").value
    const res = document.querySelector("#result")

    // calc

    const calc = Number(number1) * Number(number2)

    // show in website

    res.textContent = `o produto entre ${number1} e ${number2} é ${calc}`
}

function division() {

    // get elements

    const number1 = document.querySelector("#number1").value
    const number2 = document.querySelector("#number2").value
    const res = document.querySelector("#result")

    // calc

    const calc = Number(number1) / Number(number2)
    
    // show in website

    res.textContent = `A razão entre ${number1} e ${number2} é ${calc}`
}

