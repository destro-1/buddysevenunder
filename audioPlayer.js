// YouTube player object
var audioPlayer = {
  youtubePlayer: null,
  currentVideoId: '',

  // Function to initialize the YouTube player
  initializeYoutubePlayer: function() {
    // Load the YouTube API script
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define onYouTubeIframeAPIReady function in the global scope
    window.onYouTubeIframeAPIReady = function() {
      audioPlayer.youtubePlayer = new YT.Player('youtubePlayer', {
        height: '360',
        width: '640',
        videoId: '', // Initially set to empty
        events: {
          'onReady': audioPlayer.onPlayerReady,
          'onStateChange': audioPlayer.onPlayerStateChange
        }
      });
    };
  },

  // Function called when the YouTube player is ready
  onPlayerReady: function(event) {
    console.log('YouTube Player is ready');
    // Initially hide the YouTube player
    event.target.pauseVideo();
    event.target.clearVideo();
  },

  // Function called when the state of the player changes
  onPlayerStateChange: function(event) {
    console.log('Player State Changed:', event.data);
    // Handle player state changes if needed
  },

  // Function to set a YouTube video
  setYoutubeVideo: function(videoId) {
    this.currentVideoId = videoId;
    this.youtubePlayer.loadVideoById(videoId);
  },

  // Function to play or pause the audio
  playPauseAudio: function() {
    if (this.youtubePlayer && this.currentVideoId) {
      var playerState = this.youtubePlayer.getPlayerState();
      console.log('Player State:', playerState);
      if (playerState === YT.PlayerState.PAUSED || playerState === YT.PlayerState.ENDED) {
        this.youtubePlayer.playVideo();
      } else if (playerState === YT.PlayerState.PLAYING) {
        this.youtubePlayer.pauseVideo();
      }
    }
  },

  // Function to rewind the audio
  rewindAudio: function() {
    if (this.youtubePlayer && this.currentVideoId) {
      this.youtubePlayer.seekTo(0);
      this.youtubePlayer.playVideo();
    }
  },

  // Function for fast-forwarding the audio
  fastforwardAudio: function() {
    // Implement your fast forward logic (e.g., skip to the next track)
    // You might need to implement a playlist and track index for this
  }
};

// Function to fetch YouTube video ID from a search term
function getVideoIdFromSearchTerm(searchTerm) {
  var apiKey = 'AIzaSyAD7A32b8BwOWNOBmgUGotQMA7nuzW4XXo';
  var apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${apiKey}`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        return data.items[0].id.videoId;
      } else {
        throw new Error('No video found for the given search term.');
      }
    });
}

// Function called when the "Search For a Song" button is clicked
function searchAndPlay() {
  var searchTerm = document.getElementById('searchInput').value;

  // Ensure that getVideoIdFromSearchTerm is called after the API script is loaded
  window.onYouTubeIframeAPIReady = function() {
    getVideoIdFromSearchTerm(searchTerm)
      .then(videoId => {
        console.log('Fetched Video ID:', videoId);
        if (videoId) {
          audioPlayer.setYoutubeVideo(videoId);
        }
      })
      .catch(error => {
        console.error('Error fetching video ID:', error);
      });
  };
}

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeYoutubePlayer();
});
