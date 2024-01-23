function round() {
    let hands = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let playerScore = 0;
    let highScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerHand = hands[Math.floor(Math.random() * hands.length)];
        console.log("Let's play rock, paper, scissors!");
        let playerHand = prompt("What do you throw first?");
        console.log(`Computer throws ${computerHand}`);

        if (
            (computerHand === 'rock' && playerHand === 'scissors') ||
            (computerHand === 'scissors' && playerHand === 'paper') ||
            (computerHand === 'paper' && playerHand === 'rock')
        ) {
            console.log("Sorry, you lost!");
            computerScore += 1;
        } else if (computerHand === playerHand) {
            console.log("Whoopes! Its a tie.");
            i--;  // Play the same round again
        } else {
            console.log("You won!");
            playerScore += 1;
        }

        highScore = Math.max(highScore, playerScore, computerScore);
    }

    return highScore;
}

function game() {
    let finalHighScore = round();
    console.log("Final high score: " + finalHighScore);
}

game();
