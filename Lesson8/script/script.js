// Дан массив целых чисел размера n.
// Элементы массива – это высоты некоторых сооружений.
// Необходимо определить сколько таких сооружений, можно увидеть из начальной точки 0.

// Пример 1:
// Input: [8, 2, 3, 11, 11, 10]
// Output: 2
// Пояснение: Нам видно первое здание высотой 8, за ним следуют 11 (2 и 3 не видно, так как они меньше 8),
//    последние два элемента (11 и 10) также не видны так как 11 находится на том же уровне, что и 4 элемент (тоже 11),
//    а 10 – еще ниже.

// Пример 2:
// Input: [12, 20, 39, 45, 89]
// Output: 5
// Пояснение: будут видны все элементы, так как они расположены по возрастанию

//=======================================

// Дана строка s, содержащая только символы '(', ')', '{', '}', '[' и ']'.
// Определите, является ли входная строка допустимой.
//
// Входная строка допустима, если:
//
// 1. Открытые скобки должны быть закрыты скобками того же типа.
// 2. Открытые скобки должны быть закрыты в правильном порядке.
// 3. Каждой закрывающейся скобке соответствует открытая скобка того же типа.

// Пример 1:
// Input: s = "()"
// Output: true

// Пример 2:
// Input: s = "[()[]{}]"
// Output: true

// Пример 3:
// Input: s = "(]"
// Output: false

// Пример 4:
// Input: s = "([(]))"
// Output: false

//=================================

// 1.Даны две строки.
// Проверить, являются ли они анаграммами (состоят из одних и тех же букв, но в разном порядке).

// 2.В магазине продают только по три и по пять воздушных шариков.
// Можно ли купить ровно k шариков?

// Пример 1:
// Input: 8
// Output: Yes
// Пояснение: Можно купить 5 + 3 шарика

// Пример 2:
// Input: 10
// Output: Yes
// Пояснение: Можно купить 5 + 5 шариков

// Пример 3:
// Input: 7
// Output: No
// Пояснение: Никакими комбинациями 5 и 3, 7 шариков купить невозможно

// 3.Дан массив целых чисел размера n.
// Элементы массива – это высоты некоторых сооружений.
// Необходимо определить сколько таких сооружений, можно увидеть из начальной точки 0.

// Пример 1:
// Input: [8, 2, 3, 11, 11, 10]
// Output: 2
// Пояснение: Нам видно первое здание высотой 8, за ним следуют 11 (2 и 3 не видно, так как они меньше 8),
//    последние два элемента (11 и 10) также не видны так как 11 находится на том же уровне, что и 4 элемент (тоже 11),
//    а 10 – еще ниже.

// Пример 2:
// Input: [12, 20, 39, 45, 89]
// Output: 5
// Пояснение: будут видны все элементы, так как они расположены по возрастанию

// 4.Дан массив положительных целых чисел.
// Найти максимально возможную сумму возрастающего подмассива.
// Подмассив определяется как непрерывная последовательность чисел в массиве.

// Пример 1:
//
// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Пояснение: [5,10,50] — возрастающий подмассив с максимальной суммой 65.

// Пример 2:
//
// Input: nums = [10,20,30,40,50]
// Output: 150
// Пояснение: [10,20,30,40,50] — возрастающий подмассив с максимальной суммой 65.

// 5.Дан массив имен.
// Найдите самое длинное имя, если таких имен несколько - выведи любое их них

// 6.Дана строка s, содержащая только символы '(', ')', '{', '}', '[' и ']'.
// Определите, является ли входная строка допустимой.
//
// Входная строка допустима, если:
//
// 1. Открытые скобки должны быть закрыты скобками того же типа.
// 2. Открытые скобки должны быть закрыты в правильном порядке.
// 3. Каждой закрывающейся скобке соответствует открытая скобка того же типа.

// Пример 1:
// Input: s = "()"
// Output: true

// Пример 2:
// Input: s = "[()[]{}]"
// Output: true

// Пример 3:
// Input: s = "(]"
// Output: false

// Пример 4:
// Input: s = "([(]))"
// Output: false

/*
Names
Balloons
Anagram
Heights
ValidParentheses
MaxAscendingSum
Где порешать задачки: https://leetcode.com/
*/

//======================
/** ЗАДАЧА Q */
class Queue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
        } else {
            this.items[this.tail] = element;
            this.tail = (this.tail + 1) % this.capacity; // Циклический сдвиг
            this.size++;
        }

    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            const element = this.items[this.head];
            this.head = (this.head + 1) % this.capacity; // Циклический сдвиг
            this.size--;
            return element;
        }

    }

    peek() {
        if (isEmpty()) {
            console.log("Queue is empty");
            return -1;
        } else {
            return items[head];
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    get length() {
        return this.size
    }
}

const queue = new Queue();

//=================================
let queue1 = [];

queue1.push(1); // [1]
queue1.push(2); // [1, 2]
queue1.push(3); // [1, 2, 3]

let firstElement = queue1.shift(); // 1, queue1 теперь [2, 3]
console.log("firstElement = " + firstElement)
firstElement = queue1.shift(); // 2, queue1 теперь [3]

console.log(queue1); // [3]

//=======================================
let stack1 = [];

stack1.push(1); // [1]
stack1.push(2); // [1, 2]
stack1.push(3); // [1, 2, 3]

let topElement = stack1.pop(); // 3, stack1 теперь [1, 2]
console.log(topElement);
topElement = stack1.pop(); // 2, stack1 теперь [1]
console.log(stack1); // [1]

/** Реализация СТЕКА */
class Stack {
    constructor(size = 100) {
        this.top = -1;
        this.capacity = size
        this.data = new Array(size);
    }

    isEmpty() {
        return (this.top < 0);
    }

    push(x) {
        if (this.top >= (this.capacity - 1)) {
            console.error("Stack Overflow");
            return false;
        } else {
            this.data[++this.top] = x;
            console.log(x + " pushed into stack");
            return true;
        }
    }

    pop() {
        if (this.top < 0) {
            console.error("Stack Underflow");
            return 0;
        } else {
            return this.data[this.top--];
        }
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            return this.data[this.top];
        }
    }

    print() {
        for (let i = this.top; i > -1; i--) {
            console.log(" " + this.data[i]);
        }
    }
}

// Driver code
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
// console.log(stack.pop() + " Popped from stack");
// console.log("Top element is :" + stack.peek());
// console.log("Elements present in stack :");
// stack.print();