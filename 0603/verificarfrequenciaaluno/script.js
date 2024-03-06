const button = document.querySelector('button').addEventListener('click', frequence)


function frequence() {
    // get input value
    const frequence = document.querySelector('#input_frequence').value
    const output = document.querySelector('p')
    // condition
    if (frequence <= 50) {
        output.innerHTML = "<img src='https://images.unsplash.com/photo-1522010675502-c7b3888985f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVyaXN0YXxlbnwwfHwwfHx8MA%3D%3D' style='height: 300px'>"
    } else  {
        output.innerHTML = "<img src='https://plus.unsplash.com/premium_photo-1681248156389-14aa39c0a5d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style='width: 300px'>"

    }

}