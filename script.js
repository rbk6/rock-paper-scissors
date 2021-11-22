function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    return choice == 0 ? 'Rock'
        : choice == 1 ? 'Paper'
        : 'Scissors';
}

function playRound(){
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    playerSelection = playerSelection.toLowerCase();
    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors' && playerSelection != 'quit'){
        alert('Invalid input, please choose Rock, Paper, or Scissors.');
        playerSelection = prompt('Rock, Paper, or Scissors?');
        playerSelection = playerSelection.toLowerCase();
    }
    let computerSelection = computerPlay();
    return computerSelection == 'Rock' && playerSelection == 'paper' ? 'You Win! Paper beats Rock.'
        : computerSelection == 'Rock' && playerSelection == 'scissors' ? 'You Lose! Rock beats Scissors.'
        : computerSelection == 'Paper' && playerSelection == 'rock' ? 'You Lose! Paper beats Rock.'
        : computerSelection == 'Paper' && playerSelection == 'scissors' ? 'You Win! Scissors beats Paper.'
        : computerSelection == 'Scissors' && playerSelection == 'rock' ? 'You Win! Rock beats Scissors.'
        : computerSelection == 'Scissors' && playerSelection == 'paper' ? 'You Lose! Scissors beat Paper.'
        : 'Tie!';
}

function game(){
    let player = 0;
    let computer = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound();
        if(result.includes('Win')) player++;
        else if(result.includes('Lose')) computer++;
        alert(result + '\nCurrent Score\n You: ' + player + ' Computer: ' + computer);
        if(computer == 3 || player == 3) break;
    }
    computer == player ? alert('Tie!' + '\nFinal Score\n You: ' + player + ' Computer: ' + computer)
        : computer > player ? alert('You Lose.' + '\nFinal Score\n You: ' + player + ' Computer: ' + computer)
        : alert('You Win!' + '\nFinal Score\n You: ' + player + ' Computer: ' + computer);
    let newGame = prompt('Want to try again? y/n');
    if(newGame == 'Y' || newGame == 'y') game();
}

alert('Welcome to Rock, Paper, Scissors!\nThis will be a 5 round game. Good luck!');
game();