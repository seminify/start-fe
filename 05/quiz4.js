var $box = document.getElementById('box');
$box.addEventListener('mousedown', mousedown);
document.addEventListener('mouseup', mouseup);

var nX = 0;
var nY = 0;
var pX = 0;
var pY = 0;

function mousedown(event) {
    nX = event.pageX;
    nY = event.pageY;
    document.addEventListener('mousemove', mousemove);
}

function mousemove(event) {
    pX = event.pageX - nX;
    pY = event.pageY - nY;
    nX = event.pageX;
    nY = event.pageY;
    $box.style.left = $box.offsetLeft + pX + 'px';
    $box.style.top = $box.offsetTop + pY + 'px';
}

function mouseup() {
    document.removeEventListener('mousemove', mousemove);
}