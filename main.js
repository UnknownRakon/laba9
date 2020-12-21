// Задание 1  
console.log("Задание 1");

let myCar = {
    carName: prompt('Название машины', ["Например: Ford Mustang"]),
    color: prompt('Цвет', ["Например: синий"]),
    horsePowers: prompt('Количество лошадинных сил', ["Например: 150"]),
    year: prompt('Год выпуска', ["Например: 1983"]),
    cost: prompt('Цена', ["Например: 2500000"]),
};
console.log('Свойства: ', Object.keys(myCar).toString());
console.log('Вы продаёте ' + myCar.color + ' ' + myCar.carName + ' ' + myCar.year + ' года выпуска, ' + 'мощностью ' + myCar.horsePowers + ' за ' + myCar.cost + 'рублей');

