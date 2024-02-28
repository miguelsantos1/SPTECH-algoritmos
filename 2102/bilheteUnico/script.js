document.querySelector('#calcEco').addEventListener('click', calcEco)


function calcEco() {

    const priceTickets = document.querySelector("#priceTickets").value
    const tripsPerMonth = document.querySelector("#tripsPerMonth").value

    const calcSpendingEco = (priceTickets * tripsPerMonth) / 2
    const calcWithoutEco = priceTickets * tripsPerMonth

    const calcEco = calcWithoutEco - calcSpendingEco  

    alert(`Você economizará R${calcEco},00 por mês.`)


}
