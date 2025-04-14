//LinearSearch
//MaxElement
//IsPrime
//Factorial

// Задача: Найти элемент в массиве целых чисел.
// Алгоритм:
// Пройти по массиву с начала до конца, сравнивая каждый элемент с искомым.
// Если элемент найден, вернуть его индекс.
// Если элемент не найден, вернуть -1.
// Решение
let numbers = [2, 3, 5]
function linear_search(numbers, target_number) {
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target_number) {
        return i;
    }
}
return -1;
}
console.log(linear_search(numbers, 5));

// Оценить сложность алгоритма o(n)

// Задача: Найти наибольший элемент в массиве целых чисел.
// Алгоритм:
// Создать переменную для хранения текущего наибольшего элемента и инициализировать ее первым элементом массива.
// Пройти по массиву с начала до конца, сравнивая каждый элемент с текущим наибольшим.
// Если текущий элемент больше наибольшего, обновить значение наибольшего.
// Вернуть наибольший элемент.
let numbers1 = [ 2, 6, 3]
function max_element(numbers1) {
    let max = numbers1[0]
    for (let i = 0; i < numbers1.length; i++) {
        if(max <= numbers1[i]) {
            max = numbers1[i]
        }
    } 
    return max  
}
console.log(max_element(numbers1));

// Оценить сложность алгоритма o(n)

// Задача: Проверить, является ли заданное число простым.
// Алгоритм:
// Проверить, делится ли число на 2. Если делится, то число не простое.
// Пройти по всем нечетным числам от 3 до корня из числа.
// Если число делится на какое-то из этих чисел, то оно не простое.
// Если ни одно из чисел не является делителем, то число простое.
function is_prime(number) {
    if (number === 2) {
        return true
    }
    if (number % 2 === 0 || number === 1) {        
        return false       
    }
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false
        }        
    }
    return true
}
console.log(is_prime(0)); //ne t
console.log(is_prime(127)); //t
console.log(is_prime(2)); //t
console.log(is_prime(3)); //t
console.log(is_prime(9)); //ne t

// Оценить сложность алгоритма 0(v(n));

// Задача: Вычислить факториал заданного числа.
// Алгоритм:
// Создать переменную для хранения результата и инициализировать ее единицей.
// Умножить результат на все числа от 1 до заданного числа.
// Вернуть результат.
function factorial(number) {
    let result = 1
    for (let i = 2; i <= number; i++) {
        result *= i
    }
    return result
}
console.log(factorial(4));

// Оценить сложность алгоритма 0(n);
