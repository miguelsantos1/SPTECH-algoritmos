document.querySelector('#menRetired').addEventListener('click', menRetired)
document.querySelector('#womenRetired').addEventListener('click', womenRetired)


function menRetired() {

    const age = document.querySelector("#age").value
    const retired = 70 - age
    
    alert(`Você tem ${age} anos. Você se aposentará daqui ${retired} anos`)

}

function womenRetired() {

    const age = document.querySelector("#age").value
    const retired = 60 - age
    
    alert(`Você tem ${age} anos. Você se aposentará daqui ${retired} anos`)

}
