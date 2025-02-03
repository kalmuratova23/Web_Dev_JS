// // while (condition) {
//body (то что выполняется)}

// let counter = 0
// while(counter < 10){
// counter += 1
// }
//1. Найти сумму четных и нечетных
// let counter = 1
// let sumEven = 0
// while(counter <= 5){
//     let num =+prompt('Enter number')
//     if(num % 2 == 0){
//         sumEven += num
//     }
//     counter += 1
// }
// console.log(sumEven)
 //2. Угадай число (игра) будут 3 попытки, подсказки, интервал с 1 до 10. Если с 3 попыток не найти то , you lose, если угадаем то you win
// let randomNumber = Math.floor(Math.random() *10)
// let answer = 0
// let attept = 0
// let win = false

// while(attept < 3 || answer != randomNumber) {
//     answer = +prompt('Enter guess number:')
//     if(answer > randomNumber){
//         alert('You need enter less number')
//     } else if(answer < randomNumber){
//         alert('You need enter high number')
//     } else if(answer == randomNumber){
//         win = true
//         break
//     }
// attept +=1
// }
// if (win == false){
//     alert('You lose')
// } else{
//     alert('You win')
// }

// //3. validation login
// let username = ""
// let failed = -1
// while(username != 'admin'){
//     username =prompt('Enter username:')
//     failed +=1
// }
// alert('Welcome admin!')
// console.log('Failed attepts: ', failed)
//for
// for(let i = 0; i < 10; i+= 1){
//     console.log(1)
// }
//сделать чтобы hello world вышел 10 раз
// for(let i = 0; i < 10; i+=1){
//    document.write('hello world' + '<br>')
// }
// //сделать так чтобы вышел box 12 раз, подключив css
// for(let i = 0; i < 12; i+=1){
//     document.write('<div class = "box"></div>')
// }
// do {
//     console.log('Do while')
// }while( 20 == 10)

// let number = 58347  //21 результат этих чисел должен быть равен = 27 (5+8+3+4+7)
// let counter = 0
// let sum = 0
// while (number > 0){
//     counter += 1
//   sum += number % 10
//     number = Math.floor(number / 10)
// }
// console.log(counter)
// console.log(sum)
//27 результат этих чисел должен быть равен = 27 (5+8+3+4+7) используя for
// let sum = 0
// for (let number =  58347; number > 0; number = Math.floor(number / 10)){
//     sum += number % 10
// }
// console.log(sum)
// let username = prompt('Enter username:')
// let attepts = 0
// let fail = false

// while (username != 'Akerke') {
//     username == prompt('Please, enter again:')
//     attepts += 1

//     if (attepts === 3) {
//         fail = true
//         document.write(`<h3>FAIL!</h3<`)
//         break
//     }

//     // attepts = attepts + 1 (+= версия сокращенного)
//     //        0 + 1 = 1
//     //       1 + 1 = 2
//     //       2 + 1 = 3

// }
// if (fail == false) {
//     document.write(`<h3>Welcome, Akerke!</h3<`)
// }

// // document.write(`<p> Failed: ${attepts}</p`)


// const brand = +prompt();
// const model = +prompt();
// let car = {
//     brand,
//     model,
// }
// console.log(car.brand, car.model);

// let name = prompt("Введите название книги:"); //test
// let author = prompt("Введите автора книги:"); //testing
// let year = parseInt(prompt("Введите год издания книги:")); //2004
// let book = {
//     name,
//     author,
//     year,
// };
// console.log("Название книги: " + book.name);
// console.log("Автор книги: " + book.author);
// console.log("Год издания книги: " + book.year);



// let school = {
//     name: "BITLAB"
// };
// delete school.name;
// console.log(school.name) //undefined


// const city = { name: "New York" };
// city.name = "San-Francisco";
// console.log(city.name) //San-Francisco


// city.name = prompt();
// console.log(city.name);

// let x = 10;
// let y = x; //10
// y = 20; // y!=x
// console.log(x);

// let car1 = {
//     brand: "Tayota",
//     model: "Camry",
//     start: function() {
//         console.log("Автомобиль заведен");
//     },
//     stop: function() {
//         console.log("Автомобиль заглушен");
//     },
// };
// car1.stop // Автомобиль заглушен