
const playBtn = document.querySelector(".play-button");
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");

playBtn.addEventListener("click", ()=>{
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
});

const values = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    const random = Math.floor(Math.random() * values.length)
    const computerAnswer = values[random]
    return computerAnswer;
}



const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const whoWonText = document.querySelector(".who-won-text");

const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){
        computerChoice = computerChoice.toLowerCase();

        if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "scissors" && humanChoice == "rock") || (computerChoice == "paper" && humanChoice == "scissors")){
            whoWonText.innerText = `You won the round! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            humanScoreText.innerText = `${humanScore}`;
        }else if (computerChoice === humanChoice){
            whoWonText.innerText = `It's a draw!`;
        }else {
            whoWonText.innerText = `You lost the round! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
            computerScoreText.innerText = `${computerScore}`;
        }
    }

    rockBtn.addEventListener("click", () =>{
        playRound(getComputerChoice(), "rock");
    });
    paperBtn.addEventListener("click", () =>{
        playRound(getComputerChoice(), "paper");
    });
    scissorsBtn.addEventListener("click", () =>{
        playRound(getComputerChoice(), "scissors")
    });

    return{
        computerScore, 
        humanScore
    };
            
};





const scores = playGame();

console.log(`This is the computer score: ${scores.computerScore}`);
console.log(`This is the human score: ${scores.humanScore}`);






