/*
Создать переменную со строковым значением. 
Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. 
Результат вывести в консоль.
*/

const string = 'Привет! Как дела?';
const needWords = ['а', 'я', 'у', 'ю', 'о', 'ё', 'е', 'э', 'и', 'ы'];

function getVowels(str) {
    let strNeed = '';
    let strLow = str.toLowerCase();

    for (let i = 0; i < strLow.length; i++) {
        const word = strLow[i];
        //indexof не сработал
        if (needWords.includes(word)) {
            strNeed += word
        }
    }
    return strNeed;
}

console.log(getVowels(string))

// link codepen https://codepen.io/foontik/pen/NWdZJwB
