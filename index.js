
var p1 = Math.floor(Math.random() * 6) + 1;

var di = "images/" + "dice" + p1 + ".png";//will generate image to replace
var i1 = document.querySelectorAll("img")[0];
    i1.setAttribute("src", di);

var p2 = Math.floor(Math.random() * 6) + 1;

var di2 = "images/" + "dice" + p2 + ".png";
var i2 = document.querySelectorAll("img")[1];
    i2.setAttribute("src", di2);

if (p1 > p2) {
    document.getElementById("head").innerHTML="Player 1 Wins !!!";
}
else if (p1 < p2) {
    document.getElementById("head").innerHTML="Player 2 Wins !!!";
}
else {
    document.getElementById("head").innerHTML="Draw !!!";
}