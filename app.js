let choices = {
    rock: {
        beats: ['scissors', 'lizard'],
        loses: ['paper', 'Spock'],
        ties: 'rock',
        btnClass: 'btn-dark'
    },
    paper: {
        beats: ['rock', 'Spock'],
        loses: ['scissors', 'lizard'],
        ties: 'paper',
        btnClass: 'btn-warning'
    },
    scissors: {
        beats: ['paper', 'lizard'],
        loses: ['rock', 'Spock'],
        ties: 'scissors',
        btnClass: 'btn-danger'
    },
    lizard: {
        beats: ['paper', 'Spock'],
        loses: ['rock', 'scissors'],
        ties: 'lizard',
        btnClass: 'btn-success'
    },
     Spock: {
        beats: ['rock', 'scissors'],
        loses: ['lizard', 'paper'],
        ties: 'Spock',
        btnClass: 'btn-primary'
    }
}

function drawButtons(){
    let template = ''
    for(let key in choices){
        let choice = choices[key]
        template += `<button class="btn ${choice.btnClass} mx-1" onclick="player('${key}')">${key}</button>`
    }
    document.getElementById('buttons').innerHTML = template
}

function player(choiceName){
    let choice = choices[choiceName]
    //choiceName comes from the button that's clicked, assigned in drawButton
    choiceName = choiceName[0].toUpperCase() + choiceName.substr(1)
    document.getElementById("player-output").innerText = `You Chose: ${choiceName}`
    outcome(choice)
    //it's choice because we have it assigned to the way to access it from the dictionary on line 32
}

function computer(){
    let options = Object.keys(choices)
    let randIndex = Math.floor(Math.random() * (options.length))
    compChoice = (options[randIndex])
    document.getElementById("computer-output").innerText = `Your Opponent Chose: ${compChoice}`
    return compChoice 
}

function outcome(playerChoice){
    let computerChoice = computer()
    if(playerChoice.ties == computerChoice){
        document.getElementById("result-output").innerText = `It's a tie!`
    }else if(playerChoice.beats.includes(computerChoice)){
        document.getElementById("result-output").innerText = `You Win!`
    }else if(playerChoice.loses.includes(computerChoice)){
        document.getElementById("result-output").innerText = `You Lose!`
    }
    else{
        document.getElementById("result-output").innerText = `Something went wrong`
    }

}

drawButtons();