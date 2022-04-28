function getFetch(url, Callback) {
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => Callback(data));
}

const data = getFetch('data.json', (Data) => console.log(Data));