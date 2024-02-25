<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="audioPlayer.js" defer></script>
  <title>BUDDYSEVENUNDER</title>
</head>
<body>
  <div class="circle-container">
    <img src="ghostiepaint.png" alt="Circle Image">
  </div>
  <h1>Hello World!</h1>
  <a href="https://www.google.com">This is Google</a>
  <a href="https://www.google.com">Sign In</a>

  <!-- Buttons like Apple Music -->
  <div class="player-controls">
    <button class="rewind-button" onclick="audioPlayer.rewindAudio()">
      <svg class="rewind-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
      </svg>
    </button>

    <button class="apple-music-button" onclick="audioPlayer.playPauseAudio()">
      <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </button>

    <button class="fastforward-button" onclick="audioPlayer.fastforwardAudio()">
      <svg class="fastforward-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20 6v12h2V6h-2zm-14 6l8.5 6V6z"/>
      </svg>
    </button>
  </div>

  <audio id="audioPlayer" src="hitemup.mp3"></audio>

  <!-- Script that controls Audio Player Buttons -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      audioPlayer.initializeAudioPlayer();
    });
  </script>

  <h1>Buddy maybe make a sign in button</h1>
</body>
</html>
