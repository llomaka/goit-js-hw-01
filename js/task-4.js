"use strict";

let credits = 23580;
let pricePerDroid = 3000;
const ordered = prompt("Введите количество дроидов для приобретения");
let message;
let totalPrice;

if (ordered == null) {
    message = "Отменено пользователем!";
}
else {
    totalPrice = ordered * pricePerDroid;
    if (totalPrice > credits) {
        message = "Недостаточно средств на счету!";
    }
    else {
        credits -= totalPrice;
        message = `Вы купили ${ordered} дроидов, на счету осталось ${credits} кредитов.`;
    }
}
console.log(message);