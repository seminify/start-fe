const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function printLog(str) {
    $log.value = str;
}

function fetchUrl() {
    const url = $url.value;
    if (url) {
        fetch(url)
            .then((Response) => Response.text().then(printLog))
            .catch((e) => printLog(e));
    }
}

$btn.addEventListener('click', fetchUrl);