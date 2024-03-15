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
    this.audio.pause(); // Pause the audio on page load
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

    playButton.addEventListener('click', () => {
      this.playPauseAudio();
      // Start playing the audio when the play button is clicked for the first time
      if (this.audio.paused && this.currentTrackIndex === 0) {
        this.audio.play();
      }
    });

    document.querySelector('.rewind-button').addEventListener('click', () => this.rewindAudio());
    document.querySelector('.fastforward-button').addEventListener('click', () => this.fastforwardAudio());
  }
};

// Add event listener to initialize the audio player when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeAudioPlayer();
});
