const $ = (Selector) => document.querySelector(Selector);
$('#btn').addEventListener('click', () => {
    const min = Number($('#min').value);
    const max = Number($('#max').value);
    const random = Math.round(Math.random() * (max - min)) + min;
    if (Number.isNaN(random)) {
        return;
    }
    $('#btn').disabled = true;
    let start;
    if (random > 50) {
        start = random - 50;
    } else {
        start = min;
    }
    const interval = setInterval(() => {
        if (start === random) {
            clearInterval(interval);
            $('#btn').disabled = false;
        }
        $('#box').innerHTML = start++;
    }, 10);
});