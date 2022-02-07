let randomNumber1 = Math.floor(Math.random()*6) + 1; // Random dice number for player 1
document.getElementById("img1").setAttribute("src", "images/dice" + randomNumber1+ ".png");


let randomNumber2 = Math.floor(Math.random()*6) + 1; // Random dice number for player 2
document.getElementById("img2").setAttribute("src", "images/dice" + randomNumber2+ ".png");

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML= "🚩 Player 2 Wins";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw! 😊";
}
