"use strict";

const country = prompt("Введите страну назначения для доставки товара");
const countryNormalized = country.toUpperCase();
let cost;

switch (countryNormalized) {
    case "КИТАЙ":
        cost = 100;
        break;
    case "ЧИЛИ":
        cost = 250;
        break;
    case "АВСТРАЛИЯ":
        cost = 170;
        break;
    case "ИНДИЯ":
        cost = 80;
        break;
    case "ЯМАЙКА":
        cost = 120;
        break;       
}

if (cost == undefined) {
    console.log("В вашей стране доставка не доступна.");
}
else {
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
}