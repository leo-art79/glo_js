let money = 500; // усiм папиццот!))
let income = 'ремонты';
let addExpenses = 'Коммуналка, Интернет, Телефоны, Обслуживание авто, Обучение ребенка, ЕДА';
let deposit = false; //подсмотрел назначение в следующем задании
let mission = 10000;
let period = 12;

console.log('Тип money: ' + typeof (money)); 
console.log('Тип income: ' + typeof (income)); 
console.log('Тип deposit: ' + typeof (deposit)); 
console.log('Длина строки addExpenses: ' + addExpenses.length + ' симв.'); // сокращал чтоб не морочиться с окончаниями)))
console.log('Период равен ' + period + ' мес. \nЦель заработать $' + mission);

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', '); 
console.log(addExpenses); // если исходную строку менять не нужно,s то console.log(addExpenses.toLowerCase().split(', ')); 

let budgetDay = money / 30;
console.log('Дневной бюджет: $' + budgetDay.toFixed(2));