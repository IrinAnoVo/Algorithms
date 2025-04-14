//========DZ==========//
function hanoiIter(n, start, end, aux) {
    // n: количество дисков 3
    // start: начальный столбец  a
    // end: конечный столбец  c
    // aux: вспомогательный столбец  b
    // Стек для хранения задач
    const stack = [];
    // Добавляем начальную задачу в стек
    stack.push({ n, start, end, aux })
    while (stack.length > 0) {
        // Извлекаем текущую задачу из стека
        const { n, start, end, aux } = stack.pop();
        if (n === 1) {
            // Если остался один диск, перемещаем его
            console.log(`Move disk 1 from ${start} to ${end}`);
        } else {
            // Эмулируем рекурсивные вызовы в обратном порядке
            // (так как стек работает по принципу LIFO)
            // 1. Перемещаем n-1 дисков с aux на end, используя start как вспомогательный
            stack.push({ n: n - 1, start: aux, end, aux: start });
            // 2. Перемещаем самый большой диск с start на end
            stack.push({ n: 1, start, end, aux });
            // 3. Перемещаем n-1 дисков с start на aux, используя end как вспомогательный
            stack.push({ n: n - 1, start, end: aux, aux: end });
        }
    }
}
hanoiIter(3, 'A', 'C', 'B'); // Выводит в терминал описание действие по перемещению дисков "A" --> "C"


function hanoiRecur(n, start, end, aux) {
    if (n === 1) {
        // Если остался только один диск, перемещаем его напрямую
        console.log(`Move disk 1 from ${start} to ${end}`);
    } else {
        // Рекурсивно перемещаем n-1 дисков с начального столбца на вспомогательный
        hanoiRecur(n - 1, start, aux, end);
        // Перемещаем оставшийся самый большой диск на конечный столбец
        console.log(`Move disk ${n} from ${start} to ${end}`);
        // Рекурсивно перемещаем n-1 дисков с вспомогательного столбца на конечный
        hanoiRecur(n - 1, aux, end, start);
    }
}
hanoiRecur(3, 'A', 'C', 'B');


function hanoi(n, source, destination, helper) {
    // n: количество дисков
    // start: начальный столбец
    // end: конечный столбец
    // aux: вспомогательный столбец
    if (n > 0) {
        // Перемещаем n-1 дисков с исходного на вспомогательный
        hanoi(n - 1, source, helper, destination);
        // Перемещаем самый большой диск с исходного на целевой
        console.log(`Переместить диск ${n} с ${source} на ${destination}`);
        // Перемещаем n-1 дисков с вспомогательного на целевой
        hanoi(n - 1, helper, destination, source);
    }
}
hanoi(4, 'A', 'C', 'B'); // Выводит в терминал описание действие по перемещению дисков "A" --> "C"