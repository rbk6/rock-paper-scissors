const wrapper = document.getElementById('wrapper');
let player = 0;
let computer = 0;
let reset = false;

wrapper.addEventListener('click', (event) => {
    const choice = event.target.nodeName === 'BUTTON';
    if(!choice) return;
    game(playRound(event.target.id));
})

function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    return choice == 0 ? 'Rock'
        : choice == 1 ? 'Paper'
        : 'Scissors';
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    return computerSelection == 'Rock' && playerSelection == 'paper' ? 'You Win! Paper beats Rock.'
        : computerSelection == 'Rock' && playerSelection == 'scissors' ? 'You Lose! Rock beats Scissors.'
        : computerSelection == 'Paper' && playerSelection == 'rock' ? 'You Lose! Paper beats Rock.'
        : computerSelection == 'Paper' && playerSelection == 'scissors' ? 'You Win! Scissors beats Paper.'
        : computerSelection == 'Scissors' && playerSelection == 'rock' ? 'You Win! Rock beats Scissors.'
        : computerSelection == 'Scissors' && playerSelection == 'paper' ? 'You Lose! Scissors beat Paper.'
        : 'Tie!';
}

function game(round){
    document.getElementById("continue").innerHTML = '';
    if(round.includes('Win'))
        player++;
    if(round.includes('Lose'))
        computer++;
    document.getElementById("out").innerHTML = round;
    if(reset){
        reset = false;
        document.getElementById("out").setAttribute('style', 'color: white;');
    }
    document.getElementById("start").innerText = 'Current Score'
    document.getElementById("you").innerHTML = 'You: ' + player;
    document.getElementById("comp").innerHTML = 'Computer: ' + computer;
    if(player == 5 || computer == 5){
        player > computer ? document.getElementById("out").setAttribute('style', 'color: rgb(0, 255, 170);')
            : document.getElementById("out").setAttribute('style', 'color: rgb(255, 0, 85);');
        player > computer ? document.getElementById("out").innerHTML = 'You Won the Game!'
            : document.getElementById("out").innerHTML = 'You Lost the Game!';
        document.getElementById("continue").innerHTML = 'Continue?';
        player = 0;
        computer = 0;
        reset = true;
        document.getElementById("start").innerText = 'Final Score';
    }
}