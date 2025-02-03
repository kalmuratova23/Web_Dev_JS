// let num = prompt('Enter your number:')
// if (num == 1) {
//     document.write('Thumb finger')
// }
// if (num == 2) {
//     document.write('Pointer finger')
// }
// if (num == 3) {
//     document.write('Middle finger')
// }
// if (num == 4) {
//     document.write('Ring finger')
// }
// if (num == 5) {
//     document.write('Little finger')
// } else {
//     document.write('Error')
// }
// let a = 1

// const myString = "Нефтеперегоньевск";


// console.log(myString[0]); // Выведет "Н" - первый символ

// console.log(myString[1 + a]); // Выведет "ф" - символ с индексом 2

// console.log(myString[-1]); // Выведет: undefined - отрицательный индекс не допустим

// console.log(myString[20]) // Выведет: undefined - символа с индексом 20 не существует

// console.log(myString[myString.length - 1]); // Выведет "к" - последний символ

// let b = 2
// const myString = "Казахстан";
// console.log(myString[0]); //K
// console.log(myString[1 + b]); //1+2=3 A
// console.log(myString[-1]); //undefined - отрицательный индекс не допустим
// console.log(myString[15]); //undefined - символа с индексом 15 не существует
// console.log(myString[8]); //н - 8-й символ н
// console.log(myString[myString.length - 1]); //к - последний символ

// //после созданий строки - нельзя изменить !change
// let myMessage = "Hello";
// myMessage[0] = "L"; //это не изменит строку, останется Hello


// //replace
// // const newString = myString.replace("H", "W"); // Создает новую строку "Wello"

// console.log(myString); // Выведет: "Hello", значение myString не изменилось

// console.log(newString); // Выведет: "Wello"

// const newMessage = myMessage.replace("H", "W") //создает новую строку "Wello"
// console.log(newMessage) // hello, значение myMessage не изменилось
// console.log(newMessage) //Wello



// const text = "Истина парадоксальна"; 
// let vowelCount = 0; 
// for (let i = 0; i < text.length; i++) { 
//   let char = text[i].toLowerCase()   
//   if (char === "а" || char === "е" || char === "и" || char === "о" || char === "у" || char === "э" 
// || char === "ю" || char === "я") {     
//     vowelCount++;   
//    } 
// } 

// console.log(vowelCount);

// const message = "Истина парадоксальна";
// let vowelCount = 0;
// for (let i = 0; i < message.length; i++) {
//     let char = message[i].toLowerCase();
//     if (char === "а" || char === "е" || char === "и" || char === "о" || char === "у" || char === "э" || char === "ю" || char === "я") {
//         vowelCount++;
//     }
//     console.log(vowelCount);
// }

//isNaN() -- not a number - проверяют является ли значение не числом
console.log(isNaN(42)); //false,42 - число
console.log(isNaN("hello")) //true, hello - не является числом