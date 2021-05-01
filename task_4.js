/*
Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. 
Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, 
создайте из готового массива новый, который будет содержать только четные числа.
Результат выведите в консоль.
*/

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 === 0 ? true : false
}

function filterArray(mixedArray, checkFn) {
    const newArr = [];

    mixedArray.forEach(arElem => {
        if (checkFn(arElem)) {
            newArr.push(arElem)
        }
    });

    return newArr
}

// filterArray(mixedArray, isEven);
console.log(filterArray(mixedArray, isEven));

//codepen https://codepen.io/foontik/pen/bGgPJbz