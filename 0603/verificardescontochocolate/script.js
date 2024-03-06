const button = document.querySelector('button').addEventListener('click', chocolatePrice)


function chocolatePrice() {
    // get input value
    const howManyChocolate = document.querySelector('#input_howManyChocolate').value
    let totalPriceChocolate;
    // condition
    if (howManyChocolate > 12) {
         totalPriceChocolate = howManyChocolate * 2.5
        output.innerHTML = `Você comprou ${howManyChocolate} <br /> terá que pagar R$${totalPriceChocolate.toFixed(2).replace('.', ',')}` 
    } else  {
         totalPriceChocolate = howManyChocolate * 3
        output.innerHTML = `Você comprou ${howManyChocolate} <br /> terá que pagar R$${totalPriceChocolate.toFixed(2).replace('.', ',')}` 

    }

}