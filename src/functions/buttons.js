function clickMusicB(){
    var m = document.getElementById('alorsondanse');
    m.play();
}
function gotHome(){
    location.replace("https://melodiicam2b.github.io");
}
function getLink(){
    location.replace("https://melodiicam2b.github.io/404.html");
}
function getfren(){
    location.replace("https://melodiicam2b.github.io/boohoo.html");
}
function gethero(){
    location.replace("https://melodiicam2b.github.io/hero.html");
}

function button(action, sound) {
    var m = document.getElementById(sound ?? 'placeholder');
    m.play();
}