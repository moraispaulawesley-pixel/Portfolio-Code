// SWIPE
const container = document.querySelector('.container-avaliacoes');

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;

    let diff = startX - endX;

    if (diff > 50) {
        // arrastou pra esquerda → próximo
        let next = (index + 1) % cards.length;
        showCard(next, 'left');
    }

    if (diff < -50) {
        // arrastou pra direita → anterior
        let prev = (index - 1 + cards.length) % cards.length;
        showCard(prev, 'right');
    }
});

