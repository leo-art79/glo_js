let money = +prompt('Ваш месячный доход (р.):', '100000'); 
//проверим, число ли?
while (!money) {
    alert('Введены некорректные данные! Введите число!')
    money = +prompt('Ваш месячный доход (р.):', '100000');
}
let income = 'ремонты';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуальные платежи, еда, другое');
//если нажата "отмена", считаем, что расходов нет... Далее проверки не делал, т.к. они похожи (да и в задании не сказано) 
if (!addExpenses) {
    addExpenses = '';
}
let deposit = confirm ('Есть ли у вас депозит в банке (если да, нажмите "OK")?');
let mission = 1000000;//не было заданием спросить у пользователя, поэтому так и оставим
let period = 12;


console.log('Тип money: ' + typeof (money)); 
console.log('Тип income: ' + typeof (income)); 
console.log('Тип deposit: ' + typeof (deposit)); 
console.log('Длина строки addExpenses: ' + addExpenses.length + ' симв.'); // сокращал чтоб не морочиться с окончаниями)))
console.log('Период равен ' + period + ' мес. \nЦель заработать ' + mission + ' р.');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', '); 
console.log(addExpenses);  

//просили задать каждый вопрос дважды:
let expenses1 = prompt('Введите обязательную статью расходов?', 'Еда');
let amount1 = +prompt('Во сколько это обойдется?', '15000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Коммунальные платежи');
let amount2 = +prompt('Во сколько это обойдется?', '2000');

//Вычислить бюджет на месяц, учитывая обязательные расходы
let budgetMonth = money - (amount1 + amount2);
console.log('Месячный бюджет: ' + budgetMonth + ' р.');

//посчитать за сколько месяцев будет достигнута цель mission
period = Math.ceil(mission/budgetMonth);
console.log(period > 0 ? 'Цель будет достигнута через ' + period + ' мес.' : 'Цель недостижима...');

//Поправить budgetDay учитывая бюджет на месяц
let budgetDay = Math.floor(budgetMonth / 30);
console.log((budgetDay > 0 ? 'Дневной бюджет: ' : 'Ежедневный долг: ') + budgetDay + ' р.');

//Написать конструкцию условий
if (budgetDay > 1200) {
    console.log('У Вас высокий уровень дохода');
} else if ((budgetDay <= 1200) && (budgetDay > 600)) {
    console.log('У Вас средний уровень дохода');
} else if ((budgetDay <= 600) && (budgetDay > 0)) {
    console.log('К сожалению, у Вас уровень дохода ниже среднего');
} else { 
    console.log('Что-то пошло не так...')
}