const button = document.querySelector('button').addEventListener('click', gradeVerification)

function gradeVerification() {
    // get components via DOM
    const grade1 = Number(document.querySelector('#input_grade1').value)
    const grade2 = Number(document.querySelector('#input_grade2').value)

    const output = document.querySelector('p')

    // calc grade
    const media = (grade2 + grade1 ) / 2

    //OUTPUT

    output.innerHTML = `Sua média foi de: ${media}<br />`

    if (media >= 6) {
        output.innerHTML += 'Parabéns, aprovado!'
    } else {
        output.innerHTML += 'Tente outra vez'
    }

}