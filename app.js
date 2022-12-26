console.log("Hello There");

let userScore = 0;
let tiedScore = 0;
let compScore = 0;
const userScoreEl = document.getElementById("user-score");
const tiedScoreEl = document.getElementById("tied-score");
const compScoreEl = document.getElementById("computer-score");
const scoreboardEl = document.querySelector(".score-board");
const resultEl = document.querySelector(".result > p");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord (letter) {
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    else return "SCISSOR";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    // const smallUserWord = "user".fontsize(3).sub();
    // const smallComputerWord = "computer".fontsize(3).sub();
    resultEl.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!!`;
    console.log(resultEl.innerHTML);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    resultEl.textContent = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lose...`;
    console.log(convertToWord(userChoice));
}

function tie(userChoice, computerChoice) {
    tiedScore++;
    tiedScoreEl.innerHTML = tiedScore;
    resultEl.innerHTML = userChoice + " equals " + computerChoice + ". Drawww";
    console.log(resultEl.innerHTML);
}





function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("UserChoice: " + userChoice);
    console.log("computerChoice: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs": 
        case "pr":
        case "sp":
            win();
            break;
        case "rp": 
        case "ps":
        case "sr":
            lose();
            break;
        case "rr": 
        case "pp":
        case "ss":
            tie();
            break;
    }
}


function main() {
    rockButton.addEventListener("click", function(){
        game("r");
    })

    paperButton.addEventListener("click", function(){
        game("p");
    })

    scissorsButton.addEventListener("click", function(){
        game("s");
    })
}

function convertToWord(letter) {
    if (letter === "r") return "ROCK";
    if (letter === "r") return "PAPER";
    return "SCISSORS";
    
}

main();

