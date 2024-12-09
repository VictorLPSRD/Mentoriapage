// Animação de transição suave para os colaboradores ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = 'opacity 1s ease-in-out';
            card.style.opacity = 1;
        }, 300);
    });
});
