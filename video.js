let video = document.querySelector('.video');

function playPause() {
    if(video.paused){
        video.play();
        document.querySelector('.playbutton').style.backgroundImage = 'none';
    }

    else{
        video.pause();
        document.querySelector('.playbutton').style.backgroundImage = "url('./Pictures/play.png')";
    }
}