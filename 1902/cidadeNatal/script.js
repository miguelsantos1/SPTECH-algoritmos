
const button = document.querySelector('button').addEventListener('click', handle)

function handle() {

    const city = document.querySelector('#city').value
    const bornYear = document.querySelector('#bornYear').value
    alert(` Você nasceu na cidade de ${city} em ${bornYear}`)

}




