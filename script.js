// Dark/Light Mode Toggle
const toggleButton = document.getElementById("modeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});


document.querySelectorAll(".skill-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
