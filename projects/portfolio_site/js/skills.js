document.addEventListener('DOMContentLoaded', function() {
    const skillProgress = document.querySelectorAll('.skill-progress');

    function animateSkills() {
        skillProgress.forEach(progress =>{
            const width = progress.getAttribute('data-width');
            progress.style.width = width + '%';
            progress.classList.add('animate');
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});