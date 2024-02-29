const button = document.querySelector('button').addEventListener('click', ageVerification)


function ageVerification() {
    // get input value
    const age = document.querySelector('#input_age').value
    
    // condition
    if(age < 18) {
        alert('Pedir permissão para o responsável')
    }

    alert('#partiuFesta!')

}