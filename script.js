let computerScore = 0;
let humanScore = 0;

let getComputerChoice = () => {
    let choice = Math.random();
    if(choice >= 0 && choice < 1/3) return "Rock"
    else if(choice >= 1/3 && choice < 2/3) return "Paper"
    else return "Scissors"
}

let getHumanChoice = () => {
    let choice = Number(prompt('Choose 1 - (Rock), 2 - (Paper), 3 - (Scissors)'));
    if(choice === 1) return "Rock"
    else if(choice === 2) return "Paper"
    else return "Scissors"
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a draw!"
    } else if((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("User: ", humanSelection);
console.log("Computer: ", computerSelection);
console.log (playRound(humanSelection, computerSelection));
