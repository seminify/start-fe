/*
 * 
 * 02 주차 실습
 * 
 */

// 변수

var name = 'FE';
var age = 28;
var message = 'hello' + name;
console.log(message);

var name = 'aj';
console.log(name);

// 주석

// 댓글갯수
var commentCount = 20;
/*
 * 동적으로 호출한 콘텐츠를 넣어줌
 * @author FE
 */
// document.getElementById('wrap').innerHTML = content;

// 데이터 타입

// Number

var count = 5;

// String

var nick = "my nick is 'fe'";
var homepage = 'www.kakaocorp.com';

// Boolean

var isMan = true; // true | false
console.log(nick == '');
console.log(!!'test');

var isMan = 'true';
var isMan1 = true;

console.log(isMan);
console.log(isMan1);

// Function

var log = function (str) {
    console.log(str);
}
function log(str) {
    console.log(str);
}
log('hello');

// Object

var image = {};

image.width = 1;
image.height = 2;

image['width'] = 1;
image['name' + i] = '1.jpg';
image = { width: 1, height: 2 };

var img = {};
img.width = 100;
img.height = 200;
console.log(img);

// Array

image = []; // new Array();
image[0] = '1.jpg';
image[1] = '2.jpg';
image = ['1.jpg', 2, { name: '3.jpg' }];

var arr = [1, 2, 3, 4, 5];
console.log(arr);

// null

var nick = null;

// undefined

var nick; // undefined

// 주요 연산자

// +

console.log(1 + 2); // 3
console.log('a' + 'b'); // "ab"
console.log(1 + '4'); // "14"

// 동등, 일치

'' == '0'; // false
0 == ''; // true
0 == '0'; //true
false == 'false'; // false
false == '0'; // true
false == undefined; // false
false == null; // false
null == undefined; // true
'\t\r\n' == 0; // true

// 논리곱 - and

// if (isHero && isHulk) {
//     // 둘다 참일경우 실행
// }

// 논리합 - or

// if (isHero || isHulk) {
//     // 하나라도 참일경우 실행
// }

// 논리부정 - !

// if (!isHero) {
//     // 영웅이 아니라면
// }

// in

var image = { width: 1, height: 2 };
console.log('width' in image); // true
console.log('size' in image);
console.log('toString' in image);

// delete

delete image.width;
image.width = null; // value만 지우고 프로퍼티는 남겨둠

// typeof

console.log(typeof (1 + '4'));
typeof foo !== 'undefined';

// instanceof

var arr = [1, 2, 3];
// console.log(a instanceof Array); // true

console.log(1 + 1);
console.log(name + ' hello');

// 객체

var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
};

var me = {
    age: 11,
    name: 'aj',
    isMan: true,
    sayHello: function () {
        console.log('hello');
    },
};
me.sayHello();

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var article = {
    title: '제목1',
    url: 'www.naver.com',
}

var articles = [article];
console.log(articles);

var todos = ['운동'];

var todo = '게임';
todos.push(todo);

console.log(todos)

todos.forEach(function (todo) {
    console.log(todo);
})

var updateTodo = '게임';
var updateIndex = todos.findIndex(function (todo) {
    return todo == updateTodo;
})
console.log(updateIndex);
todos[updateIndex] = '공부';
console.log(todos);

var deleteTodo = '공부';
var newTodos = todos.filter(function (todo) {
    return todo != deleteTodo;
})

console.log(newTodos);