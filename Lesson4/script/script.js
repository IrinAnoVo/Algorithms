// Задача:
// Дано целое положительное число.
// Найдите сумму его чисел

// Напишите рекурсивное решение

// Алгоритм
// Базовый случай:
// Если число n равно 0, функция возвращает 0. Это останавливает рекурсию.
// Рекурсивный случай:
// n % 10 извлекает последнюю цифру числа.
// Math.floor(n / 10) - отбрасывает последнюю цифру.
// Функция рекурсивно вызывает саму себя с оставшимся числом и добавляет извлеченную цифру к результату рекурсивного вызова.
function sumOfDigitsRecursive(n) {
    if (n === 0) {
        return 0
    }
    const endNumber = n % 10
    return endNumber + sumOfDigitsRecursive(Math.floor(n / 10))
}
const number = 12345;
const result1 = sumOfDigitsRecursive(number);
console.log(`Сумма цифр числа ${number} равна ${result1}`);


// Алгоритм "Бинарный поиск"
// 1. Начинаем с поиска среднего элемента массива.
// 2. Если средний элемент совпадает с искомым, поиск завершается.
// 3. Если искомый элемент меньше среднего, поиск продолжается в левой половине массива.
// 4. Если искомый элемент больше среднего, поиск продолжается в правой половине массива.
// 5. Шаги 1-4 повторяются до тех пор, пока элемент не будет найден или пока не останется пустой диапазон для поиска.
function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
        return - 1
    }
    const middle = Math.floor((left + right) / 2)
    console.log(middle);         
    if (arr[middle] === target) {
        return middle
    }
    if (target < arr[middle]) {
        return binarySearchRecursive(arr, target, left, middle - 1)
    }
    return binarySearchRecursive(arr, target, middle + 1, right)
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const result = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (result === -1) {
    console.log("Элемент не найден");
} else {
    console.log("Элемент найден по индексу " + result);
}