let money,
    time;
function start() {
    money = + prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while (isNaN(money) || money == '' || money == null) {
        money = + prompt("Ваш бюджет на месяц?",'');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) ==='string' && (typeof (a)) != null && (typeof (b)) != null
           && a != '' && b != '' && a.length < 50) {
           console.log('done');
           appData.expenses[a] = b;
        } else {
          console.log('Error');
          i--;
        }
    }
}
chooseExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('How much you have in your savings?');
        let percent = +prompt("On what percent?");

        appData.monthIncome = save / 100 /12*percent;
        alert('Your monthly income from your deposit is' + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "som");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Minimal level of income');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Average level of income');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High level of income');
    } else {
        console.log('Error');
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i <= 3; i++) {
        q = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = q;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();



// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//
//     if ((typeof (a)) ==='string' && (typeof (a)) != null && (typeof (b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Error');
//         i--;
//     }
// };

//while
// let i= 0;
// while (i < 2) {
//     let a = prompt('Введите статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Error');
//         i--;
//     }
//     i++;
// };

//do while
// let i =0;
// do {
//     let a = prompt('Введите статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//
//     if ( typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//         && a != '' && b != '' && a.length < 50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log('Error');
//         i--;
//     }
//     i++;
// }
// while (i < 2);

// appData.moneyPerDay = (appData.budget / 30).toFixed();
//
// alert('Everyday budget:' + appData.moneyPerDay);
//
// if (appData.moneyPerDay < 100) {
//     console.log('Minimal level of income');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Average level of income');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('High level of income');
// } else {
//     console.log('Error');
// };