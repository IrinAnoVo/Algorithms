// 1. Создание
let emptyArray = new Array(); // пустой массив
let myArray = new Array(5); // массив длиной 5, заполненный undefined

// 2. Добавление в конец массива
myArray.push(40);

// 3. Удаляет последний элемент из массива и возвращает его значение.
let lastElement = myArray.pop();

// 4. Получение элементов
myArray = [10, 20, 30];
console.log(myArray[0]); // выведет 10
console.log(myArray[2]); // выведет 30

// 5. Замена элемента
myArray[0] = 100; // Запись 100 на позицию с индексом 0

// 6. Перебор элементов
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let element of myArray) {
    console.log(element);
}

// Все методы Array: https://www.programiz.com/javascript/library/array

/** Динамическич массив в реализации класса */

class DynamicArray {
    constructor() {
        this.array = new Array(1); // Внутренний массив, для хранения элементов
        this.count = 0; // Количество занятых ячеек массива
        this.size = 1;  // Физический размер массива в памяти
    }

    growSize() {
        let tmp = new Array(this.size * 2); // Создаем новый в 2 раза больше
        // Копируем элементы из старого
        for (let i = 0; i < this.size; i++) {
            tmp[i] = this.array[i];
        }
        this.array = tmp;
        this.size *= 2;
    }

    // function add an element at the end of array
    add(data) {
        if (this.count >= this.size) { // Есть места не хватает
            this.growSize();
        }
        this.array[this.count] = data;
        this.count++;
    }

    // function remove last element
    remove() {
        // TODO-2[complete]: реализовать метод
        if (this.count === 0) {
            throw new Error("Empty array");
        }
        this.count--;
    }

    // function add an element at given index
    addAt(index, data) {
        // TODO-3[complete part]: убрать дублирование кода
        if (this.count < this.size) { // Есть места хватает
            for (let i = this.count - 1; i >= index; i--) {
                this.array[i + 1] = this.array[i]; // сдвигаем все элементы вправо от текущего индекса
            }
            this.array[index] = data;
            this.count++;
        } else { // Есть места не хватает
            this.growSize();
            this.array[index] = data;
            this.count++;
        }

    }

    // function add an element at given index
    removeAt(index) {
        if (this.count > 0) {
            for (let i = index; i < this.count - 1; i++) {
                this.array[i] = this.array[i + 1]; // сдвигаем все элементы влево до текущего индекса
            }
            this.array[this.count - 1] = 0;
            this.count--;
        }
    }

    // Изменяет элемент с заданным индексом, на значение data
    set(index, data){
        // TODO-4: напишите реализацию методы
    }

    // Удаляет все элементы
    clean(){
        // TODO-5: напишите реализацию методы
    }

    // Проверяет, существует ли элемент со значением data
    contains(data){

    }

    // true - если список пустой, false - если нет
    isEmpty(){

    }

    toString() {
        return `[${this.array.slice(0, this.count).join(", ")}]`;
    }

    length() {
        // TODO-1[complete]: реализуйте метод
        return this.count;
    }
}

// test DynamicArray
let da = new DynamicArray();
// da.remove();
// console.log(da.length());
da.add(10);
da.add(2);
da.add(-6);
da.remove();
// console.log(da.length());
console.log(`${da}`); // console.log(da.toString());


// [1][2][3][4][5][][][]
// addAt(3, 9)
// [1][2][3][4][5][][][]
// [1][2][][3][4][5][][]
// [1][2][9][3][4][5][][]


// [1][2][9][3][4][5][][]
// removeAt(2)
// [1][2][9][3][4][5][][]
// [1][9][3][4][5][][][]

// [1][2][9][3][4][5][][]
// set(3, 10)  O(1)
// [1][2][10][3][4][5][][]

// []

/** Динамическич массив в реализации класса */

class DynamicArray {
    constructor(data = []) {
        this.array = new Array(data.length || 1); // Внутренний массив, для хранения элементов
        for (let i =0; i < data.length; i++){
            this.array[i] = data[i];
        }
        this.count = data.length; // Количество занятых ячеек массива
        this.size = data.length || 1;  // Физический размер массива в памяти
    }

    growSize() {
        let tmp = new Array(this.size * 2); // Создаем новый в 2 раза больше
        // Копируем элементы из старого
        for (let i = 0; i < this.size; i++) {
            tmp[i] = this.array[i];
        }
        this.array = tmp;
        this.size *= 2;
    }

    // function add an element at the end of array
    add(data) {
        if (this.count >= this.size) { // Есть места не хватает
            this.growSize();
        }
        this.array[this.count] = data;
        this.count++;
    }

    // function remove last element
    remove() {
        // TODO-2[complete]: реализовать метод
        if (this.count === 0) {
            throw new Error("Empty array");
        }
        this.count--;
    }

    // function add an element at given index
    addAt(index, data) {
        // TODO-3[complete part]: убрать дублирование кода
        if (this.count < this.size) { // Есть места хватает
            for (let i = this.count - 1; i >= index; i--) {
                this.array[i + 1] = this.array[i]; // сдвигаем все элементы вправо от текущего индекса
            }
            this.array[index] = data;
            this.count++;
        } else { // Есть места не хватает
            this.growSize();
            this.array[index] = data;
            this.count++;
        }

    }

    // function add an element at given index
    removeAt(index) {
        if (this.count > 0) {
            for (let i = index; i < this.count - 1; i++) {
                this.array[i] = this.array[i + 1]; // сдвигаем все элементы влево до текущего индекса
            }
            this.array[this.count - 1] = 0;
            this.count--;
        }
    }

    getArray() {
        return this.array;
    }

    set(index, data) {
        if (index >= this.count || index < 0) {
            throw Error("Индекс за границей массива");
        }
        this.array[index] = data;
    }

    clean() {
        this.array = new Array(1);
        this.count = 0;
        this.size = 1;
    }

    toString() {
        return `[${this.array.slice(0, this.count).join(", ")}]`;
    }

    length() {
        // TODO-1[complete]: реализуйте метод
        return this.count;
    }
}

// test DynamicArray
// let da = new DynamicArray();
let da = new DynamicArray([2, 5, 7, 7, 15]);
da.add(10); // 0
da.add(-5); // 1
da.add(5);  // 2
// da.remove();
console.log(`${da}`)
// da.set(2, 8);
// console.log(`${da}`)
// da.clean()
// console.log(`${da}`)
// console.log(da.length())