const button = document.querySelector('button').addEventListener('click', calcSodaPerYear)


function calcSodaPerYear() {
    // get components via DOM
    const soda = document.querySelector('#input_soda').value
    const output = document.querySelector('p')

    // calc soda
    const sodaPerYear = soda * 365

    output.innerHTML = `Você consome ${sodaPerYear} latinhas por ano. <br />`
    
    if(sodaPerYear >= 500) {
        output.innerHTML += `Cuidado com as diabetes!`
    }

    


}