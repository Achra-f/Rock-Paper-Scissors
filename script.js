// Rock paper scissors javascript TOP

const options = document.querySelectorAll('.options');

let pScore = 0;
let cScore = 0;


options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;
    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];


    decideWinner(pInput, cInput);
    updateScore();
    checkWinner();


  });
});








function decideWinner(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  // Tie check
  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  // Rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}


function updateScore() {
  const player = document.querySelector('.playerContent');
  const computer = document.querySelector('.computerContent');


  player.textContent = pScore;
  computer.textContent = cScore;

}


function checkWinner() {
  const container = document.querySelector('.result');
  if (pScore === 3) {
    const playerContent = document.createElement("p")
    playerContent.classList.add('end');
    playerContent.textContent = "Congratulations, you won!!!";
    container.appendChild(playerContent);
    resetGame();
    return true;
  }
  if (cScore === 3) {
    const computerContent = document.createElement("p")
    computerContent.classList.add('end');
    computerContent.textContent = "oh, you lost. Better luck next time.";
    container.appendChild(computerContent);
    resetGame();
    return true;
  }
  return false;

}
function updateGame() {
  const playerDiv = document.querySelector('.playerContent');
  const computerDiv = document.querySelector('.computerContent');


  playerDiv.classList.remove('div');
  computerDiv.classList.remove('div');




}

function resetGame() {
  pScore = 0;
  cScore = 0;

  updateScore();
  updateGame();



}










































/* Rock paper scissors without GUI
console.log("Welcome To Rock Paper Scissors Game!!!");




function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    return randChoice;
}



const computerChoice = computerPlay();
let scorePlayer = 0;
let scoreComputer = 0;



function playRound(computerChoice) {
    const playerChoice = prompt("Choose Between Rock, Paper and Scissors.");
    const strPlayer = playerChoice.toLowerCase();
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
        return "Scissors against Paper, Player won!"
    }
    if (strPlayer === "paper" && computerChoice === "scissors") {

        return "Paper against Scissors, Computer won!"
    }
    if (strPlayer === "rock" && computerChoice === "paper") {
        return "Rock against Paper, Computer won!"
    }
    if (strPlayer === "paper" && computerChoice === "rock") {
        return "Paper against Rock, Player won!"
    }
    if (strPlayer === "scissors" && computerChoice === "rock") {
        scoreComputer++;
        return "Scissors against Rock, Computer won!"
    }
    if (strPlayer === "rock" && computerChoice === "scissors") {
        return "Rock against Scissors, Player won!"
    }


}
/*
function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound(strPlayer, computerChoice));
        
        console.log("Computer score: " + scoreComputer + " n\  Player score: " + scorePlayer);



    }
}
*/

/*
function game(){

    for (let i = 0; i < 1000; i++) {

        let outcome = playRound(computerChoice)
        console.log(outcome)
       if (outcome.indexOf('win') > -1) {   
        scorePlayer++
        console.log(`Score - Player : ${scorePlayer}\
        Computer : ${scoreComputer}`);
        }
        else if (outcome.indexOf('Draw') > -1){
        draws++;
        }
        else {
            scoreComputer++
            console.log(`Score - Player : ${scorePlayer}\
        Computer : ${scoreComputer}`);
        }
        if (scorePlayer === 5) {
            console.log("Congrats! You win!");
            break;
        }
        if (scoreComputer === 5) {
            console.log("You lost, better luck next time!");
            break;
        }
        
    }
}


game();

*/