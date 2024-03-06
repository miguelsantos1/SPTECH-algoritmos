const button = document.querySelector('button').addEventListener('click', ageVerification)


function ageVerification() {
    // get input value
    const balance = document.querySelector('#input_balance').value
    const debt = document.querySelector('#input_debt').value
    const output = document.querySelector('#output')
    
    const totalDebt = balance - debt
    
    // condition
    if (totalDebt >= 0) {
        output.innerHTML = `<span style="color: blue; font-style: italic;">O saldo atual da conta corrente é R$${totalDebt.toFixed(2).replace('.', ',')} </span>`
    } else {
        output.innerHTML = `<span style="color: red; font-weight: bold;">O saldo atual da conta corrente é R$${totalDebt.toFixed(2).replace('.', ',')} </span>`
    }

}