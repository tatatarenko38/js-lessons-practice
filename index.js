// let name;
// let age;

// let age = 10;
// let name = "Tata";

// console.log("Log:", age, name);

// let n = 10;
// console.log(n);

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const isAdmin = ivanRole === adminRole;
// const canBuy = ivanBalance >= productPrice;

// const result1 = isAdmin === true;
// const result2 = canBuy === true;

// const result = result1 === result2;

//ПЕРШЕ ПОЗИТИВНЕ

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;
// console.log(result);

//ФУНКЦІЯ

// function calcSpace(amount, unit) {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5, "px"));

//EVAL

// const code = "(5 + 5) % 5 === 0";
// console.log(eval(code));

// const code = `console.log('Hello')`;
// eval(code);

//isFinite

// function calcScreenRation(w, h) {
//   let result = w / h;
//   return isFinite(result) ? result : "Error";
// }
// console.log(calcScreenRation(1920, 1080));

//isNaN

// function calcScreenRation(w, h) {
//   let result = w / h;
//   if (isNaN(result)) {
//     return "Error";
//   } else if (!isFinite(result)) {
//     return "Is infinity";
//   } else {
//     return result;
//   }
// }
// console.log(calcScreenRation(1920, 123));

//parseInt
// const num = parseInt("10");
// console.log(num + 6);

//parseFloat
// const num = parseFloat("1.65235");
// console.log(num);

//encodeURI

// const domain = "it-brains.com.ua";
// function redirectToPath(path) {
//   const link = encodeURI(`https://${domain}/${path}`);
//   //робимо переход на сторінку
//   console.log(link);
//   return link;
// }

// const URI =
//   "https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info";
// function getURL(urlInURI) {
//   urlInURI = decodeURI(urlInURI);
//   console.log(urlInURI);
//   return urlInURI;
// }
// const path = "product/Мікрофон рожевий/info";
// const link = `https://${domain}/${path}`;
// const link1 = redirectToPath(path); //URI
// const link2 = getURL(link1); //decodeURI

// console.log(link === link2);

//NumberEPSILON

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// const d = a + b;

//console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);
// true -- рівні числа

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

//  Number.isInteger

// function rewiewNumber(num) {
//   if (isNaN(num)) {
//     return console.log("Is not a number", num);
//   }
//   if (!num && num !== 0) {
//     return console.log("bad number", num);
//   }

//   if (!Number.isInteger(num)) {
//     return console.log("Дробове число", num);
//   }
//   if (!Number.isSafeInteger(num)) {
//     return console.log("Небезпечне число", num);
//   }
//   return console.log(num);
// }

// rewiewNumber(9.3);
// rewiewNumber(Number.MAX_SAFE_INTEGER + 8);

/////////////////////////////////////////////////////////

//ВКЛАДЕНИЙ ОБ'ЄКТ

// const key = "tfudrurs";

// const a = {
//   amount: 100,
//   [key]: "hello",

//   info: {
//     name: "ivan",
//     age: 35,
//   },
// };
// console.log(a.info.name);

// const key = "tfudrurs";

// const a = {
//   amount: 100,

//   [key]: {
//     [key]: "ivan",
//     age: 35,
//   },
// };
// console.log(a[key][key]);

// const role = {
//   value: "admin",
//   status: 3,
// };

// const person = {
//   name: "Ivan",
//   age: 25,
//   occupation: "Розробник",

//   ...role,

//   address: {
//     city: "Київ",
//     street: "Соборна",
//     houseNumber: 10,
//   },

//   getAddress: function () {
//     // return "Адреса клієнта";
//     return this.address;
//   },
// };
// console.log(person.getAddress());

//console.log(person);

//Для перевірки наявності ключа

//console.log(!!person.name);
//або
//console.log("name" in person);

// for (const key in person) {
//  console.log(key);
//   console.log(person[key]);
// }

// for (const key in person) {
//   const item = person[key];

//   if (typeof item === "object") {
//     for (const key2 in item) {
//       console.log(item[key2]);
//     }
//   } else {
//     console.log(item);
//   }
// }

//ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ

// const {
//   age,
//   name,
//   address: { city, street },
// } = person;
// console.log(age, name, city, street);

// const {
//   age,
//   name,
//   address: { city, street, zipcode = 21018 },
//   ...rest
// } = person;
// console.log(age, name, city, street, zipcode);
// console.log(rest);

// function getAddress({
//   address: { city, street, houseNumber, zipcode = 21018 },
// }) {
//   return `Ваша адреса: ${city}, ${street}, ${houseNumber}, ${zipcode}`;
// }

// const test = getAddress(person);
// console.log(test);

//Якщо не вказано сіті і тд, то по замовчуванню

// function getAddress({ address }) {
//   if (address) {
//     const { city, street = "Не вказ", houseNumber, zipcode = 21018 } = address;
//     return `Ваша адреса: ${city}, ${street}, ${houseNumber}, ${zipcode}`;
//   }
//   return `Нема даних`;
// }

// const test = getAddress({ city: "Kuiv" });
// console.log(test);

//ЛІТЕРАЛ
// Number.prototype.toString = function () {
//   console.log(this);
// };
// const b = 1;
// b.toString();

//////////////////////////////////////////////////////////////////////////////

//SYMBOL

// const phoneBook = {
//   olga: "380671732339",
// };
// function addToPhoneBook(phone, id) {
//   const key = Symbol(id);
//   phoneBook[key] = phone;
//   return key;
// }
// const olga1id = addToPhoneBook("380671732339", "Olga");
// const olga2id = addToPhoneBook("380671700000", "Olga");

// console.log(phoneBook);
// console.log(phoneBook[olga1id]);
// console.log(olga1id.description);

// const user = {
//   name: "Olga",
//   id: 875446587,
//   bookId: null,

//   getPhone: function (book) {
//     return book[this.bookId];
//   },
// };

// const phoneBook = {
//   olga: "380671732339",
// };
// function addToPhoneBook(phone, user) {
//   const key = Symbol.for(user.id);
//   phoneBook[key] = phone;
//   user.bookId = key;
// // }
// const olga1id = addToPhoneBook("380671732339", user);
// const olga2id = addToPhoneBook("380671700000", user);

// console.log(user.getPhone(phoneBook));
// console.log(phoneBook);

// const a = Symbol("1");
// const b = Symbol("1");

// console.log(String(a) === String(b));
// console.log(String(a), String(b));
// console.log(a.description === b.description);
// console.log(a.toString === b.toString);

// const a = Symbol.for("1");
// const b = Symbol.for("1");

// console.log(a === b);
// console.log(a, b);

// const id = user.bookId;
// // console.log(Symbol.keyFor(id));

// const phoneBook = {
//   me: "380671732339",
//   name: "Phone Book",
// };
// for (const key in phoneBook) {
//   console.log(key);
// }

// for (const value in [1, 2, 3, 4, 5]) {
//   console.log(value);
// }

// for (const value of [1, 2, 3, 4, 5]) {
//   console.log(value);
// }

//Symbol.iterator
////////////////

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;

//     return {
//       next() {
//         if (this.current <= this.to) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };
// for (let num of range) {
//   console.log(num);
// }

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;

//     return this;
//   },
//   next() {
//     return this.current <= this.to
//       ? { done: false, value: this.current++ }
//       : { done: true };
//   },
// };

// for (let num of range) {
//   console.log(num);
// }

// const iterator = range[Symbol.iterator]();

// do {
//   console.log(iterator.current);
//   result = iterator.next();
// } while (!result.done);

// const arr = [1, 2, 3, 4, 5];
// const iterator = arr[Symbol.iterator]();
// result = iterator.next();

// do {
//   console.log(result.value);
//   result = iterator.next();
// } while (!result.done);

//Вбудовані можливості для масивів////////////////////////////////////////////////////////////////////

//Створення масиву з переданного значення////////////

// const obj = {
//   0: 'Hello',
//   1:'world',
//   2:'!!!',
//   length:3,
//   prefix:'():'
// }
// console.log(
//   Array.from(
//       obj,
//       function(elem, index){
//           return `${this.prefix}${elem}`;
//       },
//       obj
//   )
// );

//Перевірка на масив//////////////////////////////////////////

// const obj = {
//   0: "Hello",
//   1: "world",
//   2: "!!!",
//   length: 3,
//   prefix: "():",
// };
// const arr = Array.from(
//   obj,
//   function (elem, index) {
//     return `${this.prefix}${elem}`;
//   },
//   obj
// );
// console.log(Array.isArray(arr));

//Новий масив з заданними значеннями//////////////////////

// console.log(Array.of(1,2,3,4,5));

// const arr1 =[1,2,3];
// const arr2 =[4,5,6];

// console.log(Array.of(arr1,arr2));

// console.log(Array.of(...arr1, ...arr2));

// //АБО
// console.log([...arr1, ...arr2])

//ОТРИМАННЯ ЕЛЕМЕНТА ЗА ІНДЕКСОМ В МАСИВІ////////////////////
// const arr1 =[1,2,3];
// const arr2 =[4,5,6];

// console.log(arr1.at(1));

//ДОДАВАННЯ ЕЛЕМЕНТІВ У МАСИВ//////////

//const arr1 =[1,2,3];

//console.log(arr1.push(20,30,50,90));

// console.log(-(arr1.length - arr1.push(20,30,50,90)));

// console.log(arr1);

//ВИДАЛЕННЯ ОСТАННЬОГО ЕЛЕМЕНТУ/////////////////////
// const arr2 =[4,5,6];
//   console.log(arr2.pop());
//   console.log(arr2);

//ЗСУВ ЕЛЕМЕНТІВ МАСИВУ - ВИДАЛЕННЯ ПЕРШОГО ЕЛЕМЕНТУ....
// const arr3 =[2,4,5,7,9];
// console.log(arr3.shift());
// console.log(arr3);

//СКАСУВАННЯ ЗСУВУ - ДОДАВАННЯ ПЕРШИХ ЕЛЕМЕНТІВ.....
// const arr4 = [1,2,3,4,5];
// console.log(arr4.unshift(60,70));
// console.log(arr4);

//ЧИ ВКЛЮЧАЄ МАСИВ ПЕВНИЙ ЕЛЕМЕНТ......
// const arr4 = [30, 70, 90];
// console.log(arr4.includes(70));

//ПОШУК ІНДЕКСУ ЕЛЕМЕНТА за значенням.......знаходить перший ел. з початку
// const arr5 = [35, 27, 76, 98, 45, 76];
// console.log(arr5.indexOf(76));
// console.log(arr5.indexOf(100));

//ПОШУК ІНДЕКСУ ЕЛЕМЕНТА за значенням.......знаходить перший ел. з кінця
// const arr5 = [35, 27, 76, 98, 45, 76];
// console.log(arr5.lastIndexOf(76));
// console.log(arr5.lastindexOf(100));

//ОБ'ЄДНАННЯ МАСИВІВ........
// const arr1 = [1,2,3,4,5];
// const arr2 = [30, 70, 90];

// const arr3 = arr1.concat(...arr2);
// console.log(arr3);

//КОПІЮВАННЯ ЕЛЕМЕНТІВ У МАСИВІ//////
// const arr1 =[0,1,2,3,4,5,6,7,8,9];
// console.log(arr1);
//вказ. індекси - з якого заміняєм, що вставляєм - останній не враховується
// arr1.copyWithin(2,6,9)

// console.log(arr1);

//ЗАПОВНЕННЯ МАСИВУ
// const arr1 =[0,1,2,3,4,5,6,7,8,9];
// console.log(arr1);

// arr1.fill(345,5,7)

// console.log(arr1);

//РЕВЕРС МАСИВУ.....
// const arr1=[10,20,30,40];
// arr1.reverse();
// console.log(arr1);

//ФІЛЬТРУВАННЯ МАСИВУ.........
// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterFn = (value, index, array) => value % 2 === 0;
// const filterArr = arr1.filter(filterFn);
// console.log(filterArr);

//СОРТУВАННЯ МАСИВУ.....в порядку зростання
// const sortFn = (elem1, elem2) => elem1 - elem2;
// const sortedArr = [3,45,6,23,67,31].sort(sortFn);
// console.log(sortedArr);

//ПЕРЕВІРКА УМОВИ ДЛЯ КОЖНОГО ЕЛЕМЕНТУ МАСИВУ...
// const arr = [1,3,2,5,4,8];
// console.log(arr.every((elem, index, array)=>elem>=0));

// const arr1 = [1,3,-2,5,-4,8];
// console.log(arr1.every((elem, index, array)=>elem>=0));

//ПЕРЕВІРКА НА ХОЧА Б ОДИН ЕЛЕМЕНТ....
// const arr = [1, 3, 2, 5, 4, 8];
// console.log(arr.some((elem, index, array) => elem < 0));

// const arr1 = [1, 3, -2, 5, -4, 8];
// console.log(arr1.some((elem, index, array) => elem < 0));

//ЧАСТИНА 2/////////////////////////////////////////////////////////////////////////////////////////////////////

//ПОШУК ЕЛЕМЕНТУ У МАСИВІ..................................
// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 78, name: "Ivan", age: 35 },
//   { id: 543, name: "Anton", age: 41 },
// ];
// let minAge =30;
// const userBigAge = userList.find(({age}) => age >=minAge);
// console.log(userBigAge);

//ПОШУК ІНДЕКСУ У МАСИВІ..................................
//якщо не знайдено, то повертає -1
// const userList = [
//     { id: 1, name: "Dima", age: 19 },
//     { id: 78, name: "Ivan", age: 35 },
//     { id: 543, name: "Anton", age: 41 },
//   ];
//   let minAge =30;
//   const userBigAge = userList.findIndex(({age}) => age >=minAge);
//   console.log(userBigAge);

//ПОШУК ОСТАННЬОГО ЕЛЕМЕНТУ У МАСИВІ..................................
//   const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 78, name: "Ivan", age: 35 },
//   { id: 543, name: "Anton", age: 41 },
// ];
// let minAge =30;
// const userBigAge = userList.findLast(({age}) => age >=minAge);
// console.log(userBigAge);

//ПОШУК ОСТАННЬОГО ІНДЕКСУ У МАСИВІ..................................
//якщо не знайдено, то повертає -1
// const userList = [
//     { id: 1, name: "Dima", age: 19 },
//     { id: 78, name: "Ivan", age: 35 },
//     { id: 543, name: "Anton", age: 41 },
//   ];
//   let minAge =30;
//   const userBigAge = userList.findLastIndex(({age}) => age >=minAge);
//   console.log(userBigAge);

//КЛЮЧИ МАСИВУ....................................................
// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 78, name: "Ivan", age: 35 },
//   { id: 543, name: "Anton", age: 41 },
// ];
// const iter =userList.keys();
// for (const elem of iter){
//     console.log(elem);
// }

//ЗНАЧЕННЯ МАСИВУ....................................................
// const userList = [
//   { id: 1, name: "Dima", age: 19 },
//   { id: 78, name: "Ivan", age: 35 },
//   { id: 543, name: "Anton", age: 41 },
// ];
// const iter =userList.values();
// for (const elem of iter){
//     console.log(elem);
// }

//ОБ'ЄДНАННЯ МАСИВУ................................
// const arr = ["apple", "milk", "bread", "water"];
// console.log(arr.join(", "));

//ВИДАЛЕННЯ ТА ВСТАВКА ЕЛЕМЕНТЫВ МАСИВУ.............
// const arr = ["apple", "milk", "bread", "water", "hotdog"];
// const arrSmall = arr.splice(1, 2, "tea", "cheese");
// console.log(arrSmall);
// console.log(arr);

//Вирізати але не змінити попередній масив
// const arr1 = ["apple", "milk", "bread", "water", "hotdog"];
// const arrSmaller = [...arr1].splice(1, 2, "tea", "cheese");
// console.log(arrSmaller);
// console.log(arr1);

//Просто видалити
// const arr = ["apple", "milk", "bread", "water", "hotdog"];
// const arrSmall = arr.splice(1, 2);
// console.log(arrSmall);
// console.log(arr);

//Просто додати
// const arr = ["apple", "milk", "bread", "water", "hotdog"];
// const arrSmall = arr.splice(1, 0, ...userList);
// console.log(arrSmall);
// console.log(arr);

//КОПІЯ ЧАСТИНИ МАСИВУ.........................
// const arr = ["apple", "milk", "bread", "water", "hotdog"];
// const arrSmall = arr.slice(1, 3);
// console.log(arrSmall);
// console.log(arr);

//ЗВЕДЕННЯ МАСИВУ.............................
//сумма всіх балансів//////////////////////
// const userList = [
//   { id: 1, name: "Dima", age: 19, balans: 150 },
//   { id: 78, name: "Ivan", age: 35, balans: 10500 },
//   { id: 543, name: "Anton", age: 41, balans: 0 },
// ];
// const totalBalans = userList.reduce((num, user) => num + user.balans, 0);
// console.log(totalBalans);
// найбільший вік/////////////////////////////////////
// const result = userList.reduce(
//   (num, user, userIndex, array) => {
//     console.log(num, user.age);
//     return user.age > num ? user.age : num;
//   },
//   1
// );
// console.log(result);

//ЗВОРОТНЄ ЗВЕДЕННЯ МАСИВУ.............................
//найбільший вік, але порівняння з кінця
// const userList = [
//     { id: 1, name: "Dima", age: 19, balans: 150 },
//     { id: 78, name: "Ivan", age: 35, balans: 10500 },
//     { id: 543, name: "Anton", age: 41, balans: 0 },
//   ];
//   const result = userList.reduceRight(
//   (num, user, userIndex, array) => {
//     console.log(num, user.age);
//     return user.age > num ? user.age : num;
//   },
//   1
// );
// console.log(result);

//НОВИЙ МАСИВ ДЛЯ КОЖНОГО ЕЛЕМЕНТА/////////////////////////////////
//  const userList = [
//         { id: 1, name: "Dima", age: 19, balans: 150 },
//         { id: 78, name: "Ivan", age: 35, balans: 10500 },
//         { id: 543, name: "Anton", age: 41, balans: 0 },
//       ];

      //створили масив користувачів
    //   const result = userList.map((user, index, array) =>{
    //     return user.name;
      //})
     // console.log(result.join(", "));
      //скільки не вистачає, щоб баланс був 1000
    //   const result = userList.map((user, index, array) =>{
    //     user.balansLimit = 1000 - user.balans;
    //     if(user.balansLimit<0){
    //         user.balansLimit=0;
    //     }
    //     return user;
    //   })
    //   console.log(result);

      //РОЗГОРТАННЯ ВКЛАДЕНИХ МАСИВІВ......................................
    //   const flatArray =[[[111,222],[333,444]],[555,666],[777,888]];
    //   console.log(flatArray.flat());
    //   console.log(flatArray.flat(2));

    //НОВИЙ РОЗГОРНУТИЙ МАСИВ ДЛЯ КОЖНОГО ЕЛЕМЕНТА.....................
    //const flatArray =[[[105,210],[220,350]],[[110,230],[240,350]]];
    //різниця між елементами масиву
    // const result = flatArray.flatMap((el => {
    //     return el.map((it) =>{
    //         return it[0] - it[1];
    //     })
    // }))
    // console.log (result);

    //ПЕРЕБРАТИ МАСИВ...............................................
    // const flatArray =[[[105,210],[220,350]],[[110,230],[240,350]]];
    //різниця між елементами масиву
    // const result = flatArray.flatMap((el => {
    //     return el.map((it) =>{
    //         return it[0] - it[1];
    //     });
    // }));
    // console.log (result);
    // result.forEach((elem, index, array) => {
    //     console.log(elem);
    // });

