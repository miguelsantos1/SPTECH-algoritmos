const button = document.querySelector('button').addEventListener('click', ageVerification)


function ageVerification() {
    // get input value
    const name = document.querySelector('#input_name').value
    const age = document.querySelector('#input_age').value
    const output = document.querySelector('#output')
    
    // condition
    if (age >= 18) {
       output.innerHTML = `${name}, vamos tirar CNH?` 
    } else {
        output.innerHTML = `${name}, vai jogar PS5!` 
    }

}