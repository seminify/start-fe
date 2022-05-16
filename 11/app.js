const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=#page`;
const $docs = document.querySelector('#docs');
const $query = document.querySelector('[name="query"]');
const $searchForm = document.querySelector("#searchForm");
const $button = document.querySelector("#button");
let page;

function getFetch(url, Callback) {
    const headers = {
        Authorization: 'KakaoAK 44a8b278d03c10f981fe99ffe524524d'
    }
    fetch(url, {headers})
        .then((Response) => Response.json())
        .then((data) => Callback(data));
}

function search(page) {
    const query = $query.value;
    const searchUrl = url.replace('#query', query).replace('#page', page);
    getFetch(searchUrl, (data) => {
        const {documents} = data;
        console.log(documents);
        const docs = documents.map((document) => {
            console.log(document);
            return document.contents;
        });
        $docs.innerHTML += docs.join('<hr>');
    });
}

$searchForm.addEventListener('submit', (event) => {
    page = 1;
    search();
    event.preventDefault();
})

$button.addEventListener('click',function (){
    if(page===51) return;
    page++;
    search(page);
})