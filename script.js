let getComputerChoice = () => {
    let choice = Math.random();
    if(choice >= 0 && choice < 1/3) return "Rock"
    else if(choice >= 1/3 && choice < 2/3) return "Paper"
    else return "Scissors"
}

console.log("Computer: " + getComputerChoice());

let getHumanChoice = () => {
    let choice = Number(prompt('Choose 1 - (Rock), 2 - (Paper), 3 - (Scissors)', 0));
    if(choice === 1) return "Rock"
    else if(choice === 2) return "Paper"
    else return "Scissors"
}

console.log("User: " + getHumanChoice());