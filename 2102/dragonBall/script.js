document.querySelector('#superSayajin').addEventListener('click', superSayajin)


function superSayajin() {

    const warriorName = document.querySelector("#warriorName").value
    const warriorKi = document.querySelector("#warriorKi").value

    const superSayajin1 = Number(warriorKi) * 50
    const superSayajin2 = Number(warriorKi) * 100



    alert(`Guerreiro, ${warriorName}. Seu ki em Super Sayajin 1 é de ${superSayajin1}`)
    alert(`Guerreiro, ${warriorName}. Seu ki em Super Sayajin 2 é de ${superSayajin2}`)

}
