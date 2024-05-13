Тестовое задание набора (04.10.2021) MERN

=== Порядок выполнения ===
Создайте публичный репозиторий на github.com 2. Создайте в нем папки с названием разделов задания: git, js, react, prisma. 3. Результаты выполнения заданий записывайте в папке соответствующего раздела. 4. Отправьте рекрутеру ссылку на репозиторий после окончания.

=== GIT внесение изменений ===
Формат выполнения
md файл

Рабочее окружение
Вы уже работаете на ветке task_4 родительская ветка которой dev.

Задание
На ветке dev удаленного репозитория появились новые изменения и ваша задача добавить их в свою ветку перед своими,
опишите порядок ваших действий.

=== JS логика ===
Формат выполнения
каждое задание в отдельном файле с номером задания в имени файла.

Задание

1. Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
   аргумент deep указывать глубину подсчета если не указан то бесконечно.
   Пример:
   const div = document.createElement('div')
   const p = document.createElement('p')
   const span = document.createElement('span')
   p.appendChild(span)
   div.appendChild(p)

nodeChildCount(div) // 2
nodeChildCount(div, 1) // 1
nodeChildCount(div, 2) // 2

2. Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны.
   Пример:
   const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
   iterator.next() // { value: [1,2,3], done: false }
   iterator.next() // { value: [4,5,6], done: false }
   iterator.next() // { value: [7,8], done: false }
   iterator.next() // { value: undefined, done: true }

3. Напишите функцию обертку которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения.
   !!!ВНИМАНИЕ!!! Количество аргументов исполняемой функции не ограничено!
   Пример:
   const f1 = (cb) => {cb(1)}
   const f2 = (a, cb) => {cb(a)}
   const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
[
[f1, []],
[f2, [2]]
[f3, [3, 4]]
]
).then(console.log)
// Output: [1, 2, [3, 4]]

4. Сделать функцию mapper которая на вход принимает набор правил для преобразования данных.
   Формат правила:
   [<поле которое преобразовуем>, <новое название поля>[, <функция для преобразования значения>]]
   Пример:
   let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

const mapRules = [
["name", "n", (value) => value.toLowerCase()],
["age", "a"]
]

testData3.map(mapper(mapRules)) // [{"n":"vasya","a":20},{"n":"dima","a":34},{"n":"colya","a":46},{"n":"misha","a":16},{"n":"ashan","a":99},{"n":"rafshan","a":11}]

5. Есть функция primitiveMultiply, которая умножает числа, но случайным образом может выбрасывать исключения типа: NotificationException, ErrorException. Задача написать функцию обертку которая будет повторять вычисление при исключении NotificationException, но прекращать работу при исключениях ErrorException
   Пример:
   function NotificationException() {}
   function ErrorException() {}
   function primitiveMultiply(a, b) {
   const rand = Math.random();
   if (rand < 0.5) {
   return a \* b;
   } else if(rand > 0.85) {
   throw new ErrorException()
   } else {
   throw new NotificationException()
   }
   }

function reliableMultiply(a, b) {
// Ваш код
}
console.log(reliableMultiply(8, 8));

6. Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение,
   после чего все нечетные значения в матрице будет умножать на это число.

Исходная матрица:
[
[5, 3, 6],
[7, 11, 2],
[15, 9, 4]
]

Результат выполнения функции:
[
[10, 6, 6],
[14, 22, 2],
[30, 18, 4]
]

7. Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
.then(console.log)
.catch(console.error)

// Output
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....

8. Создайте прототип который удаляет дубликаты из строки. Пример:

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
x.removeDuplicate()
// Int32 Double

=== React ===
Формат выполнения
каждое задание в отдельном файле с номером задания в имени файла.

Задание

1. Напишите компонент модального окна, который будет выводить переданные в него дочерние компоненты по центру экрана. Так же при передачи флага disableGlobalScroll , глобальных скроллинг должен быть отлучен при открытии модального окна.
   Пример:
   function SomeComponent() {
   const [open, setOpen] = useState(false)

return (
<MyModal open={open} disableGlobalScroll={true}>
<div>
<h1>Some content</h1>
<button onClick={setOpen(false)}>close</button>
</div>
</MyModal>
)
}

2. Напишите компонент цензурирования текста.
   Цензурироваться должны только слова (а не части слов).
   Все символы цензурируемого слова должны быть заменены на \*
   При клике на слово должен отображаться оригинал.
   Пример:
   function SomeComponent() {
   const badWords = ['test', 'someBadWord'];
   const someText = 'Very long text who containts someBadWord and testWord';

return (
<CensoredText badWords={}>{someText}</CensoredText>
)
}
Результат:
Very long text who containts ****\*\***** and testWord

=== Prisma ===
Формат выполнения
schema.prisma и service.ts файлы

Задание
Опишите схему базы данных для следующего приложения:
Требуется создать приложение для инвентаризации товаров на складах.
Параметры товара:
sku - уникальное поле.
title - наименование товара.
Параметры категории товара:
slug - уникальное поле.
title - наименование склада
Параметры склада:
uuid - уникальное поле.
title - наименование склада
Товары хранятся на складах в определенном количестве.
Каждый продукт может относится к нескольким категориям.

Напишите сервис который реализует следующие методы: получить общее количество всех товаров на всех складах, получить товары на определенном складе, получить количество товара на всех складах, получить количество товара на определенном складе, получить количество продуктов по категории, получить количество продуктов на определенном складе по категории.
Пример:
export const countAllProducts = () => {}
export const countAllProductsOnStock = (uuid: string) => {}
export const countProduct = (sku: string) => {}
export const countProductOnStock = (uuid: string, sku: string) => {}
export const countProductByCategory = (slug: string) => {}
export const countProductOnStockByCategory = (uuid: string, slug: string) => {}
