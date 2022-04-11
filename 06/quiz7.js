const $ = Selector => document.querySelector(Selector);

let point = 0;
let life = 10;

$('.box').addEventListener('click', box);
$('#bug').addEventListener('click', bug);

function move() {
    let x = Math.floor(Math.random() * ($('.box').offsetWidth - $('#bug').offsetWidth));
    let y = Math.floor(Math.random() * ($('.box').offsetHeight - $('#bug').offsetHeight));
    $('#bug').style.left = `${x}px`;
    $('#bug').style.top = `${y}px`;
}

function bug() {
    move();
    point++;
    life++;
    $('#point').innerHTML = point;
}

function box() {
    move();
    life--;
    $('#life').innerHTML = life;
    if (life === 0) {
        alert('gameover');
        return;
    }
}