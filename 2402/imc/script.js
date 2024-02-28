document.querySelector('button').addEventListener('click', calcIMC)

// criado elemento via dom (exibir resultado dps)
const output = document.createElement('p')
const weightOutput = document.createElement('p')
const main = document.querySelector('main')


function calcIMC() {

    main.append(output)
    main.append(weightOutput)
        
    // pegando elementos
    const name = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    
    // calculos

    // imc
    const imc = weight / (height * height)
    
    
    // metros -> pés
    const weightInOunce = weight * 35.274
    // quilograma -> onças
    const heightInFoot = height * 3.281
    
    // imc -> onças / pés
    const imcConversion = weightInOunce / (heightInFoot * heightInFoot)
    
    //resultado
    output.innerHTML = `
    ${name} <br />
    IMC: ${imc.toFixed(2).replace('.', ',')} <br />
    IMC(ft/oz): ${imcConversion.toFixed(2).replace('.', ',')} <br />
    Altura(ft): ${heightInFoot.toFixed(2).replace('.', ',')} <br />
    Peso(oz): ${weightInOunce.toFixed(0)} <br />
    ` 

    // condição de estado físico
    weightOutput.classList.add('warning')

    if(imc < 18.5) {
        weightOutput.style.background = 'orange'
        weightOutput.innerHTML = 'Magreza'
    } 
    else if(imc < 25) {
        weightOutput.style.background = 'green'
        weightOutput.innerHTML = 'Peso normal'
    } 
    else if(imc < 30) {
        weightOutput.style.background = 'orange'
        weightOutput.innerHTML = 'Sobrepeso'
    } 
    else if(imc < 40) {
        weightOutput.style.background = 'red'
        weightOutput.innerHTML = 'Obesidade'
    } else {
        weightOutput.style.background = 'red'
        weightOutput.innerHTML = 'Obesidade grave'
    }

}