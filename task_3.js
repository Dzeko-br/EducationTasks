/*
Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
*/

const path = "/users/download/index.html"

const isHtml = (path) => {
    let needStr = '.html';
    let sliceStr = path.slice(-5);//.html

    return sliceStr == needStr ? true : false
}

// isHtml(path)
alert(isHtml(path));

//codepen https://codepen.io/foontik/pen/dyNBLbV