// Task #1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // add new 
// user.mood = 'happy';
// // change 
// user.hobby = 'skydiving';
// user.premium = false;

// for (const person in user) {
//     Object.keys(user);
// }
// console.log(user);

// Task #2
// const countProps = function(obj) {
//     let count = 0;
//     for (const key in obj) {
//         count += 1;
//     }
//     return count;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Task #3

// const findBestEmployee = function(employees) {
//     let max = 0;
//     let name = "";
//     const keys = Object.keys(employees);
//     for (const key of keys) {
//         if (max < employees[key]) {
//             max = employees[key];
//             name = key;
//         }
//     }
//     return name;
// };


// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// Task #4
// const countTotalSalary = function(employees) {
//     let sum = 0;
//     for (let salary of Object.values(employees)) {
//         sum += salary;
//     }
//     return sum;

// };

// console.log(countTotalSalary({})); // 0
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330
// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// Task #5
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//     const result = [];

//     for (product of arr) {
//         if (!product[prop]) {
//             return [];
//         }

//         result.push(product[prop]);
//     }

//     return result;
// };


// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// Task #6
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//     let totalPrice = 0;
//     for (product of allProdcuts) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }

//     }
//     return totalPrice;
// };


// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800