
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



function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){
        computerChoice = computerChoice.toLowerCase();

        if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "scissors" && humanChoice == "rock") || (computerChoice == "paper" && humanChoice == "scissors")){
            
            console.log(`You won the round! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }else if (computerChoice === humanChoice){
            console.log(`It's a draw!`)
        }else {
            console.log(`You lost the round! ${computerChoice} beats ${humanChoice}.`)
            computerScore++;
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






