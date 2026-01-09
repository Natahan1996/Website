// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Observer Options
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    // Observer Callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once loaded
                // observer.unobserve(entry.target);
            }
        });
    };

    // Create Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target elements to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for anchor links (safeguard for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Glitch Effect Randomizer (Optional polish)
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #38bdf8,
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #e879f9
            `;
            setTimeout(() => {
                glitchElement.style.textShadow = 'none';
            }, 100);
        }, 3000);
    }
});
