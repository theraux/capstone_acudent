document.addEventListener("DOMContentLoaded", () => {
  fetch("../../HTML/user-interface/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("Navbar").innerHTML = data;

      // Now the navbar exists, so query it here:
      const topNav = document.querySelector(".top-nav");
      const bottomNav = document.querySelector(".bottomNav");
      let lastScrollTop = 0;

      window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
          // Scrolling down → hide top nav, move up bottom nav
          topNav.style.transform = "translateY(-40px)";
          bottomNav.style.transform = "translateY(-40px)";
        } else {
          if (currentScroll === 0) {
            // Reset when back to top
            topNav.style.transform = "translateY(0)";
            bottomNav.style.transform = "translateY(0)";
          }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });
    })
    .catch(err => console.error("Navbar load error:", err));
});

  
