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


/*7) Почистить консоль логи и добавить недостающие, должны остаться:

 - вызовы функции showTypeOf

 - Расходы за месяц вызов getExpensesMonth

 - Вывод возможных расходов в виде массива (addExpenses)

 - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 

 - Бюджет на день (budgetDay)*/

 


let deposit = confirm ('Есть ли у вас депозит в банке (если да, нажмите "OK")?');
let mission = 1000000;//не было заданием спросить у пользователя, поэтому так и оставим
let period = 12;
const showTypeOf = function(variable){
    console.log('Тип переменной, которая хранит ' + variable + ' - ' + typeof (variable)); 
};

showTypeOf(money);
showTypeOf(income); 
showTypeOf(deposit); 

console.log('Период равен ' + period + ' мес. \nЦель заработать ' + mission + ' р.');

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));  

//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех (ВСЕХ, Карл!) обязательных расходов за месяц
function getExpensesMonth(expense) {
    let indexOfSeparator = expense.lastIndexOf(',', expense.length);
    
    if (expense.lastIndexOf(',', expense.length) < 0) {
      return +prompt('Во сколько обходится (обходятся) ' + (expense.substr(indexOfSeparator + 1, expense.length)).trim().toLowerCase() + '?');
      // проверку на дурака (не число) не делал, может исправлять придется
    } else {
        let amount = +prompt('Во сколько обходится (обходятся) ' + (expense.substr(indexOfSeparator + 1, expense.length)).trim().toLowerCase() + '?')
        return amount + getExpensesMonth(expense.substr(0, indexOfSeparator)); 
    }// если использовать addExpenses уже приведенную к неижнему регистру, то после трим тулоуэркейс не нужен
  } //Почти красивая реккурсия))), но не чистая...

// также можно вводить и доходы, если бы не отдельные переменные...

//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

const getAccumulatedMonth = function(incomes, expenses){
    return incomes - expenses;
};

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth (money, getExpensesMonth(addExpenses));
console.log('Месячный бюджет: ' + accumulatedMonth + ' р.');

//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

const getTargetMonth = function(target, budget){
    return Math.ceil(target/budget);
};

console.log(getTargetMonth(mission, accumulatedMonth) > 0 ? 'Цель будет достигнута через ' + getTargetMonth(mission, accumulatedMonth) + ' мес.' : 'Цель недостижима...');

//5) Удалить из кода переменную budgetMonth
//6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log((budgetDay >= 0 ? 'Дневной бюджет: ' : 'Ежедневный долг: ') + budgetDay + ' р.');

//- вызов функции getStatusIncome 

const getStatusIncome = function(budget){
    if (budget > 1200) { //У Макса в примере более красивое сравнение, но я уже не списывал...
        return 'У Вас высокий уровень дохода';
    } else if ((budget <= 1200) && (budget > 600)) {
        return 'У Вас средний уровень дохода';
    } else if ((budget <= 600) && (budget > 0)) {
        return 'К сожалению, у Вас уровень дохода ниже среднего';
    } else { 
        return 'Что-то пошло не так...';
    }
    
}
console.log(getStatusIncome(budgetDay));

