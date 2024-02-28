document.querySelector('#gradeAverage').addEventListener('click', gradeAverage)


function gradeAverage() {

    // get elements
    
    const name = document.querySelector("#name").value
    const gradeContinued = document.querySelector("#gradeContinued").value
    const gradeSemiannual = document.querySelector("#gradeSemiannual").value
    const res = document.querySelector("#result")

    // calc

    const averageGrade = (0.4 * gradeContinued) + (0.6 * gradeSemiannual) 
    
    // res
    res.textContent = `A média de ${name} será de ${averageGrade}` 

}
