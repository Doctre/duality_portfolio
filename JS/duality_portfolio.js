document.addEventListener("DOMContentLoaded", function () {
  
    // Video player functionality
    const gallery = document.querySelector(".gallery");
  
    function createVideoPlayer(videoUrl) {
      const videoPlayer = document.createElement("div");
      videoPlayer.classList.add("video-player");
  
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + videoUrl;
      iframe.allowFullscreen = true;
      iframe.style.width = "80%"; // Set the width to 80% of the container
  
      videoPlayer.appendChild(iframe);
  
      // Remove any existing video players before adding the new one
      const existingVideoPlayers = gallery.querySelectorAll(".video-player");
      existingVideoPlayers.forEach((player) => player.remove());
  
      gallery.appendChild(videoPlayer);
    }
  
    function attachVideoPlayerClickEvent(imageWrapper) {
      const videoUrl = imageWrapper.dataset.videoId;
      imageWrapper.addEventListener("click", () => createVideoPlayer(videoUrl));
    }
  
    gallery.querySelectorAll(".image-wrapper").forEach(attachVideoPlayerClickEvent);
  });
  
const carerForm = document.getElementById('carerForm')
console.log('carerForm', carerForm)

carerForm.addEventListener('submit', function(e) {
  alert()
  e.preventDefault();

  var action = this.attr('action')
  console.log('action', action)

  
  $.ajax({
  url: "https://fiddle.jshell.net/favicon.png",
  data: {
      name: formElements['name'].value,
      surname:  formElementsT ['surname'].value,
      mail:  formElementsT ['mail'].value,
      phone:  formElements ['phone'].value,
      vacancy:  formElements ['vacancy'].value,
      file:  formElements ['file'].value,
    },
  success: function(response) {
    console.log(response)
  }
})
  
})
