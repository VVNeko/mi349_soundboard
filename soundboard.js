document.getElementById('audio01').addEventListener('click', function (){
    var audio = document.getElementById('sound01');
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
        audio.currentTime-0;
    }
});

document.getElementById('audio02').addEventListener('click', function (){
    var audio = document.getElementById('sound02');
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
        audio.currentTime-0;
    }
});

document.getElementById('audio03').addEventListener('click', function (){
    var audio = document.getElementById('sound03');
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
        audio.currentTime-0;
    }
});