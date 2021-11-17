"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const enteredPassword = prompt("Введите пароль администратора");

if (enteredPassword == null) {
    message = "Отменено пользователем!";
}
else if (enteredPassword === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
}
else {
    message = "Доступ запрещен, неверный пароль!";
}

console.log(message);