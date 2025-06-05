function clickMusicB(){
    var m = document.getElementById('alorsondanse');
    m.play();
}
function getLink(link){
    switch(link){
        case'lonk':location.replace("https://melodiicam2b.github.io/links");
        case'home':location.replace("https://melodiicam2b.github.io");
        case'boho':location.replace("https://melodiicam2b.github.io/boohoo");
        default:location.replace("https://melodiicam2b.github.io/404");
    }
}