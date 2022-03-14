// Create Elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progressBar');
const playPause = document.querySelector('.pausePlay')
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.range')

function togglePlay() {
    // endTime.innerHTML = video.duration;
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
}
function updateBotton() {
    const button = this.paused ?
        ' <i id="bi-play" class="bi bi-play m-5 text-muted"></i>'
        :
        '<i id="bi-pause" class="bi bi-pause m-5 text-muted"></i>';
    playPause.innerHTML = button;
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    // console.log(this.value);
    video[this.name] = this.value;
}
function scrub(e) {
    const scutbTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scutbTime;

}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}



player.addEventListener('click', togglePlay);
video.addEventListener('play', updateBotton);
video.addEventListener('pause', updateBotton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', scrub)