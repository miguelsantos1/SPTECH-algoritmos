
const button = document.querySelector('button').addEventListener('click', handle)

function handle() {

    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value
    alert(`Você pesa ${weight} e tem ${height} de altura`)

}




