const button = document.querySelector('button').addEventListener('click', gradeVerification)

function gradeVerification() {
    // get components via DOM
    const grade1 = Number(document.querySelector('#input_grade1').value)
    const grade2 = Number(document.querySelector('#input_grade2').value)
    const grade3 = Number(document.querySelector('#input_grade3').value)

    const output = document.querySelector('p')

    // calc grade
    const media = (grade2 + grade1 + grade3) / 3

    //OUTPUT

    output.innerHTML = `Sua média foi de: ${media}<br />`

    if (media >= 9.4) {
        output.innerHTML += 'Parabéns, você é fora de série!'
    }

}