const button = document.querySelector('button').addEventListener('click', havePizzaToday)


function havePizzaToday() {
    // get components via DOM
    const KWhPerMonth = document.querySelector('#input_KWhPerMonth').value
    const output = document.querySelector('p')

    // calc pizza
    let priceKWh = KWhPerMonth * 0.85

    // output

    output.innerHTML = `Quantidade gasta por mês: R$${priceKWh.toFixed(2).replace('.', ',')} <br />`
    
    if(priceKWh < 100) {
        priceKWh = priceKWh * 0.10

        output.innerHTML += `Você recebeu um desconto de 10% e pagará R$${priceKWh.toFixed(2).replace('.', ',')}`
    }



    


}