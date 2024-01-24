// Pseudo code
// Click a button
// That button becomes playerChoice and is played against the computer hand
// The score is then logged and displayed somewhere on screen
// When 5 wins are reached, a winner is delared

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const rockBtn = document.querySelector('#rockBtn');
const paperbtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const playerLiveScore = document.querySelector('#playerScore');
const computerLiveScore = document.querySelector('#computerScore');
const scoreInfo = document.querySelector('#scoreInfo');
const scorePlay = document.querySelector('#scorePlay');
const restartBtn = document.querySelector('#restartGame');

function playRound(playerSelection, computerSelection) {
    computerSelection
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
}
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}
  
function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// The handleClick event must:
//      Set the computer choice
//      PLAY the round by calling the playRound function
//      Update score

function handleClick(playerSelection) {
    if (isGameOver()) {
        return
    }
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateScore()
    if (isGameOver()) {
        finalMessage()
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scorePlay.textContent = "its a tie";
    } else if (roundWinner === 'player') {
        scorePlay.textContent = "You won!";
    } else if (roundWinner === 'computer') {
        scorePlay.textContent = "You LOST boooooo";
    }
    playerLiveScore.textContent = `Player Score: ${playerScore}`
    computerLiveScore.textContent = `Computer Score: ${computerScore}`
}

rockBtn.addEventListener('click', () => handleClick('ROCK'))
scissorsBtn.addEventListener('click', () => handleClick('PAPER'))
paperbtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)

function restartGame() {
    scoreInfo.textContent = 'Choose your weapon';
    playerLiveScore.textContent = 'Player: 0';
    computerLiveScore.textContent = 'Computer: 0';
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    updateScore();
}

function finalMessage() {
    return playerScore > computerScore
        ? (scoreInfo.textContent = "You won best out of five!")
        : (scoreInfo.textContent = `Computer beat you ${computerScore} to ${playerScore}`)
}