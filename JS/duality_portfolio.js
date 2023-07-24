document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    function createVideoPlayers() {
        gallery.querySelectorAll(".image-wrapper").forEach((imageWrapper) => {
            const videoUrl = imageWrapper.dataset.videoId;
            imageWrapper.addEventListener("click", () => showVideoPlayer(videoUrl));
        });
    }

    function showVideoPlayer(videoUrl) {
        const videoPlayer = document.createElement("div");
        videoPlayer.classList.add("video-player");

        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + videoUrl;
        iframe.allowFullscreen = true;
        iframe.style.width = "80%"; // Set the width to 80% of the container

        videoPlayer.appendChild(iframe);

        // Remove any existing video players before adding the new one
        const existingVideoPlayers = document.querySelectorAll(".video-player");
        existingVideoPlayers.forEach((player) => player.remove());

        gallery.appendChild(videoPlayer);
    }

    createVideoPlayers();
});
