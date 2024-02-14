// backgroundVideo.js

var videoFiles = ['bg-onepiece.mp4', 'bg-onepiece2.mp4'];
var randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
var videoElement = document.getElementById('backgroundVideo');
videoElement.innerHTML = '<source src="videos/' + randomVideo + '" type="video/mp4">';
