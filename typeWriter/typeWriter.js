const words = [
    'First word in array', 
    'Second word in array',
    'Third word in array'
]
//это у нас будет константа который не будет меняться и будет хранить в себе все слова

//нужно печатать каждую букву по отдельности и нужна очередность. массив начинается с 0
//charTurn - очередьБуквы

let charTurn = 0
let wordTurn = 0
const output = document.getElementById('outText')

// console.log('hello'.substr(0,2)) he
//в функции мы должны печататьс слово
function printWord(){
    if(charTurn <= words[wordTurn].length){
        let str = words[wordTurn].substring(0, charTurn)
        // document.write(words[wordTurn][charTurn])
        output.innerHTML = str
        charTurn += 1
    }
    setTimeout(printWord, 150)

}
