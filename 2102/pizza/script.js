document.querySelector('#calcPizza').addEventListener('click', calcPizzaPrice)


function calcPizzaPrice() {

    const pizzaPrice = document.querySelector("#pizzaPrice").value
    const numberFriends = document.querySelector("#numberFriends").value
    const dividerPizzaPrice = pizzaPrice / numberFriends

    alert(`O preço da pizza é de R$${pizzaPrice},00, você tem ${numberFriends - 1} amigo(s), cada um tem que pagar R$${dividerPizzaPrice},00.`)

}
