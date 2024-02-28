document.querySelector('button').addEventListener('click', handle)

function handle() {

    const team = document.querySelector('#team').value
    const club = document.querySelector('#club').value
    alert(`O time ${team} tem ${club} títulos`)

}




