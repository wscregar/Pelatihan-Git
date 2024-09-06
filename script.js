document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('bounce');
        setTimeout(() => {
            card.classList.remove('bounce');
        }, 1000);
    });
});

/* Simple bounce animation */
document.styleSheets[0].insertRule(`
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    .bounce {
        animation: bounce 1s;
    }
`, document.styleSheets[0].cssRules.length);
