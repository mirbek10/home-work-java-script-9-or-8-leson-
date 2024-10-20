// поиск и фильтрация 
const num1 = [2, 5, 8, 11, 14, 17, 20, ];
const num2 = num1.filter((num)=> {
    return num > 10
})
console.log(num2);

const q = [2, 5, 8, 11, 14, 17, 20];
const q1 = q.find((el)=> {
    return el % 5
})
console.log(q1);
// find кандай бØлушту тушунбодум

// Трансформация данных

let w1 = ["apple", "banana", "orange", "kiwi"]

let w = w1.map((elem) => {
    return `fruit ${elem}`
})

console.log(w);

//  Агрегация данных

const arr = [1, 2, 3, 4, 5];
const redacs = arr.reduce((accu,corr ) => {
    return accu + corr
},0);

console.log(redacs);

const redac = arr.reduce((acu,cor ) => {
    return acu * cor
});

console.log(redac);



