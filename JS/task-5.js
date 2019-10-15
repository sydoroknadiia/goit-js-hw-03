// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. Возвращает массив значений определенного поля prop из каждого объекта в массиве.

const getAllPropValues = function(arr, prop) {
    const values = [];

    for (let key of arr) {
        if(prop in key) {
            values.push(key[prop]); 
        }
    }
    return values;
}

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []