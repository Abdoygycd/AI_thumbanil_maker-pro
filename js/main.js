// MAIN CORE SCRIPT

// Sticky header on scroll
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fadeIn");
  });
});

document.querySelectorAll(".animate").forEach(el => observer.observe(el));
