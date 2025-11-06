// ======================= Scroll Progress Bar =======================
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.getElementById("myBar");

  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
});

// ======================= Reveal on Scroll Animation =======================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((revealEl) => {
    const windowHeight = window.innerHeight;
    const elementTop = revealEl.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealEl.classList.add("active");
    } else {
      revealEl.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// ======================= About Tabs Control =======================
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let tab of tablinks) {
    tab.classList.remove("active-link");
  }
  for (let content of tabcontents) {
    content.classList.remove("active-tab");
  }

  // add active styles to clicked tab
  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active-link");
  }
  const tabElement = document.getElementById(tabname);
  if (tabElement) {
    tabElement.classList.add("active-tab");
  }
}

// ======================= Smooth Scroll to Top (Optional) =======================
// If you have an "up arrow" button with id="scrollUp"
const scrollUp = document.querySelector(".arrup");
if (scrollUp) {
  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ======================= Mobile Navbar Smooth Toggle (Optional) =======================
// If your mobile menu uses #menu-toggle checkbox
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      // Close menu automatically after click (for mobile UX)
      menuToggle.checked = false;
    });
  });
}
