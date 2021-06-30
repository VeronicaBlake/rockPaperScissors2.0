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
    choiceName = choiceName[0].toUpperCase() + choiceName.substr(1)
    console.log(choice)
    document.getElementById("player-output").innerText = `You Chose: ${choiceName}`
}

function computer(){
    let options = Object.keys(choices)
    let randIndex = Math.floor(Math.random() * (options.length))
    console.log(options[randIndex])
}

drawButtons();