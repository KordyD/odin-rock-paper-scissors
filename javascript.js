"use strict"
let winCounter = 0;
let looseCounter = 0;

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
        return;
    }
    if (playerSelection == computerSelection) {
        console.log(`Draw, you both have ${playerSelection}`);
        return;
    }
    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            looseCounter += 1;
            return;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            winCounter += 1;
            return;
        }
    }
    if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            looseCounter += 1;
            return;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            winCounter += 1;
            return;
        }
    }
    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            console.log(`You lost, ${playerSelection} looses ${computerSelection}`);
            looseCounter += 1;   
            return;
        }
        else {
            console.log(`You won, ${playerSelection} wins ${computerSelection}`);
            winCounter += 1;
            return;
        }
    }
}

function game(rounds = 5) {
    for (let _round = 1; _round <= rounds; _round++) {
        console.log(`Round ${_round}`);
        playRound(prompt("Figure"), getComputerChoise());
    }
    if (winCounter > looseCounter) {
        console.log("You won");
    }
    else if (winCounter == looseCounter) {
        console.log("Draw");
    }
    else {
        console.log("You lost");
    }
}

game();