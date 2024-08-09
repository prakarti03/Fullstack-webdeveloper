var r1 = Math.floor((Math.random() * 6) + 1);

if(r1 === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png") ;
}
else if(r1 === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png") ;
}
else if(r1 === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png") ;
}
else if(r1 === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png") ;
}
else if(r1 === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png") ;
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png") ;
}

var r2 = Math.floor((Math.random() * 6) + 1);

var imagesource = "images/dice" + r2 +".png";

document.querySelector(".img2").setAttribute("src",imagesource) ;


if (r1 > r2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (r1 < r2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}