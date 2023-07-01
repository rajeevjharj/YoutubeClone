// main.js

// Add event listener to the video containers
document.addEventListener("DOMContentLoaded", function() {
    var videoContainers = document.querySelectorAll(".video");
    for (var i = 0; i < videoContainers.length; i++) {
      videoContainers[i].addEventListener("click", playVideo);
    }
  });
  
  // Function to play the video when clicked
  function playVideo() {
    var videoTitle = this.querySelector("h3").textContent;
    alert("Playing video: " + videoTitle);
  }
  