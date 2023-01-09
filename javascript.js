"use strict"
function getComputerChoise(max = 3) {
    let answer = Math.floor(Math.random() * max);
    switch (answer) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection != "ROCK" &&
        playerSelection != "PAPER" &&
        playerSelection != "SCISSORS") {
        console.log(`The ${playerSelection} is not exist`);
        return 0;
    }
    if (playerSelection == computerSelection) {
        console.log(`Draw, you both have ${playerSelection}`);
        return 0;
    }
    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            return -1;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            return 1;
        }
    }
    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            return -1;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            return 1;
        }
    }
    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            return -1;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            return 1;
        }
    }
}

function game(rounds = 5) {
    let winCounter = 0;
    for (let _round = 1; _round <= rounds; _round++) {
        console.log(`Round ${_round}`);
        winCounter += playRound(prompt("Figure"), getComputerChoise());
    }
    if (winCounter > 0) {
        console.log("You won");
    }
    else if (winCounter == 0) {
        console.log("Draw");
    }
    else {
        console.log("You lost");
    }
}

game();