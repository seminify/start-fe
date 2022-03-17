console.log('03');

// 객체
// var person = {
//     nick: 'FE',
//     age: 28,
//     area: 'jeju',
//     hobby: ['js', 'html'],
// };

// 기본 프로퍼티, 메소드
// // constructor: 생성자 함수를 가르킴
// obj.constructor == Object; // true

// // hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지 검사
// console.log(obj.hasOwnProperty('nick'));

// // toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
// alert(obj); // alert(obj.toString())

// console.log(window); // 브라우저 가장 최상위 객체
// var date = new Date();
// Math.floor(1.4); // static
// var patten = new RegExp('^abc'); // 패턴매칭

// Array

// var arr = [1, 2, 3];

// // new Array() 비권장( 모호하다)
// var arr = new Array(1, 2, 3); // [1,2,3]
// var arr = new Array(3); // []  // [], arr.lenght=3
// console.log(arr.length); //3

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// pop

// var words = ['a', 'b', 'c'];
// console.log(words.pop());

// psuh

// var words = ['a', 'b', 'c'];
// words.push('d');
// console.log(words);

// join

// var words = ['a', 'b', 'c'];
// console.log(words.join('&'))

// concat

// var words = ['a', 'b', 'c'];
// var numbers = [1, 2, 3];
// console.log(words.concat(numbers));

// unshift

// var words = ['a', 'b', 'c'];
// console.log(words.unshift('z'));
// console.log(words);

// shift

// var words = ['a', 'b', 'c'];
// console.log(words.shift());
// console.log(words);

// splice

// var words = ['a', 'b', 'c'];
// console.log(words.splice(0, 1));
// console.log(words);

// slice

// var words = ['a', 'b', 'c'];
// console.log(words.slice(2));
// console.log(words.slice(0, 1));
// console.log(words);

// forEach

// var words = ['a', 'b', 'c'];
// words.forEach(function (word) {
//     console.log(word);
// });

// map

// var words = ['a', 'b', 'c'];
// var newWords = words.map(function (word) {
//     return word + ' ok';
// });
// console.log(newWords);

// reverse

// var words = ['a', 'b', 'c'];
// console.log(words.reverse());

// sort

// var words = ['c', 'b', 'a'];
// console.log(words.sort());

// findIndex

// var words = ['a', 'b', 'c'];
// var findIndex = words.findIndex(function (word) {
//     return word === 'a';
// });
// console.log(findIndex);

// every

// var numbers = [1, 2, 3];
// var isCheck = numbers.every(function (number) {
//     return number < 3;
// });
// console.log(isCheck);

// some

// var numbers = [1, 2, 3];
// var isCheck = numbers.some(function (number) {
//     return number < 3;
// });
// console.log(isCheck);

// filter

// var words = ['a', 'b', 'c', 'dd'];
// var newWords = words.filter(function (word) {
//     return word.length === 2;
// });
// console.log(newWords);

// 동적 타이핑

// var foo = 42;
// var foo = "bar";
// var foo = true;

// if ("true") {
//     console.log("true");
// }

// var isMan = true;
// if (isMan) {
//     console.log('test');
// }

// 값 value

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// 참조

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);

// call by value

// function byValue(count) {
//     count = count + 2;
// }

// var count = 3;
// byValue(count);
// console.log(count);

// call by reference

// function byReference(count) {
//     count.push('2');
// }

// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

// var isMan = true;
// var gender = ''
// if (isMan) {
//     gender = '남자'
// } else {
//     gender = '여자';
// }

// var isMan = true;
// var gender = isMan ? '남자' : '여자'; // 삼항 연산자

// for (var count = 0; count < 5; count++) {
//     // 총 5번 실행
// }

// var obj = { a: 1, b: 2 };

// 느리다.비권장
// for (var prop in obj) {
//     console.log(prop, obj[prop]);
// }

// function log(str) {
//     console.log(str);
// }

// log('hello');

// var isClosed = true;
// while (isClosed) {
//     // 반복코드

//     // false로 만들어서 루프종료
//     isClosed = false;
//     break;
// }

// function sum(x) {
//     var y = 1;
//     return x + y;
// }

// var sum = function () {
//     var y = 1;
//     return x + y;
// }

// try {
//     // 이부분 실행시 예외발생할경우 catch 로 이동
// }

// catch (e) {
//     // 예외발생할 경우만 실행
// }

// finally {
//     // 무조건 실행
// }

// var isDelete = confirm('삭제하시겠습니까?');
// if (isDelete) {
//     // .....
// }


// if (confirm('삭제하시겠습니까?')) {
//     // .....
// }

// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1'); // 숫자 여부

// parseInt('12');
// parseInt('09', 10); // 항상 두번째 인자 주는 습관
// parseFloat('10.33');

// function test() {
//     console.log('test()');
// }

// var id = setTimeout(test, 1000); // 1초후 1번실행

// var id = setInterval(test, 1000); // 1초마다 계속 실행

// function a() {
//     console.log('a');
//     function b() { }
// }

// var a = 2;

// 즉시실행함수
//     (function () {
//         var a = 1;
//         console.log(a);
//     })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
// }
// sum(3);

// var text = 'abc def ghi jkl abc def';
// var testReg = /1@/;
// var result = testReg.test(text);
// console.log(result);

// setInterval 보다 나은 방법
// function test() {
//     console.log('test()');
//     setTimeout(test, 1000);
// }

// clearTimeout(id);
// clearInterval(id);

// 유효범위

// var nick = 'aji'; // 전역변수

// function test() {
//     var age = 30; // 지역변수
//     console.log(nick, age);
// }

// test();
// console.log(age);

// 호이스팅

// var name = 'global';
// function test() {
//     console.log(name);
//     var name = 'local';
//     console.log(name);
// }

// // 함수또한
// test2();
// function test2() {
//     console.log('test');
// }

// 일반 함수

// function sum(a, b) {
//     return a + b;
// }
// sum(1, 3);

// 멤버 변수

// var car = {
//     year: '2014',
//     starting: function () {
//         console.log('starting..');
//     },
// };

// car.starting();

// 생략 가능한 전달인자

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
// }
// sum(3);

// function sum() {
//     var size = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         size += arguments[i];
//     }

//     console.log(size);
// }

// sum(1, 2, 3, 4, 5, 6, 7);

// .test()

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true

// .match()

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var matchReg = /abc/; // 찾을 문자열
// var result = text.match(matchReg);

// console.log(result); // ["abc", index: 0, input: "abc def ghi jkl abc def"]

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var replaceReg = /def/; // 찾을 문자열
// var result = text.replace(replaceReg, '가나다');

// console.log(result); // 'abc 가나다 ghi jkl abc def'

// function area1(width, height) {
//     console.log(width * height);
// }

// area1(2, 3);

// function area2(options) {
//     console.log(options.width * options.height);
// }

// area2({ width: 300, height: 200 });

// var str = 'jeju';
// console.log(str.substring(0, 2)); // String 래퍼객체로 자동변환

// var str = new String('jeju');
// console.log(str + ' jeju');

// // call by value
// function byValue(count) {
//     count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count); //3

// // call by reference
// function byReference(count) {
//     count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

// var example = (function () {
//     var i = 1;
//     return function () {
//         alert(i++);
//     };
// })();

// example();

// var list = document.getElementsByTagName('li');

// for (var i = 0; i < list.length; i++) {
//     list[i].onclick = function () {
//         alert(i + 1);
//     };
// }

// class CRUD {
//     constructor(todos) {
//         this.todos = [todos];
//     }
//     create(todo) {
//         this.todos.push(todo);
//         console.log(this.todos);
//     }
//     read() {
//         this.todos.forEach(function (todo) {
//             console.log(todo);
//         });
//     }
//     update(existingTodo, updateTodo) {
//         this.todos = this.todos.map(function (todo) {
//             if (todo == existingTodo) {
//                 return updateTodo;
//             }
//             return todo;
//         });
//         console.log(this.todos);
//     }
//     delete(deleteTodo) {
//         this.todos = this.todos.filter(function (todo) {
//             return todo != deleteTodo;
//         });
//         console.log(this.todos);
//     }
// }

// const todos = new CRUD('ㄱㄱ');
// todos.create('ㄴㄴ');
// todos.read();
// todos.update('ㄱㄱ', 'ㄷㄷ');
// todos.delete('ㄴㄴ');