let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite (n);
};

let money;
let income = 'ремонты';


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'кино, теАтр');
let deposit = confirm ('Есть ли у вас депозит в банке (если да, нажмите "OK")?');
let mission = 1000000;//не было заданием спросить у пользователя, поэтому так и оставим
let period = 12;
//переписать с do..while
let start = function() {
    do {
        money = +prompt('Ваш месячный доход (р.):', '100000'); // упрощает проверку на мой взгляд
        //при таком вводе в условие цикла достаточно написать !money без использования дополнительной функции
        // в констекте поставленной задачи
        if (!isNumber(money)){
            alert('Введены некорректные данные! Введите число!');
        }
    } while (!isNumber(money));
    //нет проверки, если пользователь использовал в качестве разделителя вместо точки запятую,
    //хотя у Макса возможно это тоже не реализовано... 
};

start();
const showTypeOf = function(variable){
    console.log('Тип переменной, которая хранит ' + variable + ' - ' + typeof (variable)); 
};

showTypeOf(money);
showTypeOf(income); 
showTypeOf(deposit); 

console.log('Период равен ' + period + ' мес. \nЦель заработать ' + mission + ' р.');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(addExpenses);  

//1) Объявить функцию getExpensesMonth. 
/* эта функция не катит...
function getExpensesMonth(expense) {
    let indexOfSeparator = expense.lastIndexOf(',', expense.length);
    
    if (expense.lastIndexOf(',', expense.length) < 0) {
      return +prompt('Во сколько обходится (обходятся) ' + (expense.substr(indexOfSeparator + 1, expense.length)).trim().toLowerCase() + '?');
      // проверку на дурака (не число) не делал, может исправлять придется
    } else {
        let amount = +prompt('Во сколько обходится (обходятся) ' + (expense.substr(indexOfSeparator + 1, expense.length)).trim().toLowerCase() + '?')
        return amount + getExpensesMonth(expense.substr(0, indexOfSeparator)); 
    }// если использовать addExpenses уже приведенную к неижнему регистру, то после трим тулоуэркейс не нужен
  } //Почти красивая реккурсия))), но не чистая...*/

  let expenses = [];
  function getExpensesMonth(){
    let amountOfExpenses = 0, amount, i = 0;
    while (true){//проверка ввода расходов, отмена - выход
        do{
            expenses[i] = prompt('Введите обязательную статью расходов (если все перечислили - нажмите "Отмена"):');
            if (expenses[i] === ''){
                alert ('Строка не должна быть пустой');
                continue;
            }  
            if (expenses[i] === null){
                return amountOfExpenses;
            } 
            
        } while(!expenses[i]);
        do {
            amount = +prompt('Во сколько обходится (обходятся) ' + (expenses[i]) +' ?');
            //специально не использовал isNumber(), тоже работает благодаря строчке выше
            if (isNaN(amount) || (amount === 0)){
               alert ('Введены некорректные данные! Введите число!');
            }
        } while (isNaN(amount) || amount === 0);
        i++;
        amountOfExpenses += amount;
    }
}


 /*   let amountOfExpenses = 0, amount;
    for (let i = 0; i < 4; i++){
        expenses[i] = prompt('Введите обязательную статью расходов:');
        do {
            amount = +prompt('Во сколько обходится (обходятся) ' + (expenses[i]) +' ?');
            //специально не использовал isNumber(), тоже работает благодаря строчке выше
            if (isNaN(amount) || (amount === 0)){
               alert ('Введены некорректные данные! Введите число!');
            }
        } while (isNaN(amount) || amount === 0);

        amountOfExpenses += amount;
    }
    return amountOfExpenses;*/
    
console.log(expenses);
// ВЫВОЖУ ЗНАЧЕНИЕ ФУНКЦИИ getExpensesMonth В КОНСОЛЬ:
let expensesAmount = getExpensesMonth();// в уроке также через переменную, иначе повторный вызов, т.к. функция не чистая
console.log('Расходы за месяц: ' + expensesAmount);
//2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

const getAccumulatedMonth = function(incomes, expenses){
    return incomes - expenses;
};

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth (money, expensesAmount);
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
