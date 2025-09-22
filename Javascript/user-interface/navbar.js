document.addEventListener("DOMContentLoaded", () => {
  // Load navbar HTML
  fetch("../../HTML/user-interface/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("Navbar").innerHTML = data;

      const topNav = document.querySelector(".top-nav");
      const bottomNav = document.querySelector(".bottomNav");

      // ===== Scroll Behavior =====
      window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 50) {
          // hide top-nav, move bottomNav up
          topNav.style.top = `-${topNav.offsetHeight}px`;
          bottomNav.style.top = `0`;
          bottomNav.classList.add("scrolled");
        } else {
          // reset top-nav, push bottomNav down
          topNav.style.top = `0`;
          bottomNav.style.top = `${topNav.offsetHeight}px`;
          bottomNav.classList.remove("scrolled");
        }
      });
    })
    .catch(err => console.error("Navbar load error:", err));
});
