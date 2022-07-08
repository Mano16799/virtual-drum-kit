function playW() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.loop = false;
    audio.play();
}
function playA() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.loop = false;
    audio.play();
}

function playS() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.loop = false;
    audio.play();
}
function playD() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.loop = false;
    audio.play();
}
function playJ() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.loop = false;
    audio.play();
}
function playK() {
    var audio = new Audio("sounds/snare.mp3");
    audio.loop = false;
    audio.play();
}
function playL() {
    var audio = new Audio("sounds/crash.mp3");
    audio.loop = false;
    audio.play();
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w' || event.key == "w") playW()
    else if (event.key == 'a' || event.key == "A") playA()
    else if (event.key == 's' || event.key == "S") playS()
    else if (event.key == 'd' || event.key == "D") playD()
    else if (event.key == 'j' || event.key == "J") playJ()
    else if (event.key == 'k' || event.key == "K") playK()
    else if (event.key == 'l' || event.key == "L") playL()
});


