// audioPlayer.js

// Define an object to hold the audio player functionality
const audioPlayer = {
  audio: null,
  currentTrackIndex: 0,
  playlist: [
    { name: "Hit Em Up", src: "hitemup.mp3" },
    { name: "Nollie Tre Flip", src: "Nollie Tre Flip.mp3" },
    // Add more songs as needed
  ],

  // Function to initialize the audio player
  initializeAudioPlayer: function() {
    this.audio = document.getElementById('audioPlayer');
    this.loadTrack();
    this.setupEventListeners();
  },

  // Function to play or pause the audio
  playPauseAudio: function() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  },

  // Function to rewind the audio track
  rewindAudio: function() {
    if (this.audio.currentTime > 0) {
      // If not at the beginning, restart the current track
      this.audio.currentTime = 0;
    } else {
      // If at the beginning, move to the previous track or go to the last track if none available
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.playlist.length - 1;
      }
      this.loadTrack();
      this.audio.play();
    }
  },

  // Function to fast forward the audio track
  fastforwardAudio: function() {
    if (this.currentTrackIndex < this.playlist.length - 1) {
      this.currentTrackIndex++;
    } else {
      this.currentTrackIndex = 0;
    }
    this.loadTrack();
    this.audio.play();
  },

  // Function to load the current track
  loadTrack: function() {
    this.audio.src = this.playlist[this.currentTrackIndex].src;
  },

  // Function to set up event listeners for the buttons
  setupEventListeners: function() {
    const playButton = document.querySelector('.apple-music-button');
    const rewindButton = document.querySelector('.rewind-button');
    const fastforwardButton = document.querySelector('.fastforward-button');

    playButton.addEventListener('click', () => this.playPauseAudio());
    rewindButton.addEventListener('click', () => this.rewindAudio());
    fastforwardButton.addEventListener('click', () => this.fastforwardAudio());

    // Pause the audio when it finishes playing
    this.audio.addEventListener('ended', () => this.audio.pause());
  }
};

// Add event listener to initialize the audio player when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeAudioPlayer();
});
