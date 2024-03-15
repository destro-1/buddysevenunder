// audioPlayer.js

// Define an object to hold the audio player functionality
const audioPlayer = {
  audio: new Audio(), // Create an audio element
  currentTrackIndex: 0,
  playlist: [
    { name: "Hit Em Up", src: "hitemup.mp3" },
    { name: "Nollie Tre Flip", src: "Nollie Tre Flip.mp3" },
    { name: "Everybody Sweep", src: "everybodysweep.mp3" },
    // Add more songs as needed
  ],

  // Function to initialize the audio player
  initializeAudioPlayer: function() {
    this.loadTrack();
    this.audio.pause(); // Pause the audio by default
    this.setupEventListeners();
  },

  // Function to play the audio
  playAudio: function() {
    this.audio.play();
  },

  // Function to pause the audio
  pauseAudio: function() {
    this.audio.pause();
  },

  // Function to switch to the previous track
  prevTrack: function() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack();
    this.playAudio();
  },

  // Function to switch to the next track
  nextTrack: function() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    this.loadTrack();
    this.playAudio();
  },

  // Function to load the current track
  loadTrack: function() {
    this.audio.src = this.playlist[this.currentTrackIndex].src;
  },

  // Function to set up event listeners for the buttons
  setupEventListeners: function() {
    const playPauseButton = document.querySelector('.apple-music-button');
    const prevButton = document.querySelector('.rewind-button');
    const nextButton = document.querySelector('.fastforward-button');

    playPauseButton.addEventListener('click', () => {
      if (this.audio.paused) {
        this.playAudio();
      } else {
        this.pauseAudio();
      }
    });

    prevButton.addEventListener('click', () => this.prevTrack());
    nextButton.addEventListener('click', () => this.nextTrack());

    // Automatically switch to the next track when current track ends
    this.audio.addEventListener('ended', () => {
      this.nextTrack();
    });
  }
};

// Add event listener to initialize the audio player when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeAudioPlayer();
});
