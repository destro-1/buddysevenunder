var audioPlayer = {
  audioFiles: ['hitemup.mp3', 'anotheraudio.mp3', 'yetanotheraudio.mp3'],
  currentAudioIndex: 0,
  audioElement: null,

  initializeAudioPlayer: function() {
    this.audioElement = document.getElementById('audioPlayer');
    this.audioElement.src = this.audioFiles[this.currentAudioIndex];

    this.audioElement.addEventListener('ended', function() {
      // Auto-advance to the next audio file when the current one ends
      audioPlayer.nextAudio();
    });
  },

  playPauseAudio: function() {
    if (this.audioElement.paused) {
      this.audioElement.play();
    } else {
      this.audioElement.pause();
    }
  },

  rewindAudio: function() {
    this.audioElement.currentTime = 0;
    this.audioElement.play();
  },

  fastforwardAudio: function() {
    // Implement your fast forward logic (e.g., skip to the next track)
    this.nextAudio();
  },

  nextAudio: function() {
    this.currentAudioIndex = (this.currentAudioIndex + 1) % this.audioFiles.length;
    this.audioElement.src = this.audioFiles[this.currentAudioIndex];
    this.audioElement.play();
  }
};

document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeAudioPlayer();
});
