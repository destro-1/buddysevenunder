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

  rewindAudio: function() {
    if (this.youtubePlayer.getCurrentTime() === 0) {
      // Handle rewind logic
    } else {
      this.youtubePlayer.seekTo(0);
    }
  },

  fastforwardAudio: function() {
    // Handle fast forward logic
  },

  playPauseAudio: function() {
    if (this.youtubePlayer.getPlayerState() === YT.PlayerState.PAUSED) {
      this.youtubePlayer.playVideo();
    } else {
      this.youtubePlayer.pauseVideo();
    }
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

function getVideoIdFromSearchTerm(searchTerm) {
  var apiKey = 'AIzaSyAD7A32b8BwOWNOBmgUGotQMA7nuzW4XXo'; // Replace with your actual YouTube Data API key
  var apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  var requestUrl = `${apiUrl}?part=snippet&type=video&maxResults=1&q=${searchTerm}&key=${apiKey}`;

  return fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      var videoId = data.items[0]?.id?.videoId;
      return videoId;
    })
    .catch(error => {
      console.error('Error fetching video ID:', error);
      return null;
    });
}
