import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay() {
    throttle(function (data) {
      const time = data.seconds;
      localStorage.setItem('videoplayer - current - time', time);
    }, 1000);
}