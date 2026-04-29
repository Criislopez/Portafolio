document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("closeVideo");
  const iframe = document.getElementById("videoFrame");

  const closeModal = () => {
    modal.style.display = "none";
    iframe.src = ""; // detener el vídeo
    document.body.style.overflow = "auto";
  };

  document.querySelectorAll(".openVideo").forEach((btn) => {
    btn.addEventListener("click", () => {
      const videoURL = btn.dataset.video;

      modal.style.display = "block";

      iframe.src = ""; // limpiar primero (importante)
      setTimeout(() => {
        iframe.src = videoURL;
      }, 50);

      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});