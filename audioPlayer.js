//audioPlayer.js

const audioPlayer = {
  audio: document.getElementById('audioPlayer'),
  isPlaying: false,
  currentSongIndex: 0,
  songs: [
    { title: "Hit Em Up", src: "hitemup.mp3" },
    { title: "Nollie Tre Flip", src: "Nollie Tre Flip.mp3" },
    { title: "Everybody Sweep", src: "everybodysweep.mp3" },
    { title: "Spinnin, src: "spinnin.mp3" },
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
    this.audio.currentTime -= 10; // Rewind 10 seconds
  },

  fastforwardAudio: function() {
    this.audio.currentTime += 10; // Fast forward 10 seconds
  },

  loadSong: function() {
    const currentSong = this.songs[this.currentSongIndex];
    this.audio.src = currentSong.src;
    document.getElementById('songTitle').innerText = currentSong.title;
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
