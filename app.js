//Zakladne premenne
let totalScore = [0,0]; 
let roundScore = 0; 
let activePlayer  = 0;
let dice;


//zeroing and removing the cube - vynulovanie a odstránenie kocky
document.getElementById("total_score_player_0").textContent = 0;
document.getElementById("total_score_player_1").textContent = 0;
document.getElementById("current_score0").textContent = 0;
document.getElementById("current_score1").textContent = 0;

document.querySelector(".dice-image").style.display = "none";
