let choices = {
    rock: {
        beats: 'scissors',
        loses: 'paper',
        ties: 'rock',
        btnClass: 'btn-dark'
    },
    paper: {
        beats: 'rock',
        loses: 'scissors',
        ties: 'paper',
        btnClass: 'btn-warning'
    },
    scissors: {
        beats: 'paper',
        loses: 'rock',
        ties: 'scissors',
        btnClass: 'btn-danger'
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
    console.log(computerChoice)
    console.log('playerChoice', playerChoice)
}


drawButtons();