// "Сумма наибольших"
// Дан массив произвольных целых чисел
// Найти: сумму 5-ти самых больших элементов.
// Примечание: Используйте алгоритм сортировки, если нужно.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let index1 = 0;
    let index2 = 0;
    let mergedArray = [];
    // 1
    while (index1 < left.length && index2 < right.length) {
        if (left[index1] < right[index2]) {
            mergedArray.push(left[index1++]);
        } else {
            mergedArray.push(right[index2++]);
        }
    }
    // 2
    while (index1 < left.length) {
        mergedArray.push(left[index1++]);
    }
    while (index2 < right.length) {
        mergedArray.push(right[index2++]);
    }
    return mergedArray;
}

let numbers = [2, 4, -8, -5, 0, 9, 12, 0, 10] // 12 10 9 4 2



// "Сумма с условием"
// Дан массив произвольных целых чисел
// Найти: сумму элементов списка, больших данного числа a. Значение a можно задать самостоятельно.
// Примечание: Используйте алгоритм сортировки, если нужно.

let numbers1 = [1, 12, 3, 14, 5, -4, 20]; // O(n)
let a = 10;

//



// 1. Сортируем массив
let numbersSort = mergeSort(numbers);
// console.log(numbersSort);
// 2. Берем пять последних элементов и Суммировать эти элементы
let sumFive = 0
for (let i = numbersSort.length - 1; i >= numbersSort.length - 5; i--) {
    // console.log(numbersSort[i]);
    sumFive += numbersSort[i];
}
//
console.log("Сумма пяти наибольших =", sumFive);

// вариант решение второй
// let sorted = mergeSort(arr)
// let sum = sorted.slice(-5).reduce((acc, num) => acc + num, 0)
// console.log(sum)


/** Сортировка слиянием */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let index1 = 0;
    let index2 = 0;
    let mergedArray = [];
    // 1
    while (index1 < left.length && index2 < right.length) {
        if (left[index1] < right[index2]) {
            mergedArray.push(left[index1++]);
        }else{
            mergedArray.push(right[index2++]);
        }
    }
    // 2
    while (index1 < left.length){
        mergedArray.push(left[index1++]);
    }
    while (index2 < right.length){
        mergedArray.push(right[index2++]);
    }
    return mergedArray;
}

console.log(mergeSort([15, 21, 13, 5, 10, 7]));
console.log(mergeSort([-3, 12, -7, 22, 4, 0, 3]));
console.log(mergeSort([])); // -> []
console.log(mergeSort([2]));






// "Рекламная акция"
// В сети магазинов "Н-Аудио" проводится рекламная акция. Каждый второй товар – бесплатно.
// Естественно, кассирам дано указание пробивать товары в таком порядке, чтобы магазин потерял как можно меньше денег.
// По списку товаров определите максимальную сумму в чеке.
//
// Вход: дан массив натуральных чисел – цены товаров.
// Выход: одно число – максимальная сумма чека.

// Пример
// Вход:
// 2 1 10 50 10
// Выход:
// 70
// Пояснение:
// Возможен такой порядок: 10 2 50 1 10

function calculateMaxReceiptSum(prices) {
    let sum = 0;
    // Пока в массиве есть товары
    while (prices.length > 0) {
        // Находим индекс самого дорогого товара
        let maxIndex = prices.indexOf(Math.max(...prices));
        // Добавляем его в сумму
        sum += prices[maxIndex];
        // Удаляем его из массива
        prices.splice(maxIndex, 1);

        // Если остался хотя бы один товар, удаляем самый дешевый
        if (prices.length > 0) {
            let minIndex = prices.indexOf(Math.min(...prices));
            prices.splice(minIndex, 1);
        }
    }

    return sum;
}


function calculateMaxReceiptSum(prices) {
    // Сортируем массив по возрастанию
    prices.sort((a, b) => a - b);

    let sum = 0;
    let left = 0;
    let right = prices.length - 1;

    // Используем два указателя
    while (left <= right) {
        // Берем самый дорогой товар (справа)
        sum += prices[right];
        right--;

        // Пропускаем самый дешевый товар (слева)
        if (left <= right) {
            left++;
        }
    }

    return sum;
}


let prices = [2, 1, 10, 50, 10]; // Цены товаров которые вы купили
let maxSum = calculateMaxReceiptSum(prices);
console.log(maxSum); // Вывод: 70


//  правильное решение
sort_prices = mergeSort(prices)
let centerIndex = Math.floor(sort_prices.length / 2)

let total_price = 0
for (let i = centerIndex; i < sort_prices.length; i ++) {
    total_price += sort_prices[i]
}
console.log(total_price);