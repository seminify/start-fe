const $ = Selector => document.querySelector(Selector);
$('#btn').addEventListener('click', print);

function print() {
    const result = [];
    const num = parseInt($('#num').value)
    if (isNaN(num)) {
        alert('숫자를 입력해주세요');
        return;
    }
    for (var i = 0; i < 9; i++) {
        result.push(`${num}×${i + 1}=${num * (i + 1)}`);
    }
    $('#result').innerHTML = result.join('<br>');
}