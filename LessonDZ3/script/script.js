// Задача: "Объединение отсортированных массивов"
// Даны два целочисленных массива arr1 и arr2, каждый из которых отсортирован по возрастанию.
// Необходимо создать новый целочисленный массив mergedArray,
// который будет содержать все элементы массивов arr1 и arr2 в отсортированном порядке (также по возрастанию).

// Входные данные:
// arr1: Целочисленный массив, отсортированный по возрастанию.
// arr2: Целочисленный массив, отсортированный по возрастанию.

// Выходные данные:
// mergedArray: Целочисленный массив, содержащий все элементы arr1 и arr2 в отсортированном порядке по возрастанию.

// Ограничения:
// Массивы arr1 и arr2 могут быть пустыми. 
// Элементы массивов arr1 и arr2 могут повторяться.

// Примеры:
//Вход: arr1 = [1, 3, 5, 7], arr2 = [2, 4, 6, 8]
//Выход: mergedArray = [1, 2, 3, 4, 5, 6, 7, 8]

//Вход: arr1 = [1, 2, 2, 5], arr2 = [1, 3, 4]
//Выход: mergedArray = [1, 1, 2, 2, 3, 4, 5]

//Вход: arr1 = [], arr2 = [1, 2, 3]
//Выход: mergedArray = [1, 2, 3]

function mergeSortedArrays(arr1, arr2) {
    arr1.sort((a, b) =>
        a - b)
  
    arr2.sort((a, b) =>
        a - b)
   
    let mergedArray = arr1.concat(arr2)
    mergedArray.sort((a, b) => 
        a - b)       
    return mergedArray
    
}
const arr1 = [5, 2, 2, 1];
const arr2 = [];
const mergedArray = mergeSortedArrays(arr1, arr2);

console.log(arr1);
console.log(arr2);
console.log(mergedArray);

