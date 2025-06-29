window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const zoomBg = section.querySelector(".zoom-bg");
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const scrollPos = (window.innerHeight - rect.top) / window.innerHeight;
      zoomBg.style.transform = `scale(${1 + scrollPos * 0.2})`;
    } else {
      zoomBg.style.transform = "scale(1)";
    }
  });
});
  function toggleMenu() {
      const menu = document.getElementById('sideMenu');
      menu.classList.toggle('open');
    }
