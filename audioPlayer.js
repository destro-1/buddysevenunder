//audioPlayer.js

const audioPlayer = {
  audio: document.getElementById('audioPlayer'),
  isPlaying: false,
  currentSongIndex: 0,
  songs: [
    { title: "Hit Em Up", src: "hitemup.mp3" },
    { title: "Nollie Tre Flip", src: "Nollie Tre Flip.mp3" },
    { title: "Everybody Sweep", src: "everybodysweep.mp3" },
    { title: "Spinnin", src: "spinnin.mp3" }
    { title: "HotBobby", src: "HotBobby.mp3" }
    // Add more songs as needed
  ],
  
  playPauseAudio: function() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  },

  rewindAudio: function() {
    if (this.currentSongIndex === 0 && this.audio.currentTime <= 3) {
      // If it's the first song and already at the beginning or has been playing less than 3 seconds
      this.currentSongIndex = this.songs.length - 1; // Go to the last song
    } else {
      // Otherwise, restart the current song
      this.audio.currentTime = 0;
    }
    this.loadSong();
  },

  fastforwardAudio: function() {
    if (this.currentSongIndex === this.songs.length - 1) {
      // If it's the last song, go back to the first song
      this.currentSongIndex = 0;
    } else {
      // Otherwise, go to the next song
      this.currentSongIndex++;
    }
    this.loadSong();
  },

  loadSong: function() {
    const currentSong = this.songs[this.currentSongIndex];
    this.audio.src = currentSong.src;
    document.getElementById('songTitle').innerText = currentSong.title;
    if (this.isPlaying) {
      this.audio.play(); // Resume playing if it was playing
    }
  }
};

// Load the initial song
audioPlayer.loadSong();

// Update play/pause button icon based on audio playback state
audioPlayer.audio.addEventListener('play', function() {
  // Change play button to pause button
  document.querySelector('.apple-music-button svg').innerHTML = `
    <path d="M11 5H6v14h5v-14zm6 0h-5v14h5v-14z"/>
  `;
});

audioPlayer.audio.addEventListener('pause', function() {
  // Change pause button to play button
  document.querySelector('.apple-music-button svg').innerHTML = `
    <path d="M8 5v14l11-7z"/>
  `;
});
