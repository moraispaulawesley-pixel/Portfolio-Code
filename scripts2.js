//Projects

const track = document.querySelector('.projetos-track');
const origin = track.innerHTML;

track.innerHTML = origin + origin + origin

let isDragging = false;
let startX;
let currentTranslate = 0;
let prevTranslate = 0;

const singleWidth = track.scrollWidth / 3;

currentTranslate = -singleWidth;
prevTranslate = -singleWidth;

track.style.transform = `translateX(${currentTranslate}px)`;

track.addEventListener('mousedown', startDrag);
track.addEventListener('touchstart', startDrag);

track.addEventListener('mousemove', drag);
track.addEventListener('touchmove', drag);

track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);
track.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = getPositionX(e);
}

function drag(e) {
    if (!isDragging) return;

    const currentX = getPositionX(e);
    const diff = currentX - startX;

    startX = currentX

    currentTranslate += diff;

    //loop

    if (currentTranslate > -singleWidth / 2) {
        currentTranslate -= singleWidth;
    }

    if (currentTranslate < -singleWidth * 1.5) {
        currentTranslate += singleWidth;
    }

    track.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
    isDragging = false;
    prevTranslate = currentTranslate;
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}