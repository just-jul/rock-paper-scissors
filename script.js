
const values = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    const random = Math.floor(Math.random() * values.length)
    const computerAnswer = values[random]
    return computerAnswer;
}


function getHumanChoice(){
    const answer = prompt("Enter your choice (Rock, Paper or Scissors): ");
    if (answer.toLowerCase() == "rock"){
        return "Rock"
    }else if(answer.toLowerCase() == "paper"){
        return "Paper"
    }else if (answer.toLowerCase() == "scissors"){
        return "Scissors"
    }
}


function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){
        computerChoice = computerChoice.toLowerCase();
        humanChoice = humanChoice.toLowerCase();

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

    for (let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    return{
        computerScore, 
        humanScore
    };
}

const scores = playGame();

console.log(`This is the computer score: ${scores.computerScore}`);
console.log(`This is the human score: ${scores.humanScore}`);






