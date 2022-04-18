let $dragEl = null;
let position = 10;
let offset = {x: 0, y: 0};
let isDown = false;
document.body.addEventListener('mousemove', (event) => {
    console.log('mousemove');
    if (!isDown) return;
    $dragEl.style.left = event.clientX + offset.x;
    $dragEl.style.top = event.clientY + offset.y;
});
document.addEventListener('mouseup', (event) => {
    isDown = false;
    console.log('mouseup');
});

function startDrag(el) {
    el.addEventListener('mousedown', (event) => {
        $dragEl = el;
        isDown = true;
        console.log('mousedown');
        offset.x = $dragEl.offsetLeft - event.clientX;
        offset.y = $dragEl.offsetTop - event.clientY;
        $dragEl.style.zIndex = position++;
    });
}

const $box1 = document.querySelector('.box1');
const $box2 = document.querySelector('.box2');
startDrag($box1);
startDrag($box2);