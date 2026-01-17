// animação ao aparecer na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

// elementos que vão animar
document.querySelectorAll('.card, .section, section').forEach(el => {
    observer.observe(el);
});
