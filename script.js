console.log("Welcome To Rock Paper Scissors Game!!!");




function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}

const playerChoice = prompt("Choose Between Rock, Paper and Scissors.");
const strPlayer = playerChoice.toLowerCase();
const computerChoice = computerPlay();
let scorePlayer = 0;
let scoreComputer = 0;



function playRound(strPlayer, computerChoice) {
    if (strPlayer === "rock" && computerChoice === "rock") {
        return "Rock against Rock, It's a Tie!"
    }
    if (strPlayer === "paper" && computerChoice === "paper") {
        return "Paper against Paper, It's a Tie!"
    }
    if (strPlayer === "scissors" && computerChoice === "scissors") {
        return "Scissors against Scissors, It's a Tie!"
    }
    if (strPlayer === "scissors" && computerChoice === "paper") {
        scorePlayer++;
        return "Scissors against Paper, Player won!"
    }
    if (strPlayer === "paper" && computerChoice === "scissors") {
        scoreComputer++;
        return "Paper against Scissors, Computer won!"
    }
    if (strPlayer === "rock" && computerChoice === "paper") {
        scoreComputer++;
        return "Rock against Paper, Computer won!"
    }
    if (strPlayer === "paper" && computerChoice === "rock") {
        scorePlayer++;
        return "Paper against Rock, Player won!"
    }
    if (strPlayer === "scissors" && computerChoice === "rock") {
        scoreComputer++;
        return "Scissors against Rock, Computer won!"
    }
    if (strPlayer === "rock" && computerChoice === "scissors") {
        scorePlayer++;
        return "Rock against Scissors, Player won!"
    }


}

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound(strPlayer, computerChoice));
        
        console.log("Computer score: " + scoreComputer + " n\  Player score: " + scorePlayer);



    }
}

console.log(game());
