
const playBtn = document.querySelector(".play-button");
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const resultScreen = document.querySelector(".result-screen");
const playAgainBtn = document.querySelector(".play-again-button");

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
const humanResultScoreText = document.querySelector(".human-result-score");
const computerResultScoreText = document.querySelector(".computer-result-score");

const winnerTextBig = document.querySelector(".you-won-text");
const congratulationsText = document.querySelector(".congratulations-text");

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

        if(humanScore === 5){
            gameScreen.style.display = "none";
            resultScreen.style.display = "flex";

            winnerTextBig.innerText = "You won!";
            congratulationsText.innerText = "congratulations";

            humanResultScoreText.innerText = humanScoreText.innerText;
            computerResultScoreText.innerText = computerScoreText.innerText;

        }else if(computerScore === 5){
            gameScreen.style.display = "none";
            resultScreen.style.display = "flex";

            winnerTextBig.innerText = "You lost!";
            congratulationsText.innerText = "oh no";

            humanResultScoreText.innerText = humanScoreText.innerText;
            computerResultScoreText.innerText = computerScoreText.innerText;
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


    playAgainBtn.addEventListener("click", ()=>{
        computerScore = 0;
        humanScore = 0;

        humanScoreText.innerText = `0`;
        computerScoreText.innerText = `0`;

        humanResultScoreText.innerText = `0`;
        computerResultScoreText.innerText = `0`;

        whoWonText.innerText = "";
        resultScreen.style.display = "none";
        gameScreen.style.display = "flex";
    })

            
};



const scores = playGame();







