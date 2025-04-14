/** Сортировка слиянием */
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([15, 21, 13, 5, 10, 7]));

/** Быстрая сортировка */
function quickSort(array, start, end) {
    if (start < end) {
        let indexPivot = partition(array, start, end);
        // smaller to the left
        quickSort(array, start, indexPivot - 1);
        // bigger to the right
        quickSort(array, indexPivot + 1, end);
    }
}

function partition(array, start, end) {
    let pivot = array[end]; // choose pivot element
    let indexPivot = start; // Index of smaller element and indicates the right position

    for (let i = start; i < end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // swap pivot to right position

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

let testArray = [39, 22, 2, 55, 6, 20];
quickSort(testArray, 0, testArray.length - 1);
console.log(testArray);



///////sort.js
const fruits = ["банан", "апельсин", "яблоко", "вишня"];
fruits.sort();
console.log(fruits); // Вывод: ["апельсин", "банан", "вишня", "яблоко"]

const numbers = [10, 2, 1, 5, 20];
numbers.sort();
console.log(numbers); // Вывод: [1, 10, 2, 20, 5]



///////sortByRule.js
const numbers1 = [10, 2, 1, 5, 20];
// Сортировка по возрастанию:
numbers1.sort((a, b) => a - b);
console.log(numbers1); // Вывод: [1, 2, 5, 10, 20]

// Сортировка по убыванию:
numbers1.sort((a, b) => b - a);
console.log(numbers1); // Вывод: [20, 10, 5, 2, 1]

///////sortStringByLength.js
const strings = ["я", "мир", "привет", "программирование"];

strings.sort((a, b) => a.length - b.length);
console.log(strings); // Вывод: ["я", "мир", "привет", "программирование"]


strings.sort((a, b) => b.length - a.length);
console.log(strings); // Вывод: ["программирование", "привет", "мир", "я"]


//=========Задачи=============
// 1. "Простая сортировка"
// Дан массив произвольных целых чисел
// Используя любой алгоритм сортировки из lecture_6, отсортируйте элементы в порядке возрастания.
const numbers2 = [3, -5, 0, 4, 12, -2, 10];

numbers2.sort((a, b) => a - b)

console.log(numbers2);

// 2. "Сумма наибольших по модулю" (не смотря на отрицательное или положительное число)
// Дан массив чисел.
// Найти: сумму 5-ти самых больших элементов по модулю.
// Пояснение: сравниваем элементы по модулю, а в сумму добавляем сами значения элементов(без модуля)
// В примере ниже, два самых больших по модулю числа это: -224 и 211. Они самые большие по модулю, а их сумма = -13
numbers2.sort((a, b) => Math.abs(b) - Math.abs(a))

console.log(numbers2);

// 3. "Призеры олимпиады"
// По результатам олимпиады участники награждаются дипломами.
// Набравшие одинаковые баллы получают дипломы одинаковой степени.
// Призером олимпиады считается участник, получивший диплом не хуже III степени.
// По результатам олимпиады определите количество призеров.
// Вход: массив из N натуральных чисел – результаты участников.
// Выход: одно число – число призеров.
// Пример:
// Вход
// 1 3 4 3 5 6 7 7 6 1
// Выход
// 5
let results = [1, 3, 4, 3, 5, 6, 7, 7, 6, 1]
results.sort((a, b) => b - a)

console.log(results);


// 4. "Анаграммы"
// Задается массив строк - слов. Найти в нем все анаграммы (слова, составленные из одних и тех же букв).
function findAnagrams(words) {
    const anagrams = new Map();

    for (const word of words) {
        // Сортируем буквы в слове и используем как ключ
        const sortedWord = word.split('').sort().join('');
        
        // Если ключ уже существует, добавляем слово в массив, иначе создаем новый массив
        if (anagrams.has(sortedWord)) {
            anagrams.get(sortedWord).push(word);
        } else {
            anagrams.set(sortedWord, [word]);
        }
    }

    // Возвращаем только те группы, где больше одного слова
    return Array.from(anagrams.values()).filter(group => group.length > 1);
}

const words = ["ток", "кот", "кто", "окт", "тик", "кит"];
const anagrams = findAnagrams(words);
console.log(anagrams);


// 5. "Камни"
// Имеется N камней веса А1,А2,...,АN.
// Необходимо разбить их на две кучи таким образом, чтобы веса куч отличались не более чем в 2 раза.
// Если этого сделать нельзя, то указать это.
// Вход: массив целых чисел - веса камней
// Выход: два числа - вес первой и второй куч. Или сообщение "Разбить на две кучи нельзя"
function splitStones(stones) {
    const totalWeight = stones.reduce((sum, stone) => sum + stone, 0);
    stones.sort((a, b) => b - a); // Сортируем камни по убыванию веса

    let heap1Weight = 0;
    const heap1 = [];

    for (const stone of stones) {
        if (heap1Weight + stone <= totalWeight / 2) {
            heap1Weight += stone;
            heap1.push(stone);
        } else {
            break;
        }
    }

    const heap2Weight = totalWeight - heap1Weight;
     // Проверяем условие разбиения
     if (heap1Weight === 0 || heap2Weight === 0) {
        return "Разбить на две кучи нельзя";
    }
    if (Math.max(heap1Weight, heap2Weight) / Math.min(heap1Weight, heap2Weight) <= 2) {
        return [heap1Weight, heap2Weight];
    } else {
        return "Разбить на две кучи нельзя";
    }
}

// Пример использования
const stones = [5, 8, 13, 27, 14];
const result = splitStones(stones);
console.log(result);
