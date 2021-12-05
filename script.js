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
    if(round.includes('Win'))
        player++;
    else if(round.include('Lose'))
        computer++;
    if(reset){
        console.log('New game');
        document.getElementById("continue").innerHTML = '';
        reset = false;
    }
    document.getElementById("score").innerHTML = round + '<br/>Current Score<br/> You: ' + player + ' Computer: ' + computer;
    if(player == 5)
    document.getElementById("score").innerHTML = 'You won the game!';
    if(computer == 5)
    document.getElementById("score").innerHTML = 'You lost the game!';
    if(player == 5 || computer == 5){
        player = 0;
        computer = 0;
        document.getElementById("continue").innerHTML = '<br/><em>Continue?</em>';
        reset = true;
    }
}