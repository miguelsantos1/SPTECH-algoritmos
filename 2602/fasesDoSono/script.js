const button = document.querySelector('button').addEventListener('click', calcSleep)


function calcSleep() {

    const sleep = document.querySelector('#sleepHours').value

    const fase1 = sleep * 0.05
    const fase2 = sleep * 0.45
    const fase3 = sleep * 0.30
    const faseREM = sleep * 0.20

    const output = document.querySelector('p')
    output.innerHTML = `
    ${fase1} horas na fase 1 <br />
    ${fase2} horas na fase 2 <br />
    ${fase3} horas na fase 3 <br />
    ${faseREM} horas na fase REM <br />
    `

}