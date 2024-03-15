// audioPlayer.js

// Define an object to hold the audio player functionality
const audioPlayer = {
  audio: new Audio(), // Create an audio element
  currentTrackIndex: 0,
  playlist: [
    { name: "Hit Em Up", src: "hitemup.mp3" },
    { name: "Nollie Tre Flip", src: "Nollie Tre Flip.mp3" },
    // Add more songs as needed
  ],

  // Function to initialize the audio player
  initializeAudioPlayer: function() {
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
    if (this.audio.currentTime > 3) {
      // If more than 3 seconds into the track, rewind to the beginning
      this.audio.currentTime = 0;
    } else {
      // If at the beginning or less than 3 seconds in, move to the previous track
      this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
      this.loadTrack();
      this.audio.play();
    }
  },

  // Function to fast forward the audio track
  fastforwardAudio: function() {
    // Move to the next track
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
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
  }
};

// Add event listener to initialize the audio player when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeAudioPlayer();
});
