"use strict";

let input;
let total = 0;

do {
    input = (prompt("Введите число для выполнения операции сложения"));
    if (isNaN(input)) {
        alert("Было введено не число, попробуйте еще раз");
    }
    else {
        total += Number(input);
        console.log(total);
    }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
