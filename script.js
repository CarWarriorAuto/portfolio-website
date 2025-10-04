document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");
});
// Welcome message
window.onload = function() {
  alert("Welcome to Erico's Portfolio!");
};

// Simple button click effect
document.querySelector("form button").onclick = function() {
  alert("Thank you for reaching out, Erico will reply soon!");
};
// Animate skills when they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-skill");
        bar.style.width = targetWidth + "%";
        observer.unobserve(bar); // Run only once
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});
