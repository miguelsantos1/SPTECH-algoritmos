const button = document.querySelector('button').addEventListener('click', havePizzaToday)


function havePizzaToday() {
    // get components via DOM
    const pizzaPrice = document.querySelector('#input_pizzaPrice').value
    const howManyFriends = document.querySelector('#input_howManyFriends').value
    const output = document.querySelector('p')

    // calc pizza
    const everyPricePeople = pizzaPrice / howManyFriends

    // output

    output.innerHTML = `Cada amigo vai pagar R$${everyPricePeople.toFixed(2).replace('.', ',')} <br />`

    if (everyPricePeople > 20) {
        output.innerHTML += 'Sem pizza hoje, o valor para cada um passou de R$20,00'
    }


    


}