const button = document.querySelector('button').addEventListener('click', votesCalc)


function votesCalc() {

    const Avotes = Number(document.querySelector('#Avotes').value)
    const Bvotes = Number(document.querySelector('#Bvotes').value)
    const whiteVotes = Number(document.querySelector('#whiteVotes').value)
    const nullVotes = Number(document.querySelector('#nullVotes').value)

    const output = document.querySelector('p')

    const votesTotal = Avotes + Bvotes + whiteVotes + nullVotes
    const nullVotesTotal = whiteVotes + nullVotes

    const AVotesPorcent = Avotes * 100 / votesTotal
    const BVotesPorcent = Bvotes * 100 / votesTotal
    const nullPorcent = nullVotesTotal * 100 / votesTotal


    output.innerHTML = `
    Total de votos: ${votesTotal} <br />
    Candidato A: ${AVotesPorcent}% (${Avotes}) <br />
    Candidato A: ${BVotesPorcent}% (${Bvotes}) <br />
    Inválidos: ${nullPorcent}% (${nullVotesTotal})
    `  
}