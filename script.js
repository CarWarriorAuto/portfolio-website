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
    // 3. CONTACT FORM SUBMISSION (AJAX/Fetch)
    // =======================================================
    const contactForm = document.querySelector('.contact-card');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (event) {
            // 1. Prevent default HTML submission (stops page redirect)
            event.preventDefault();

            const formData = new FormData(contactForm);
            // Convert form data to a plain JavaScript object
            const data = Object.fromEntries(formData.entries());

            try {
                // 2. Send data to Formspree in the background
                const response = await fetch('https://formspree.io/f/xeorndbr', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(data)
                });

                // 3. Handle response
                if (response.ok) {
                    // Success: Clear the form fields and show message
                    contactForm.reset();
                    alert('Message sent successfully! Thank you for reaching out.');
                } else {
                    // Error response
                    alert('There was an error sending your message. Please try again later.');
                }

            } catch (error) {
                // Network error
                alert('A network error occurred. Please check your connection.');
            }
        });
        // =======================================================
    // 4. ACTIVE NAVIGATION HIGHLIGHTER
    // =======================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav-links a');

    // Create a new observer for the sections
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;

                // Remove 'active' class from all links
                navLinksList.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the link that matches the current section
                const activeLink = document.querySelector(`.nav-links a[href="#${currentSectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { 
        rootMargin: '-30% 0px -30% 0px', // Helps highlight when section is roughly in the middle
        threshold: 0.3 // Trigger when 30% of section is visible
    });

    // Start observing each section
    sections.forEach(section => {
        navObserver.observe(section);
    });
    }