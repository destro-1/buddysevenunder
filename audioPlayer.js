var audio = document.getElementById("audioPlayer");

  var trackUrls = ["hitemup.mp3", "everybodysweep.mp3", "Nollie Tre Flip.mp3", "spinnin.mp3"];
  var currentTrackIndex = 0;

  function rewindAudio() {
    if (audio.currentTime === 0) {
      // If currentTime is at the beginning, go to the previous track or the last track
      if (currentTrackIndex > 0) {
        currentTrackIndex--;
      } else {
        currentTrackIndex = trackUrls.length - 1; // Go to the last track
      }
      audio.src = trackUrls[currentTrackIndex];
      audio.play();
    } else {
      audio.currentTime = 0; // Otherwise, restart the current track
    }
  }

  function fastforwardAudio() {
    if (currentTrackIndex < trackUrls.length - 1) {
      currentTrackIndex++;
    } else {
      currentTrackIndex = 0; // Loop back to the first track
    }
    audio.src = trackUrls[currentTrackIndex];
    audio.play();
  }

  function playAudio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
