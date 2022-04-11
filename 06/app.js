// let team = "FE";
// const area = "jeju";
// var cp = "ssully";
// var url = "https://1boon.kakao.com/" + cp;
// const url = `https://1boon.kakao.com/${cp}`;
// console.log(url);
// function multiply(a, b = 1) {
//   return a * b;
// }
// [1, 2, 3].map((item) => item * 2);
// btn.addEventListener("click", (event) => {
//   console.log("click");
// });
// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// const words = ['a', 'b'];
// const newWords = [...words];
// console.log(newWords);
// const arr1 = [3, 4, 5];
// const arr2 = [1, 2, ...arr1, 6, 7];
// console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]
// const obj = {
//   a: 1,
//   b: 2,
// };
// const newObj = { ...obj };
// console.log(newObj);
// //es5
// var team = obj.team;
// var area = obj.area;
// var col1 = cols[0];
// var col2 = cols[1];
// //es6
// const { team, area } = obj;
// const [col1, col2] = cols;
// const [, cols2] = cols;
// // es5
// function getArea(options) {
//   return options.width * options.height;
// }
// // es6
// function getArea({ width, height }) {
//   return width * height;
// }
// const number = 1234;
// const student = {
//   // number: number
//   number,
// };
// const student = {
//   number,
//   // playGame:function(){
//   // },
//   playGame() {
//     console.log('play');
//   },
// };
// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('foo');
//   }, 300);
// });
function* test() {
    for (var i = 0; i < 3; i++) {
        yield i;
    }
}

var genFunc = test();
console.log(genFunc.next()); // {value: 0, done: false}
console.log(genFunc.next()); // {value: 1, done: false}
console.log(genFunc.next()); // {value: 2, done: false}
console.log(genFunc.next()); // {value: undefined, done: true}
console.log(genFunc.next()); // {value: undefined, done: true}