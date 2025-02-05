// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  // Function to add scroll-based animations
  function animateOnScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
      if (section.offsetTop < scrollPosition) {
        section.classList.add("animate");
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll);

  // Initial animation
  animateOnScroll();
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

