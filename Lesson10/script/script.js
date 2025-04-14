activities = [
    {name: 'drawing', start: 10, finish: 13},
    {name: 'writing', start: 10, finish: 17},
    {name: 'eating', start: 12, finish: 14},
    {name: 'coding', start: 15, finish: 19},
    {name: 'reading', start: 13, finish: 16},
    {name: 'dancing', start: 17, finish: 18}
]

function selectActivities(allActivities) {
    // TODO: проанализируйте код функции и найдите недостатки реализации
    //  Подсказка: побочные эффекты
    allActivities.sort((a, b) => a.finish - b.finish);
    let selectedActivities = [allActivities[0]]
    let currentEndTime = allActivities[0].finish;
    for (let i = 1; i < allActivities.length; i++) {
        if (allActivities[i].start >= currentEndTime) {
            currentEndTime = allActivities[i].finish;
            selectedActivities.push(allActivities[i]);
        }
    }
    return selectedActivities;
}

console.log(selectActivities(activities));

//=================================================
// Дано:
//  Список активностей, каждая из которых характеризуется четырьмя параметрами:
//      Название (строка, уникальное имя активности)
//      Время начала (целое число, например, час начала активности)
//      Время окончания (целое число, например, час окончания активности)
//      Цена (целое число, положительное значение)
//Найти:
// Максимальный по суммарной стоимости набор, непересекающихся по времени активностей.
// Условия:
//  Активности считаются непересекающимися, если время окончания одной активности меньше или равно времени начала другой активности.
//  Необходимо использовать жадный алгоритм.


activities = [
    {name: '...', start: 1, end: 2, cost: 3},
    // ...
]


//====================================================
// Напишите программу, используя жадный алгоритм.
// Задача:
// Монетная система некоторого государства состоит из монет достоинством: 1, 2, 5, 10
// Требуется выдать сумму x, наименьшим возможным количеством монет.


function getChange(sum, coins) {
    let resultCoins = [];
    let copyCoins = [...coins];
    copyCoins.sort((a, b) => b - a);
    // [ 10, 5, 2, 1 ]
    let coin = copyCoins[0];
    let indexCoin = 0;
    while (sum > 0) {
        if (sum >= coin) {
            sum -= coin;
            resultCoins.push(coin);
        } else { // Берем монету помельче
            coin = copyCoins[++indexCoin];
        }
    }
    return resultCoins
}

const coins = [1, 2, 5, 10];    // V
const sum = 20;

let changeCoins = getChange(sum, coins);
console.log(changeCoins);


//================================================
// У вас есть список людей, которым нужно подарить подарки и список подарков.
// У каждого человека есть предпочтения по подаркам, выраженные в виде списка желаемых подарков.
// Каждый подарок можно подарить только одному человеку. Ваша задача - осчастливить как можно больше людей.

people = {
    "Alex": ["clock", "notebook", "card"],
    "Maria": ["clock", "phone"],
    "Mike": ["card", "bike"],
    "Anna": ["auto"],
}

gifts = [/*...*/];