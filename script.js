const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target); // anima só uma vez
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.card, .section, section').forEach(el => {
    observer.observe(el);
});
