var audioPlayer = {
  youtubePlayer: null,
  currentVideoId: '',

  initializeYoutubePlayer: function() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      audioPlayer.youtubePlayer = new YT.Player('youtubePlayer', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
          'onReady': audioPlayer.onPlayerReady,
          'onStateChange': audioPlayer.onPlayerStateChange
        }
      });
    };
  },

  onPlayerReady: function(event) {
    console.log('YouTube Player is ready');
    event.target.pauseVideo();
    event.target.clearVideo();
  },

  onPlayerStateChange: function(event) {
    console.log('Player State Changed:', event.data);
  },

  setYoutubeVideo: function(videoId) {
    this.currentVideoId = videoId;
    this.youtubePlayer.loadVideoById(videoId);
  },

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

  rewindAudio: function() {
    if (this.youtubePlayer && this.currentVideoId) {
      this.youtubePlayer.seekTo(0);
      this.youtubePlayer.playVideo();
    }
  },

  fastforwardAudio: function() {
    // Implement your fast forward logic (e.g., skip to the next track)
    // You might need to implement a playlist and track index for this
  }
};

function getVideoIdFromSearchTerm(searchTerm) {
  var apiKey = 'AIzaSyAD7A32b8BwOWNOBmgUGotQMA7nuzW4XXo'; // Replace with your actual API key
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

document.addEventListener('DOMContentLoaded', function() {
  audioPlayer.initializeYoutubePlayer();
});
