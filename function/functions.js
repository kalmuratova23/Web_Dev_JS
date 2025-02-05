// function functionName(params1, params2 ){
//     body
// }

// let arrowFunction = (params) => {
//     body
// }
// test('Bota')
// function test(name){
//     console.log('Function call', name)
// }
// test('Erke')

// arrowFunction()
// let arrowFunction = () =>{
//     console.log('Arrow function call')
// }
// arrowFunction()


// function printArray(arr){
//     for (let item of arr){
//         console.log(item)
//     }
// }

// let arr = [1,2,3,88,909]
// let arr1 = [1,209,3,88,77]
// let arr2 = [1,2,367,88,109]
// let arr3 = [1,232,3,8,10]
// let arr4 = [1,22,334,848,19]

// printArray(arr)
// console.log('-----')
// printArray(arr1)
// console.log('-----')
// printArray(arr2)
// console.log('-----')
// printArray(arr3)
// console.log('-----')
// printArray(arr4)


//task-8 Вывести на сайте целые блоки, и сделать так картинка и снизу описание

// function imgOut(){
//     let content = [
//     {
//         imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
//         imgTitle: 'Profile 1'
//     },
//     {
//         imgSrc: 'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
//         imgTitle: 'Profile 2'
//     }
//     ,
//     {
//         imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
//         imgTitle: 'Profile 3'
//     }
//     ,
//     {
//         imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg',
//         imgTitle: 'Profile 4'
//     },
// ]


// let output = '<div class = "wrap>'
// for(let item of content) {
//     output +=  `
//         <div class = "profile-item">
//         <img src = "${item.imgSrc}"
//         <h3>${item.imgTitle}</h3>
//         </div>`
// }
// output += '</div>'
// document.getElementById('outContent').innerHTML = output
    
// }


//task-4
// function sum(n1, n2){
//  return n1 + n2
// }
// let result = sum(20, 45)

// console.log(result)

// function printMsg(name){
//     return `Welcome ${name} to our class!`
// }
// console.log(printMsg('Erke'))


//Локальные переменные и глобальные переменные
// let globVar = 20
// function testLocal(){
//     let localVar = 10
//     globVar = 30
//     console.log('In local function' ,globVar)
//     console.log('In local function' ,localVar)
// }
// testLocal()


// const user = {
//     name: "Tom",
//     age: 26,
//     "full name": "Tom Johns",
//     "display info": function(){
     
//         console.log(user.name);
//         console.log(user.age);
//     }
// };
// console.log(user["full name"]);
// user["display info"]();



// function createObject(propName, propValue){
//     return {
//             [propName]: propValue,
//             print(){ 
//                 console.log(`${propName}: ${propValue}`);
//             }
//     };
// }
// const person = createObject("name", "Tom");
// person.print();     // name: Tom
 
// const book = createObject("title", "JavaScript Reference");
// book.print();   // title: JavaScript Reference



//Создание объекта из переменных и констант
// function getSalary(status){
//     if(status==="senior") return 1500;
//     else return 500;
// }
// const name = "Tom";
// const age = 37;
// const person = { name: name, age: age, salary: getSalary()};
 
// console.log(person); 


//передача функций методам объекта
// function display(){ 
//     console.log(this.name, this.age);
// }
// const move = function(place){ console.log(this.name, "goes to", place)};
// const name = "Tom";
// const age = 37;
// const salary = 500;
// const person = { name, age, salary, display, move};
 
// person.display();       // Tom 37
// person.move("cinema"); 



//Фукция Object.fromEntries()
// const personData = [ ["name", "Tom"], ["age", 37]];
// const person = Object.fromEntries(personData);
// console.log(person);        // {name: "Tom", age: 37}
// console.log(person.name);    // Tom

// const people = [["Tom", 39], ["Sam", 28],["Bob", 42]];
// for(let i=0; i < 3; i++){   // перебираем двухмерный массив
 
//     for(let j=0; j < 2; j++){ // перебираем вложенные массивы
     
//         console.log(people[i][j]);
//     }
//     console.log("=================");   // для разделения элементов
// }

//function expression
// const message = function(){
//     console.log("Hello JS");
//     }
//     message();


//     function sum(a, b, c){
//         console.log("a =", a);
//         console.log("b =", b);
//         console.log("c =", c);
     
//         let result = 0;
//         for(const n of arguments)
//             result += n;
//         console.log("result =", result);
//     }
//     sum(6, 4, 5, 8)     


    // function print(){
 
    //     var a = 5;
    //     let b = 8;
    //     const c = 9;
    //     console.log("Function print: a =", a);
    //     console.log("Function print: b =", b);
    //     console.log("Function print: c =", c);
    // }
    // print();
    // console.log("Global: a =", a);  



//замыкание

//  function outer(){
//     let x = 5;
//     function inner(){
//         x++;
//         console.log(x);
//     };
//     return inner;
// }
// const fn = outer(); // fn = inner, так как функция outer возвращает функцию inner
// // вызываем внутреннюю функцию inner
// fn();   // 6
// fn();   // 7
// fn();   // 8

//throw
// function asyncFunction() {
//     let result;
//     setTimeout(()=>{
//         result = 22;
//         if(result < 50) { 
//             throw new Error("Некорректное значение");      
//         } 
//     }, 1000);
//     return result;
// }
// try {  
//     const asyncResult = asyncFunction();
//     console.log("result:", asyncResult)
// } 
// catch(error) {  
//     console.error("Error:", error); // Эта строка НЕ выполняется
// }
// console.log("Конец программы");



//globalVar-localVar

// let globVar = 20;
// function testLocal(){
//     let localVar = 10;
//     globVar = 50;
// console.log( 'In local function',globVar)
// console.log( 'In local function',localVar)
// }
// console.log('Before function', globVar)
// testLocal()
// console.log('After function', globVar)

//async/sync

// async function printFirst(){
//     setTimeout(function(){
//         console.log('First Print')
//     }, 4000)

// }
// function printSecond(){
//     console.log('Second Print');
// }
// function printThird(){
//     console.log('Third Print');
// }
// setTimeout(printFirst, 2000)
// printSecond();
// printThird();

//async
// async function printFourth(){
//     await printFirst()
//     printSecond();
//     printThird();

// }
// printFourth()

//throw->callback
// function handleResult(error, result){    
//     if(error) {     // если передана ошибка 
//         console.error(error);   
//     }  
//     else {     // если асинхронная функция завершилась успешно
//         console.log("Result:", result);    
//     }  
// }
 
// function asyncFunction(callback) {
//     setTimeout(()=>{
//         let result = Math.floor(Math.random() * 100) + 1;
//         if(result < 50) { 
//             // если меньше 50, устанавливаем ошибку
//             callback(new Error("Некорректное значение: " + result), null);      
//         } 
//         else{
//             // в остальных случаях устанавливаем результат
//             callback(null, result);
//         }
//     }, 1000);
// }
// asyncFunction(handleResult);

//promise
// const myPromise3000 = new Promise(function(){
//     console.log("[myPromise3000] Выполнение асинхронной операции");
//     setTimeout(()=>console.log("[myPromise3000] Завершение асинхронной операции"), 3000);
// });
// const myPromise1000 = new Promise(function(){
//     console.log("[myPromise1000] Выполнение асинхронной операции");
//     setTimeout(()=>console.log("[myPromise1000] Завершение асинхронной операции"), 1000);
// });
// const myPromise2000 = new Promise(function(){
//     console.log("[myPromise2000] Выполнение асинхронной операции");
//     setTimeout(()=>console.log("[myPromise2000] Завершение асинхронной операции"), 2000);
// });




//resolve + reject
// const x = 4;
// const y = 0;
// const myPromise = new Promise(function(resolve, reject){
 
//     if(y === 0) {
//         reject("Переданы некорректные данные");
//     }
//     else{
//         const z = x / y;
//         resolve(z);
//     }
// });

function printWord(){
    if(charTurn <= words[wordTurn].length){
        let str = words[wordTurn].substring(0, charTurn)
        output.innerHTML = str
        charTurn += 1

        setTimeout(printWord, 150)
    } else{
        // wordTurn += 1
        // charTurn = 0
        // if(wordTurn >= wordTurn.length){
        //     wordTurn = 0
        // }
        setTimeout(deleteWord, 150)
    }
}
function deleteWord(){
    if(charTurn >= 0){
        let str = words[wordTurn].substring(0,charTurn)
        output.innerHTML = str
        charTurn -= 1
        setTimeout(deleteWord, 10)
    } else{
        wordTurn += 1
        if(wordTurn >= words.length){
            wordTurn = 0
        }
        setTimeout(printWord, 150)
    }
}
