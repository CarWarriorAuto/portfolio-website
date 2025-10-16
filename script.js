document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // =======================================================
    // 1. HAMBURGER MENU TOGGLE
    // =======================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // =======================================================
    // 2. SKILL BAR ANIMATION (Your Fix)
    // =======================================================
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute("data-skill");
                
                // This is the line that triggers the CSS animation
                bar.style.width = targetWidth + "%";
                
                observer.unobserve(bar); // Stop observing after running once
            }
        });
    }, { threshold: 0.5 }); // Starts when 50% of the element is visible

    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // =======================================================
    // 3. CONTACT FORM ALERT (Cleaned Up/Removed)
    // =======================================================
    // You should remove the old alert code entirely, as it will prevent 
    // real email submission once you integrate Formspree or a backend.
    /*
    document.querySelector("form button").onclick = function() {
        alert("Thank you for reaching out, Erico will reply soon!");
    };
    */

}); // END of document.addEventListener("DOMContentLoaded")