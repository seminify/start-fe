console.log('04');
// 가장 최상위 객체
// window.outerWidth;
// window.name;
// window.open('http://www.daum.net');
// window.openers;
// window.close();

// location
// location.href = 'http://www.daum.net';
// location.reload();

// history
// history.back();
// history.go(1);

// screen
// screen.width;
// screen.availWidth;

// navigator
// navigator.userAgent;
// navigator.language;
// navigator.platform;

// const element = document.getElementById('wrap');
// const element1 = document.querySelector('.wrap');
// const elements = document.querySelectorAll('div');
// console.log(Elements);

// const div = document.createElement('div');
// div.style.border = '1px solid red';
// div.innerHTML = "hello!!";
// document.body.appendChild(div);

// .appendChild()
// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// const text = '<span>hello</span>';
// document.querySelector('#debug').innerHTML = text;

// .remove()
// const e1 = document.getElementById('div1');
// e1.remove();

// .removeChild()
// const list = document.getElementById('list');
// list.removeChild(list.children[0]);

// Event 등록 방법

// 프로퍼티로 주기
// window.load = function () {
//     alert("load");
// }

// DOM 레벨2
// window.addEventListener('load', function () {
//     this.alert("load");
// });

// Callback 함수
// var clickCount = 0;
// function popup(event) {
//     console.log(++clickCount);
//     console.log(arguments, this, event, event.type, event.currentTarget);
// }
// document.body.addEventListener('click', popup);
// document.body.addEventListener('click', function () {
//     console.log("click");
// });

// var app = document.getElementById("list");
// app.addEventListener("click", function (event) {
//     if (event.target.nodeName == "LI") {
//         // 한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//     }
// })

// 이벤트 전파 중지
// event.stopPropagation();// 이벤트 전파 중지
// event.preventDefault();// 기본 행동 중지

// const element = document.getElementById('wrap');
// const element1 = document.querySelector('#wrap');
// const elements = document.querySelectorAll('div');
// console.log(elements);

// const div = document.createElement('div');
// div.style.border = '1px solid red';
// div.innerHTML = 'hello!!';

// document.body.appendChild(div);

// document.querySelector('#wrap').innerHTML = 111;
// window.onload = function () {
//   console.log('hello onload ');
// };

// window.addEventListener('load', function () {
//   console.log('load1');
// });

// window.addEventListener('load', function () {
//   console.log('load2');
// });

// var clickCount = 0;
// function popup(event) {
//   console.log(++clickCount);
//   console.log(arguments, this, event, event.type, event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function () {
//   console.log('click');
// });

var link = document.querySelector('a');
link.addEventListener('click', function (event) {
    window.open('https://www.daum.net');

    event.preventDefault();
});