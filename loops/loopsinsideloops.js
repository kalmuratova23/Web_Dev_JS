//цикл внутри цикла
// let str = ''
// for(let i = 0; i < 5; i++){
//     for(j = 0; j < 5; j++){
//         str += 1
//     }
//     str += '\n'
// }
// console.log(str)

//star
// let str = ''
// for(let i = 1; i <= 6; i++){    //строка
//     for(let k = 6 ; k >= i; k--){   //пробелы
//         str += '  '
//     }
//     for(let j = 1; j <= 2* i - 1; j++) {   //звездочки
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str)

// let str = ''
// for(let i = 7; i >= 1; i--){    //строка
//     for(let k = 7 ; k >= i; k--){   //пробелы
//         str += '  '
//     }
//     for(let j = 1; j <= 2* i - 1; j++) {   //звездочки
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str)

//2вс3
let input = '2D3C'
let str = ''
for(let i = 0; i < input.length; i++){
    if(i % 2 == 0){
        for(let j = 0; j < Number(input[i]); j++){
            console.log(i % 2, Number(input[i]))
            str += input[i + 1]
        }
        str += '\n'
    }

}
console.log(str)
// console.log(input[2] % 2)