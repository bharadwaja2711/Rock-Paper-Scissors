let getComputerChoice = () => {
    let choice = Math.random();
    if(choice >= 0 && choice < 1/3) return "Rock"
    else if(choice >= 1/3 && choice < 2/3) return "Paper"
    else return "Scissors"
}

console.log(getComputerChoice());