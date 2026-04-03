const items = document.querySelectorAll('.item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;

function showItem(i) {
    items.forEach(item => item.classList.remove('active'));
    items[i].classList.add('active');
}

// botão próxima
next.addEventListener('click', () => {
    index++;

    if (index >= items.length) {
        index = 0; // volta pro começo
    }

    showItem(index);
});

// botão anterior
prev.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = items.length - 1; // vai pro último
    }

    showItem(index);
});