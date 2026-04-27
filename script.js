document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openVideo");
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("closeVideo");
  const iframe = document.getElementById("videoFrame");

  const videoURL = "https://player.vimeo.com/video/1186902671?autoplay=1&title=0&byline=0&portrait=0";

  openBtn.onclick = () => {
    modal.style.display = "block";
    iframe.src = videoURL;
    document.body.style.overflow = "hidden";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
  };

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
      iframe.src = "";
      document.body.style.overflow = "auto";
    }
  };
});