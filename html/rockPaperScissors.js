let myWebsite = "The Rock Paper Scissors Game";
console.log("Welcome to " + myWebsite)

var humanScore = 0;
var computerScore = 0;

function getComputerChoice(maxValue) {
    let computerChoice = Math.floor(Math.random() * maxValue);
    if(computerChoice == 0) {
        return "rock";
    }
    else if(computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice");
    return humanChoice;
}

function playRound() {
    let computerChoice = getComputerChoice(3)
    let humanChoice = getHumanChoice()
    if (computerChoice == humanChoice) {
        console.log("You both chose " + humanChoice + ". Draw");
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". It's a draw this round.");
    }
    else if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". Computer wins this round.");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". You win this round.");
    }
    else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". You win this round.");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". Computer wins this round.");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". You win this round.");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You chose " + humanChoice + " and computer chose " + computerChoice);
        console.log("Computer score is " + (computerScore));
        console.log("Human score is " + (humanScore));
        alert("You chose " + humanChoice + " and computer chose " + computerChoice + ". Computer wins this round.");
    }
}

function playGame() {
    let rounds = parseInt(prompt("How many rounds do you want to play?"));
    for(i = 0; i < rounds; i++) {
        playRound()
    }
    if (humanScore == computerScore) {
        console.log("The match was a draw with each scoring " + humanScore)
        alert("The match was a draw with each scoring " + humanScore);
    }
    else if (humanScore > computerScore) {
        console.log("You scored " + humanScore + " while computer scored " + computerScore + ". You win")
        alert("You scored " + humanScore + " while computer scored " + computerScore + ". You win");
    } else {
        console.log("You scored " + humanScore + " while computer scored " + computerScore + ". Computer wins")
        alert("You scored " + humanScore + " while computer scored " + computerScore + ". Computer wins");
    }
}

const startGame = document.querySelector("#startGame");
// startGame.onclick = () => playGame()
startGame.addEventListener("click", playGame)