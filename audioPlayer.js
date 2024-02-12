var audioPlayer = {
  youtubePlayer: null,
  currentVideoId: '', // Store the current video ID

  initializeYoutubePlayer: function() {
    // ... (unchanged)
  },

  onPlayerReady: function(event) {
    // Player is ready
  },

  onPlayerStateChange: function(event) {
    // Handle player state changes if needed
  },

  setYoutubeVideo: function(videoId) {
    this.currentVideoId = videoId;
    this.youtubePlayer.loadVideoById(videoId);
  },

  playPauseAudio: function() {
    if (this.youtubePlayer && this.currentVideoId) {
      var playerState = this.youtubePlayer.getPlayerState();
      if (playerState === YT.PlayerState.PAUSED || playerState === YT.PlayerState.ENDED) {
        this.youtubePlayer.playVideo();
      } else if (playerState === YT.PlayerState.PLAYING) {
        this.youtubePlayer.pauseVideo();
      }
    }
  },

  rewindAudio: function() {
    if (this.youtubePlayer && this.currentVideoId) {
      this.youtubePlayer.seekTo(0);
      this.youtubePlayer.playVideo(); // Auto-play after rewind
    }
  },

  fastforwardAudio: function() {
    // Implement your fast forward logic (e.g., skip to the next track)
    // You might need to implement a playlist and track index for this
  }
};

function searchAndPlay() {
  var searchTerm = document.getElementById('searchInput').value;

  getVideoIdFromSearchTerm(searchTerm)
    .then(videoId => {
      if (videoId) {
        audioPlayer.setYoutubeVideo(videoId);
      }
    })
    .catch(error => {
      console.error('Error fetching video ID:', error);
    });
}
