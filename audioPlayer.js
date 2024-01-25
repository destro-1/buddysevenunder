var audioPlayer = {
  youtubePlayer: null,

  initializeYoutubePlayer: function() {
    this.youtubePlayer = new YT.Player('youtubePlayer', {
      height: '0',
      width: '0',
      videoId: '', // Empty initially, will be set dynamically
      playerVars: {
        controls: 0, // Hide YouTube controls
        autoplay: 0, // Autoplay off
        enablejsapi: 1, // Enable JavaScript API
        origin: window.location.origin // Set the origin for security
      },
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  },

  onPlayerReady: function(event) {
    // Player is ready
  },

  onPlayerStateChange: function(event) {
    // Handle player state changes if needed
  },

  setYoutubeVideo: function(videoId) {
    this.youtubePlayer.loadVideoById(videoId);
  },

  playPauseAudio: function() {
    if (this.youtubePlayer.getPlayerState() === YT.PlayerState.PAUSED ||
        this.youtubePlayer.getPlayerState() === YT.PlayerState.ENDED) {
      this.youtubePlayer.playVideo();
    } else {
      this.youtubePlayer.pauseVideo();
    }
  },

  rewindAudio: function() {
    this.youtubePlayer.seekTo(0);
    this.youtubePlayer.playVideo(); // Auto-play after rewind
  },

  fastforwardAudio: function() {
    // Implement your fast forward logic (e.g., skip to next track)
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

// Rest of your code...
