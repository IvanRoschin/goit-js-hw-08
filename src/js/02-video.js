import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const CurrentTime = localStorage.getItem(STORAGE_KEY);

const onPlay = function (data) {
  const timeupdate = data.seconds;
  console.log(timeupdate);
  localStorage.setItem(STORAGE_KEY, timeupdate);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(CurrentTime)
  .then(function (seconds) {
    localStorage.removeItem(STORAGE_KEY);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
