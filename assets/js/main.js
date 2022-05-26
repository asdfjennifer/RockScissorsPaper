let rounds5 = document.getElementById('rounds5_input');
let rounds10 = document.getElementById('rounds10_input');
let rounds15 = document.getElementById('rounds15_input');
let rounds20 = document.getElementById('rounds20_input');
let stone = document.getElementById('stone_input');
let scissor = document.getElementById('scissor_input');
let paper = document.getElementById('paper_input');
let resultHuman = 0;
let resultComputer = 0;
let resultHumanInput = document.getElementById('resultHuman_input');
let resultComputerInput = document.getElementById('resultComputer_input');
let gameRounds = 0;
//let restart = document.getElementById('restart_input');

//wenn man sich eine Runde aussucht, kommt diese Anzahl in der Konsole raus
let submit = (choice) => {
    //math.random(), eine random Zahl von 1-3 ausspucken
    let randomComputerChoice = Math.floor(Math.random() * 3);
    //Stein = 0, Schere = 1, Papier 2
    if (choice == stone){
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch(randomComputerChoice) {
            case 0:
                h3.innerHTML = "Niemand gewinnt, es herrscht Gleichstand!";
                gameRounds += 1;
            break;
            case 1:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == scissor){
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch(randomComputerChoice) {
            case 0:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Stein schlägt Schere. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                h3.innerHTML = "Gleichstand!";
                gameRounds += 1;
            break;
            case 2:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Du hast gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == paper){
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch(randomComputerChoice) {
            case 0:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Papier schlägt Stein. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                h3.innerHTML = "Gleichstand!";
                gameRounds += 1;
            break;
        }
    }
}


//sobald RESTART geklickt wird, soll die Funktion ausgeführt werden, die die Results zurückstellen
let restart = () => {
    resultComputer = 0;
    resultComputerInput.innerHTML = resultComputer;
    resultHuman = 0;
    resultHumanInput.innerHTML = resultHuman;
    gameRounds = 0;
    h3.innerHTML = "";
}

let gameRound = () => {
    if (rounds5.checked) {
        if (gameRounds > 5) {
            restart();
        }
    } if (rounds10.checked) {
        if (gameRounds > 10) {
            restart();
        }
    } if (rounds15.checked) {
        if (gameRounds > 15) {
            restart();
    } if (rounds20.checked) {
        if (gameRounds > 20) {
            restart();
            }
        }
    }
}