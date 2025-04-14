function iteration(n) {
    for (let i = 0; i <= n; i++) {
        console.log("n = " + i);
    }
}

function recursion(n) {
    if (n >= 0) {
        recursion(n - 1);
        console.log("n = " + n);
    }
}
console.log("----------iteration----------");
iteration(5);
console.log("----------recursion----------");
recursion(5);

console.log(factorialRecursive(5));

function functionA(number) {
    console.log("functionA: " + number);
    if (number > 0) {
        functionB(number - 1);
    }
}

function functionB(number) {
    console.log("functionB: " + number);
    if (number > 0) {
        functionA(number - 1);
    }
}

functionA(3);

function isPalindrome(str) {
    // Приводим строку к нижнему регистру
    str = str.toLowerCase()
    // Базовый случай: пустая строка или строка из одного символа - палиндром
    if (str.length <= 1) {
        return true;
    }
    // Рекурсивный случай: сравниваем первый и последний символы
    if (str[0] === str[str.length - 1]) {
        // Если символы совпадают, проверяем оставшуюся часть строки
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        // Если символы не совпадают, строка не палиндром
        return false;
    }
}


// Задача:
//  Дано целое положительно число n.
//  Выведите все целые числа в порядке убывания от n до -n.
// Напишите рекурсивное решение
function countdown(n){
    
}
countdown(3); // Выведет: 3 2 1 0 -1 -2 -3


// Задача: перевернуть строку наоборот
// пример: "hello" --> "olleh"

// Дана готовая реализация через итеративный подход.
// Напишите решение, используя рекурсивный подход.
function reverseStringIterative(str) {
    let reversedString = ""; // Создаем пустую строку для хранения результата
    // Проходим по строке с конца до начала
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]; // Добавляем текущий символ в начало новой строки
    }
    return reversedString;
}
function reverseStringRecursive(str){
    // You code...
}

// Примеры использования:
console.log(reverseStringIterative("hello")); // "olleh"
console.log(reverseStringIterative("JavaScript")); // "tpircSavaJ"
console.log(reverseStringIterative("12345")); // "54321"

function factorialRecursive(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorialRecursive(number - 1);
    }
}

