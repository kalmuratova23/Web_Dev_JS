// alert('External'); //выводит всплывающее окно
// console.log('message in colsole');

// document.write('<h3>Hello world!</h3>')
// document.write('<hr>Hello world! Again!</h2>')
// document.write('<h3>Hello "my" world!</h3>')

//output - alert, document.write, console.log
//input - prompt()

// var myName = prompt()
// document.write('<h3>Welcome' + myName + '!</h3>')
// document.write(myName)

// var str = "пожалуйста, найдите,  где происходит 'размещение'!";
// var pos = str.lastIndexOf("размещение");

// let text = "Hello, world!";
// let newText = text.replace("world", "friend");
// console.log(newText);

// let spacedText = "Hello world!"
// let newspacedText = spacedText.replace(" ", ",");
// console.log(newspacedText);



// let spacedText = " Hello, Bitlab!";
// let allReplacedText = spacedText.replace(/ /g, " ");
// console.log(allReplacedText);

// var myName = prompt("Enter your name:");
// document.write('<h3> Welcome' + myName + ' !</h3>');


// var myName = prompt()
// document.write('<h3> Welcome ' + myName + '!</h3>')
// document.write('<h3> Welcome ${myName}!</h3> ')

// var myVar = 1234;
// document.write(`<h5>Var: ${myVar}</h5>`);


// let myLet = 1235;

// document.write(`<h5>Let: ${myLet}</h5>`);

// const myConst = 1238;

// document.write(`<h5>Const: ${myConst}</h5>`);


// document.write(`<p>10+20 = ${10+20}</p>`)


// let num1 = prompt('Enter ur number:')
// document.write(`<p>10 + ${num1} = ${10 + num1}</p>`)
// document.write(`<p>140 - ${num1} = ${140 - num1}</p>`)
// document.write(`<p>10 * ${num1} = ${10 * num1}</p>`)
// document.write(`<p>140 / ${num1} = ${140 / num1}</p>`)
// document.write(`<p>140 % ${num1} = ${10 % num1}</p>`)


// let num1 = parseInt(prompt('Enter ur number:'))
// let num1 = parseFloat(prompt('Enter ur number:'))
// let num1 = Number(prompt('Enter ur number:'))
// let num1 = +(prompt('Enter ur number:'))
// document.write(`<p>10 + ${num1} = ${10 + num1}</p>`)
// document.write(`<p>140 - ${num1} = ${140 - num1}</p>`)
// document.write(`<p>10 * ${num1} = ${10 * num1}</p>`)
// document.write(`<p>140 / ${num1} = ${140 / num1}</p>`)
// document.write(`<p>140 % ${num1} = ${10 % num1}</p>`)

// document.write(`<h3> Math Methods </h3>`)
// document.write(`<p>Math.floor(2.9): ${Math.floor(2.9)}</p>`) //уменьшитьДоМеньшего2
// document.write(`<p>Math.ceil(2.1): ${Math.ceil(2.1)}</p>`) //округлениеДоБольшего3
// document.write(`<p>Math.round(2.5): ${Math.round(2.5)}</p>`) //3
// document.write(`<p>Math.random():${Math.random()}</p>`) //рандом, 
// document.write(`<p>Math.random() *100: ${Math.random()* 100}</p>`)

// let username = prompt('Enter username:')
// username = username.toLowerCase()
// if (username == 'world') {
//     document.write(`<h3>Hello, ${username}!!</h3>`)
// } else {
//     document.write('INVALID USERNAME!')
// }


// let randNum1 = Math.floor(Math.random() * 100)
// let randNum2 = Math.floor(Math.random() * 100)
// document.write(`Random Number 1 = ${randNum1}`)
// document.write(`Random Number 2 = ${randNum2}`)
// if (randNum1 > randNum2) {
//     document.write(`Random Number 1 is max`)
// } else {
//     document.write(`Random Number 2 is max`)
// }

// let randNum1 = Math.floor(Math.random() * 100)
// let randNum2 = Math.floor(Math.random() * 100)
// document.write(`Random Number 1 = ${randNum1}`)
// document.write(`Random Number 2 = ${randNum2}`)
// if (randNum1 > randNum2) {
//     document.write(`Random Number 1 is max`)
// } else {
//     document.write(`Random Number 2 is max`)
// }

// let randNum1 = Math.floor(Math.random() * 100)
// let randNum2 = Math.floor(Math.random() * 100)
// document.write(`Random Number 1 = ${randNum1}`)
// document.write(`Random Number 2 = ${randNum2}`)
// if (randNum1 < randNum2) {
//     document.write(`Random Number 1 is min `)
// } else {
//     document.write(`Random Number 2 is min `)
// }
// var findSubstring = function(s, words) {
//     let len = words[0].length;
//     let windowSize = words.length * len;
//     if (s.length < windowSize) {
//         return [];
//     }
//     let m = new Map(),
//         res = [];
//     // Fill Hash table with entry being (word, number of occurrences)    for (let i = 0; i < words.length; i++) {
//     m.set(words[i], m.get(words[i]) + 1 1);
// }
// let start = 0;
// while (start + windowSize - 1 < s.length) {
//     if (isConcat(s, new Map(m), len, start, start + windowSize - 1)) {
//         res.push(start);
//     }
//     start++;
// }
// return res;
// // Let M be the length of s, N be the number of words    // T.C: O(M*N)
// // S.C: O(M*N), new map is used for every iteration};
// const isConcat = (s, m, len, start, end) => {
//     let chars = m.size;
//     for (let i = start; i <= end; i += len) {
//         let substr = s.substring(i, i + len);
//         if (!m.has(substr) m.get(substr) === 0) return false;
//         m.set(substr, m.get(substr) - 1);
//         if (m.get(substr) === 0) {
//             chars--;
//         }
//     }
//     return chars === 0;
//     // if we consider time complexity of substring() to be O(1),    // T.C: O(N)
// }

// if (10 > 20) {
//     document.write(`<p> If 10 > 20 </p>`)
// } else if (21 == 31) {
//     document.write(`<p>else if 21 == 32(1) </p>`)
// } else if ('hello' == 'hello') {
//     document.write(`<p>else if 'hello' == 'hello' (2)</p>`)
// } else if (15 > 2) {
//     document.write(`<p>else if 15 > 2</p`)
// } else {
//     document.write(`<p>else</p>`)
// }

//and-or && ||
let direction = 'left'
if (direction == 'right' || direction == 'left') {
    document.write(`<p> On Right Way</p>`)
} else {
    document.write(`<p>ERROR</p>`)
}

let motiv = true
let knowledge = true
let aim = false
let hardWork = true
let money = true
let success = motiv && knowledge && aim && hardwork && money
if (success) {
    document.write('<h2>Your Success!</h2>')
} else {
    document.write('<h2>Your Fail!</h2>')
}