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

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock"
    } else if (letter === "p") {
        return "Paper"
    } else { 
        return "Scissors"
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("UserChoice: " + userChoice);
    console.log("computerChoice: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs": 
        case "pr":
        case "sp":
            resultEl.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}`;     
            win();
            break;
        case "rp": 
        case "ps":
        case "sr":
            resultEl.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}`;
            lose();
            break;
        case "rr": 
        case "pp":
        case "ss":
            resultEl.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Issa Draw...`;
            tie();
            break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreEl.innerHTML = userScore;
    tiedScoreEl.innerHTML = tiedScore;
    compScoreEl.innerHTML = compScore;
    // const smallUserWord = "user".fontsize(3).sub();
    // const smallComputerWord = "computer".fontsize(3).sub();
    // let userrr = convertToWord(userChoice);
    // console.log("This is userrr: " + userrr);
    // let comppp = convertToWord(computerChoice);
    // resultEl.innerHTML = userChoice + "beats" + computerChoice + " . You win!!!";
    // console.log(resultEl.textContent);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScoreEl.innerHTML = userScore;
    tiedScoreEl.innerHTML = tiedScore;
    compScoreEl.innerHTML = compScore;
    // resultEl.innerHTML = userChoice + " loses to " + computerChoice + ". You Lose...";
    console.log(resultEl.innerHTML);
}

function tie(userChoice, computerChoice) {
    tiedScore++;
    userScoreEl.innerHTML = userScore;
    tiedScoreEl.innerHTML = tiedScore;
    compScoreEl.innerHTML = compScore;
    // resultEl.innerHTML = userChoice + "equals " + computerChoice + ". Drawww!";    
}








function main() {
    rockButton.addEventListener("click", function(){
        game("r");
        console.log("Rock has been chosen");
    })

    paperButton.addEventListener("click", function(){
        game("p");
    })

    scissorsButton.addEventListener("click", function(){
        game("s");
    })
}
main();



