/*
Сформировать произвольный массив объектов, описывающий, например, работников компании, 
в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) 
и поле salary (содержащее зарплату сотрудника от 0 до 3000). 
Сформировать функцию в которую будет передан в качестве аргумента 
этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.
*/

const workers = [
    { "name": "Иванов", "salary": 500 },
    { "name": "Петров", "salary": 1300 },
    { "name": "Сморнов", "salary": 1500 },
    { "name": "Сидоров", "salary": 1700 }
];

function getWorthyWorkers(arFilter) {
    const newArray = [];
    for (const el of arFilter) {
        if (el.salary > 1000) {
            newArray.push(el.name)
        }
    }
    return newArray
}

console.log(getWorthyWorkers(workers));
// codepen https://codepen.io/foontik/pen/PoWrLMd


