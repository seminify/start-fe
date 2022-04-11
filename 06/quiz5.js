const $ = selector => document.querySelector(selector);

function box($box) {

    let nX = 0,
        nY = 0,
        pX = 0,
        pY = 0;

    $box.addEventListener('mousedown', mousedown);

    function mousedown(event) {
        nX = event.pageX;
        nY = event.pageY;
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
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
        document.removeEventListener('mouseup', mouseup);
        document.removeEventListener('mousemove', mousemove);
    }
}

box($('.box'));
box($('.box1'));