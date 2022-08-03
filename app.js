newStart();

let totalScore = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let dice;
let playGame = true;

function newStart() {
    //reset 
    document.getElementById("total_score_player_0").textContent = 0;
    document.getElementById("total_score_player_1").textContent = 0;
    document.getElementById("current_score_0").textContent = 0;
    document.getElementById("current_score_1").textContent = 0;

    //hiding the cube 
    document.querySelector(".dice-image").style.display = "none";

    //text to flood state
    document.querySelector("#name_0").textContent = "Score player 1";
    document.querySelector("#name_1").textContent = "Score player 2";

    //add and remove active class
    document.querySelector(".item1").classList.add("active");
    document.querySelector(".item2").classList.remove("active");
}

//changing the image of the cube according to a random number 
document.querySelector(".roll-dice").addEventListener("click", function rollTheDice() {
    if (playGame) {
        //generating a random number from 1 to 6
        dice = Math.ceil(Math.random() * 6);

        //display the correct image
        let diceElement = document.querySelector(".dice-image");
        diceElement.style.display = "block";
        diceElement.src = "img/" + dice + ".jpg";

        //count the numbers from the cube
        if (dice !== 1) {
            roundScore = roundScore + dice;
            document.getElementById("current_score_" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;
    document.getElementById("current_score_0").textContent = 0;
    document.getElementById("current_score_1").textContent = 0;

    document.querySelector(".dice-image").style.display = "none";

    document.querySelector(".item1").classList.toggle("active");
    document.querySelector(".item2").classList.toggle("active");
}

document.querySelector(".keep-score").addEventListener("click", function keepScore() {
    if (playGame) {
        //the total score is filled with the current score
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

        //dynamically pulls the element with the id total_score_player_0 or total_score_player_1 according to the current value of the activePlayer
        document.querySelector("#total_score_player_" + activePlayer).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= 50) {
            document.querySelector("#name_" + activePlayer).textContent = "THE WINNER!";
            document.querySelector(".dice-image").style.display = "none";
            playGame = false;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector(".new-game").addEventListener("click", newStart);