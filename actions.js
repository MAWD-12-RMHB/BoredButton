var Num = document.getElementById("randomNum");
var button = document.getElementById("Button");
var anchorLink = document.getElementById("anchorLink");
var buttonState = 0;


function mouseOn() {
    buttonState++;
    if (buttonState == 1) {
        button.src = "button-pressed.png";
    }
}
function mouseOff() {
    buttonState--;
    if (buttonState == 0) {
        button.src = "button.png";
    }
}
function Press() {

}
function randomNum() {
    selNum = Math.floor(Math.random() * 4);
}
function randomLink() {
    randomNum();
    var numberSel = selNum+1;
    var randomLink = numberSel+".html"; 
    location.href = randomLink;
}
