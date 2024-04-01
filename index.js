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

//ВБУДОВАНІ МОЖЛИВОСТІ ДЛЯ ОБ'ЄКТІВ.......................................................
//////////////////////////////////////////////////////////////////////////////////////////

//КОПІЮВАННЯ ВЛАСТИВОСТЕЙ ОБ'ЄКТІВ//////////////////////////////////////////

// const article ={
//   id:453254,
//   title:"My article",
//   description: "This is info ...",
//   categoryId: 1423,
//   likeAmount:434,
// }
// const aticlePhoto ={
//   photoUrl:"...url",
//   photoId: 5436,
//   photoType:"big",
// }
// const articleCommentList ={
//   list:[{id:6547, user:"Ivan", message:"Крутий контент"}]
// }
// Object.assign(article,aticlePhoto,articleCommentList);
// console.log(article);

//МАСИВ ВЛАСТИВОСТЕЙ//////////////////////////////////
// const article ={
//   id:453254,
//   title:"My article",
//   description: "This is info ...",
//   categoryId: 1423,
//   likeAmount:434,
// }
// const aticlePhoto ={
//   photoUrl:"...url",
//   photoId: 5436,
//   photoType:"big",
// }
// const articleCommentList ={
//   list:[{id:6547, user:"Ivan", message:"Крутий контент"}]
// }
// Object.assign(article,aticlePhoto,articleCommentList);
// console.log(Object.entries(article));

//АБО///
// const article = {
//   info: { title: "My article", description: "This is info ..." },
//   id: 453254,
//   title: "My article",
//   description: "This is info ...",
//   categoryId: 1423,
//   likeAmount: 434,
// };
// const articleField = {
//   title: "ID статті",
//   description: "Заголовок статті",
// };
//console.log(Object.entries(article.info));
//const formList = Object.entries(article.info);
//const formListLayout = formList.map(([key, value]) => {
//повертаємо рядок
// return `${articleField[key]} : ${value}`;
//повертаємо масив
// return [articleField[key],value];
//повертаємо верстку
//return `<p><strong>${articleField[key]} </strong> <br> <span> ${value} </span> </p>`;

//});
//console.log(formListLayout);

//ОБ'ЄКТ З МАСИВУ ВЛАСТИВОСТЕЙ///////////////////////////////////////

// const objArr = [
//   ["id", 352618],
//   ["title", "My product"],
//   ["price", 4350],
// ];
// console.log(Object.fromEntries(objArr));

//ПЕРЕВІРКА ЧИ ІСНУЄ ВЛАСТИВІСТЬ ОБ'ЄКТА....//////////////////
// const article ={
//   id:453254,
//   title:"My article",
//   description: "This is info ...",
//   categoryId: 1423,
//   likeAmount:434,
// }
// console.log(article.hasOwnProperty("id"));

//ПЕРЕВІРКА ВЛАСТИВОСТЫ НА ПЕРЕРАХОВАНЫСТЬ.....////////////////////
// const article = {
//   id: 453254,
//   title: "My article",
//   description: "This is info ...",
//   categoryId: 1423,
//   likeAmount: 434,
// };
// console.log(article.propertyIsEnumerable("id"));

//ЗАМОРОЗИТИ ОБ'ЄКТ////////////////

//Object.freeze(article);

//ПЕРЕВІРКА НА ЗАМОРОЗКУ ОБ'ЄКТА//////////

//console.log(Object.isFrozen(article));

//ЗАБОРОНА РОЗШИРЕННЯ ОБ'ЄКТУ///////////////////////
//Object.preventExtensions(article);

//ПЕРЕВІРКА НА ЗАБОРОНУ РОЗШИРЕННЯ ОБ'ЄКТУ////

//console.log(Object.isExtensible(article));
//якщо є заборона - буде false

//ЗАПЕЧАТУВАННЯ ОБ'ЄКТА//////
// Object.seal(article);
// delete article.id;
// console.log(article.id);

//ПЕРЕВІРКА ЧИ ЗАПЕЧАТАНИЙ ОБ'ЄКТ/////
// console.log(Object.isSealed(article));

//ОТРИМАННЯ КЛЮЧІВ ОБ'ЄКТА///////

//console.log(Object.keys(article));

//ОТРИМАННЯ ЗНАЧЕНЬ ВЛАСТИВОСТЕЙ ОБ'ЄКТА//

//console.log(Object.values(article));

///////МНОЖИНА/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//СТВОРЕННЯ МНОЖИНИ/////////////////
//  const set = new Set([123,123,123,"123", null])
// console.log(set);

//const userIdList = new Set([23415, 45873, 78624, 76351]);
//console.log(userIdList);

//  for of ДЛЯ МНОЖИНИ......
// for(const value of userIdList){
//   console.log(value);
// }

//ФУНКЦІЯ ДЛЯ КОЖНОГ ЕЛЕМЕНТА   forEach  ///////////////

//userIdList.forEach((value,value2,set)=> console.log(value));

/////////РОЗМІР МОЖИНИ   size  //////////////
//console.log(userIdList.size);

///////  ДОДАВАННЯ ЕЛЕМЕНТУ ДО МНОЖИНИ  add(value)  //////////////

// userIdList.add(76351);
// console.log(userIdList);
// console.log(userIdList.size);

// userIdList.add(99990);
// console.log(userIdList);
// console.log(userIdList.size);

///////  ВИДАЛЕННЯ ЕЛЕМЕНТУ ДО МНОЖИНИ  delete(value)  //////////////

// userIdList.delete(76351);
// console.log(userIdList);
// console.log(userIdList.size);

/////ПЕРЕВІРКА НАЧВНОСТІ ЗНАЧЕННЯ  has   ///////////////

// console.log(userIdList.has(76351));
// console.log(userIdList.has(99990));

//////ВИДАЛЕННЯ ВСІХ ЕЛЕМЕНТІВ   clear()  ///////////

// userIdList.clear();
// console.log(userIdList);

/////  КЛЮЧИ ДЛЯ КОЖНОГО ЕЛЕМЕННТУ  keys()  ///////

// const key = userIdList.keys();
// console.log(key);

///// ЗНАЧЕННЯ КОЖНОГО ЕЛЕМЕНТУ values()  /////

// const value = userIdList.values();
// console.log(value);

//////////////  ПЕРЕТВОРЕННЯ В ІНШИЙ ТИП ДАННИХ  entries()  ///////

// Отримання об'єкту
// const entrie = userIdList.entries();
// const obj = Object.fromEntries(entrie);
// console.log(obj);

//Отримання масиву
//   const valueList = userIdList.values();
// const arr = Array.from(valueList);
// console.log(arr);

//Уникнути дублювання

// const arr =[1,2,3,4,3,5,3,2,6];
// const set = new Set(arr);

//деструктуризація

//const arr2 = [...set];

//або
// const arr2 = Array.from(set.values());

//або
//     const arr2 = Array.from(set);
// console.log(arr2);

//   додавання категорії
// const categoryList = new Set();
// function addCategory(category){
//   if(categoryList.has(category)){
//     console.log(`ця категорія вже є`);
//     return false;
//   }
//   categoryList.add(category);
//   return true;

// }

// console.log(addCategory("спорт"));
// console.log(addCategory("спорт"));
// console.log(addCategory("їжа"));

//взнати список курсів
// const students = [
//   {id:1, name:"Ivan",course:"Math"},
//   {id:2, name:"Vasa",course:"Science"},
//   {id:3, name:"Petya",course:"Math"},
//   {id:4, name:"Anton",course:"English"},
//   {id:5, name:"Olga",course:"Science"},
// ];
// const course = students.map((student) => student.course);
// console.log(course);
// const courseList = new Set(course);
// console.log(courseList);

///////   СЛОВНИК    /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//           СТВОРЕННЯ  new Map[[()]]   ////////////////////////////

// const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
//console.log(button);

//з об'єкта
// const obj = {
//   color: 'red',
//   size: '32' + 'px',
// }
// const button2 = new Map(Object.entries(obj));
// console.log(button2);

//з множини

// const set = new Set(['red', '32px']);
// const button3 = new Map(set.entries());
// console.log(button3);

//  з словника в множину ключів

// const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
// const set2 = new Set(button.keys());
// console.log(set2);

//  з словника в множину значень
// const set2 = new Set(button.values());
// console.log(set2);

////  for ......of   //////

//    const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
// for(const[key, value] of button){
//   console.log(key,value);
// }
// отримання ключів з словника через перетворення на об1єкт ....

// for(const value in Object.fromEntries(button.entries())){
//   console.log(value)
// }

//  forEach  ////
//button.forEach((value,key, map) => console.log(value,key, map));

//    .size   розмір словника  ....
// const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
//console.log(button.size);

//  ДОДАВАННЯ ЕЛЕМЕНТА  .set(key,value)   ////

// const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
//button.set('weight', 600);
//console.log(button);

//ОТРИМАННЯ ЕЛЕМЕНТА  .get(key)  ///
// const button = new Map([
//   ["color", "red"],
//   ["size", "32"],
// ]);
//console.log(button.get("size"));

//ВИДАЛЕННЯ ЕЛЕМЕНТУ  .delete(value)  //

// console.log(button.delete("color"));
// console.log(button);

//ПЕРЕВІРКА НАЯВНОСТІ ЗНАЧЕННЯ  .has(value) //

//console.log(button.has("color"));

//  ВИДАЛЕННЯ ВСІХ ЕЛЕМЕНТІВ .clear()  //
// button.clear();
// console.log(button);

//  зміна мови сайту ....
// const LANG_LIST = {
//   UA: "uk-UA",
//   EU: "eu-EU",
// };
// const activeLang = LANG_LIST.UA;
// const product = {
//   price: 100,
//   amount: 3,

//   info: new Map([
//     [LANG_LIST.UA, { title: "Заголовок", info: "Інформація" }],
//     [LANG_LIST.EU, { title: "Title", info: "info" }],
//   ]),
// };
// const info = product.info.get(activeLang);
// console.log(info);

//----Список клієнтів та придбаних ними товарів
// const user1 ={
//   id: 35678,
//   name:"Ivan",
// }
// const user2 ={
//   id: 35679,
//   name:"Anton",
// }
// const product1 ={
//   id: 6785,
//   title:"Mobail phone",
// }
// const product2 ={
//   id: 9985,
//   title:"Apple",
//}
// const userProduct = new Map();
// userProduct.set(user1,product1).set(user2,product2);
// console.log(userProduct);
// console.log(userProduct.has(user1));

//Список клієнтів певного продукту

// const productClientList = new Map([[product1, new Set()]]);
// productClientList.set(product1, productClientList.get(product1).add(user1));
// console.log(productClientList);

// productClientList.set(product1, productClientList.get(product1).add(user2));
// console.log(productClientList);

// перевірка чи є клієнт

// const has = productClientList.get(product1).has(user1);
// console.log(has);

//  JSON   //  URL   /////////////////////////////////////
//////////////////////////////////////////////////////////

// const roleField = "roleName";
// const data = {
//   id: 1843,
//   login: "user1324",
//   password: "12345",
//   [roleField]: "Admin",
// };
// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (key === roleField) {
//       return null;
//     }
//     if (typeof value === "string") {
//       return value.toUpperCase();
//     }
//     if (typeof value === "number") {
//       return value * 10;
//     }
//     return value;
//   },
//   5
// );
// console.log(jsonData);

// const parseData = JSON.parse(jsonData, (key, value) => {
//   if (key === roleField) {
//     return "Admin";
//   }
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value / 10;
//   }
//   return value;
// });
// console.log(parseData);

/////           URL              ///////////////

// const url = new URL('https://www.example.com/path');
// console.log(url);
//url.searchParams.delete('search');
// console.log(url);

//  ДАТА ТА ЧАС /////////     DATE   ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Поточний час   але за Грінвічем///////////////////
//  const date = new Date();
//  console.log(date);

//  ISO форматі рядком /////
// const date = new Date();
// const dateString = date.toISOString();
// console.log(dateString);

// рядок використовуємо як аргумент для створення нової дати ////
//console.log(new Date(dateString));

//отрим дати з рядка в форматі ISO в мілісекундах  //
//console.log(Date.parse(dateString));

//   або  ///
// const date2 = Date.parse(dateString);
// console.log(date2);

//  час через 5 хвилин  ////

// const date2 = Date.parse(dateString) + 1000 * 60 * 5;
//  console.log(date2);

// перетворення дати в рядок тексту  ///
// const date = new Date();
// const dateString = date.toISOString();
// console.log(date.toString());
// console.log(date.toUTCString());

// console.log(date.toISOString());

// console.log(date.toTimeString());
// console.log(date.toDateString());

//  Отримати зсув час.поясу (в годинах)  ///
// const date = new Date();
// const zone = date.getTimezoneOffset() / -60;
// console.log(zone);

// перетворення на таймзону користувача
// const user = -3;
// function getUserTimeZone(timeZone) {
// let date = Date.now();
// поточний таймзон
// const myTimezone = new Date().getTimezoneOffset() / -60;
// console.log(myTimezone);

//return date.toString();
//}
// в мілісекундах
//console.log(getUserTimeZone(user));

// в норм вигляді
//console.log(new Date().toString(1710148564673));

//  перевести наш час (наш таймзон) в нульовий таймзон (в мілісек)
// const user = -3;
// function getUserTimeZone(timezone) {
// let date = Date.now();
// const myTimezone = new Date().getTimezoneOffset() / -60;

//тримаємо нульвий таймзон
//date -= 1000 * 60 * 60 * myTimezone;

// нульовий таймзон користувача  ///
//date += 1000 * 60 * 60 * timezone;

//return date;
//}
//в мілісекундах
//console.log(getUserTimeZone(user));

//в норм вигляді
//console.log(new Date(getUserTimeZone(user)).toString());

// перевірити з поточ часом по Грінвічу ///
//console.log(new Date().toUTCString());

// наш час та час користувача локальний та за Грінвічем(UTC)
// const user = -3;
// function getUserTimeZone(timezone) {
//   let date = new Date(Date.UTC(2024, 2, 11, 12, 30, 0, 0));
//   console.log(date.toString());
// console.log(date.toUTCString());

//   const myTimezone = date.getTimezoneOffset() / -60;
//   date.setTime(date.getTime() - 1000 * 60 * 60 * myTimezone);
//   date.setTime(date.getTime() + 1000 * 60 * 60 * timezone);
//   return date
// }
// const userDate = getUserTimeZone(user);
// console.log(userDate.toString());
// console.log(userDate.toUTCString());

// отримання(getHours()) та встановлення(setHourse()) годин з об'єкту дати //////
// const user = -3;
// function getUserTimeZone(timezone) {
// let date = new Date(Date.UTC(2024, 2, 11, 12, 30, 0, 0));
// console.log(date.getHours());
// console.log(date.getUTCHours());

// date.setHours(date.getUTCHours() + timezone);
// return date;
// }
// const userDate = getUserTimeZone(user);
// console.log(userDate.getHours());
// console.log(userDate.getUTCHours());

// console.log(userDate.toTimeString());

//  повертає рік за датою  .getFullYear()   ////
// const date = new Date();
// const dateString = date.toISOString();

// console.log('year', date.getFullYear());
// date.setFullYear(2022);
// console.log('year', date);

// за місяцем

// console.log('month', date.getMonth());
// date.setMonth(0);
// console.log('month', date.getMonth());

// за днем місяця
// console.log('date', date.getDate());
// date.setDate(4);
// console.log('date', date.getDate());
// console.log(date);

// за днем тижня
// console.log('day', date.getDay());
// console.log(date);

// якщо сразу в console.log , то буде в мілісек
//console.log(date.setMonth(0));

////     МАТЕМАТИКА    Math.   ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//console.log(Math.PI);

////  max   i    min   ////////////

// const a = 5;
// const b = 10;
// const c = -5;
// const d = 0;

// const arr = [20,30,40];

// console.log(Math.max(a,b,c,...arr));
// console.log(Math.min(a,b,c,...arr));

// знак числа в аргументі  //////////

// console.log(Math.sign(a));
// console.log(Math.sign(c));
// console.log(Math.sign(d));

//// Піднесення до ступеня   ///////////

// console.log(Math.pow(4,3));
// console.log(Math.pow(a,3));

//     квадратний корінь   ///////

// console.log(Math.sqrt(36));
// console.log(Math.sqrt(a));

///   округлення числа   /////

// console.log(Math.floor(1.123), Math.floor(1.5), Math.floor(1.923));

// console.log(Math.ceil(1.123), Math.ceil(1.5), Math.ceil(1.923));

// console.log(Math.round(1.123), Math.round(1.5), Math.round(1.923));

// console.log(Math.trunc(1.123), Math.trunc(1.5), Math.trunc(1.923));

///    випадкове число    /////////////////// Math.random() (0 - 0.99999999999999)

//console.log(Math.random());

// (0 - 9)
// const random = Math.trunc(Math.random() * 10);
// console.log(random);

// (0 - 10)
// const random = Math.trunc(Math.random() * 10) + 1;
// console.log(random);

// (0 - 100)
// const random = Math.trunc(Math.random() * 100) + 1;
// console.log(random);

//  Округлення числа до точних значень   /////
//// з формату duoble(8 байтів) до float(4 байта)  ///

// console.log(0.1 + 0.2 === 0.3);
// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));

// console.log(Math.fround(0.1 + 0.2));
// console.log(Math.fround(0.3));

// console.log(0.1 + 0.2);
// console.log(0.3);

////   КОНСОЛЬ   ///////////////////////////////////////
/////////////////////////////////////////////////////

// {let a = 5;
//  a = 10;}

//  console.error("Error, змінна а має бути 5");

//   ГРУПУВАННЯ  ////////////

// console.group("group1");
// console.log("test1");
// console.warn("test2");
// console.info("test3");

// console.group("group2");
// console.log("test4");
// console.debug("test5");
// console.groupEnd();

// console.groupEnd();

///  Вимірювання часу  ///////////////////////////////

// const countLabel = "Timer";
// console.time(countLabel);

// console.group("group1");
// console.log("test1");
// console.warn("test2");
// console.info("test3");

// console.timeLog(countLabel);

// console.group("group2");
// console.log("test4");
// console.debug("test5");
// console.groupEnd();
// console.groupEnd();

// console.timeEnd(countLabel);

///    Вимірювання кількості виконання  /////////

// const countLabel = "Counter";
// console.count(countLabel);

// console.group("group1");
// console.log("test1");

// console.count(countLabel);

// console.warn("test2");
// console.info("test3");
// console.group("group2");

// console.count(countLabel);
// console.countReset(countLabel);

// console.log("test4");
// console.debug("test5");
// console.groupEnd();
// console.groupEnd();

// console.count(countLabel);

// Відстеження викликів  ////

// const test1 = () => console.trace("Hello");
// const test2 = () => test1();
// const test3 = () => test2();
// test3();

//         Таблиця консолі   //////////////

// const data = [
//   { name: "Alic", age: 30, citi: "New York" },
//   { name: "Ivan", age: 34, citi: "London" },
// ];
// console.table(data);
// console.table(data, ["name","age"]);

//    Перевірка умови (якщо умова не виконується)     //////////

// const a = 5;
// const b = 10;

// const result = a > b;
// console.assert(result, "info");

//console.log("%cHello World", "color: yellow; background-color: blue; font-size: 50px");

//////             РЕГУЛЯРНІ ВИРАЗИ    .....//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// const regexp = /test/gmsi;
// console.log(regexp);

// console.log(regexp.flags);

// console.log(regexp.global);

// console.log(regexp.multiline);

// console.log(regexp.dotAll);

// console.log(regexp.ignoreCase);

///     виконання регулярного виразу   .exec ////

// const regexp = /test/gmsi;
// const result = regexp.exec('This is test');
// console.log(result[0]);

//   створення груп    ///////

//const regexp = /(?<group1>.e)(?<group2>st)/gims;

//const result = regexp.exec('This is test and est');
// console.log(result);
//  console.log(result.groups);

// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));

//  перевірка наявності збігу   .test  /////
//console.log(regexp.test("This is test and est"));

// повертає вихідний текст або шаблон рег виразу  .source///
//console.log(regexp.source);

//останній індекс    ///
// regexp.lastIndex = 9;
// console.log(regexp.exec("This is test and est"));

//  заміна рядків    ///////////
// const regexp = /(?<group1>.e)(?<group2>st)/gims;
// const test = "This is test and est";
// console.log(test.replaceAll(regexp,"###"));

//  пошук підрядка в рядку   ////////////////
//  const regexp = /(?<group1>.e)(?<group2>st)/gims;
//  const test = "This is test and est";
// console.log(test.search(regexp));

//  пошук збігів у рядку  //////////
// const regexp = /(?<group1>.e)(?<group2>st)/gims;
// const test = "This is test and est";
//console.log(test.match(regexp));

//  const result = test.matchAll(regexp);
//  console.log(result.next());
// console.log(result.next());
// console.log(result.next());

//  ОБРОБКА ПОМИЛОК     //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// try {
//   const a = 10;

//   a = 5;
//   console.log('не виконується')
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("2");
// }

//   створення помилки  \\\\\

// function getUserData(userId) {
//   try {
//     const a = 10;
//     a = 5;
//     // .... робить запит до бази данних
//   } catch (err) {
//     // err - помилка про те, що данні з сервера не можуть бути отримані
//     const newError = new Error(
//       `Помилка.Неможливо отримати дані користувача ${userId}`,
//       {
//         cause: err,
//       }
//     );
//     console.log(newError);
//   }
// }
// //getUserData(12345);

// function updateUserData(userId) {
//   try {
//     const data = getUserData(userId);
//     data.name = "Ivan";
//     //  ......
//   } catch (err) {
//     // err - помилка про те, що данні з сервера не можуть бути отримані
//     const newError = new Error(
//       `Помилка.Неможливо оновити дані користувача ${userId}`,
//       {
//         cause: err,
//       }
//     );
//     console.log(newError);
//   }
// }
// updateUserData(3344);

// оператор 'кинути' throw  ///////
// function getUserData(userId) {
//     try {
//       const a = 10;
//       a = 5;
//       // .... робить запит до бази данних
//     } catch (err) {
//       // err - помилка про те, що данні з сервера не можуть бути отримані
//       throw newError = new Error(
//         `Помилка.Неможливо отримати дані користувача ${userId}`,
//         {
//           cause: err,
//         }
//       );
//       console.log(newError);
//     }
//   }
//getUserData(12345);

//   function updateUserData(userId) {
//     try {
//       const data = getUserData(userId);
//       data.name = "Ivan";
//       //  ......
//     } catch (err) {
//       // err - помилка про те, що данні з сервера не можуть бути отримані
//       const newError = new Error(
//         `Помилка.Неможливо оновити дані користувача ${userId}`,
//         {
//           cause: err,
//         }
//       );
//       console.log(newError);

//       // просто отримати повідомлення про помилку
//       //console.log(newError.message);

// причина помилки
//console.log(newError.cause);

//стек викликів
//console.log(newError.stack);

// помилка у форматі рядка
//console.log(newError.toString);

//     }
//   }
//updateUserData(3344);

//   function sumNum(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number' ){
//        throw new Error(`Аргументи не є числами`);
//     }
//     return a+b;
//   }
//  try{
//     sumNum(5, 'abc');
//  }catch(err){
//     console.log(err.message);
//  }

//  .name помилки  /////

// const ERROR_ID_LIST = {
//   NOT_NUMBER: 1,
// };
// function sumNum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     const error = new TypeError(`Аргументи не є числами`);
//     error.name = ERROR_ID_LIST.NOT_NUMBER;
//     throw error;
//   }
//   return a + b;
// }
// try {
//   sumNum(5, "abc");
// } catch (err) {
//   if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
//     sumNum(5, 0);
//   }
//   console.log(err.name);
// }

///   ОБ'ЄКТНО-ОРІЄНТОВАНЕ ПРОГРАМУВАННЯ    /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

///   Створення об'єкта з прототипом  Object.create(proto, propertiesObject)

// let Animal = {
//   name: "Тварина",
//   voice: "Звук",
//   say() {
//     console.log(`${this.name} каже ${this.voice}`);
//   },
// };
// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";
// dog.say();
// console.log(dog);

// Animal.go = function(){
//     console.log(`${this.name} біжить`);
// }
// dog.go();

//Отримати об'єкт прототипу Object.getPrototypeOf(obj) //

//технічна
// console.log(dog.__proto__)

// console.log(Object.getPrototypeOf(dog));
// console.log(Object.getPrototypeOf(dog) === Animal);

// перевірка чи є об'єкт прототипом  .isPrototypeOf(obj)  //

// console.log(Animal.isPrototypeOf(dog));

//  змінити прототип   Object.setPrototypeOf(obj, prototype)//

// Object.setPrototypeOf(dog, {asd: 5});
// console.log(Object.getPrototypeOf(dog));

//Визначення налаштування властивості ////

// Object.defineProperty(obj, "prop", descriptor)
//Object.defineProperties(obj, {props})

// let Animal = {
//   name: "Тварина",
//   voice: "Звук",
//   say() {
//     console.log(`${this.name} каже ${this.voice}`);
//   },
// };
// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";

//   Object.defineProperty(dog, "age",{
//     set(value){
//         this._age = value * 2;
//     },
//     get(){
//         return `${this._age || 0} років`;
//     },
//   } )
//   console.log(dog.age);

//   dog.age = 15;
//   console.log(dog.age);

//   delete dog.age;
//    console.log(dog.age);

/// Налаштування для  value   ///////////////////////

// Object.defineProperty(dog, "location",{
//    value: 'Ukrain',
//    writable:true,
//    configurable: true,
//    enumerable:true,
//   } )
//   console.log(dog.location);
//   console.log(dog);

///  Виводить масив  ключів
//console.log(Object.keys(dog));

//Інкапсуляція      _властивість

// Object.defineProperty(dog, "_space", {
//   value: 0,
//   writable: true,
//   enumerable: true,
// });

// Object.defineProperty(dog, "space", {
//   set(value) {
//     this._space = value * 4;
//   },
//   get() {
//     return `${this._space}px`;
//   },
// });
// console.log(dog.space);
// dog.space = 4;
//console.log(Object.keys(dog));

//   отримання налаштування властивості
//Object.getOwnPropertyDescriptor(obj,prop )
//Object.getOwnPropertyDescriptors(obj )

// console.log(Object.getOwnPropertyDescriptor(dog, "_space"));
// console.log(Object.getOwnPropertyDescriptor(dog, "space"));

//   чи властивість належить об'єкту, а не була успадкована
// Obj.hasOwnProperty("prop")

// console.log(dog.hasOwnProperty("voice"));
// console.log(dog.hasOwnProperty("say"));

///  Поліморфізм  ////////////////

// const Tag = {
//     render(value){
//         return `<>${value}<>`;
//     }
// }
// const Button = Object.create(Tag);

// Button.render = function(value = ""){
//     return `<button style ="${this.style}">${value}<button>`;
// }

// const mainButton = Object.create(Button, {
//     style: {
//         value: "background: red;",
//         writable:true,
//     }
// })

// console.log(mainButton.render("Click"));

// const Input = Object.create(Tag);

// Input.render = function(){
//     return `<Input placeholder="${this.placeholder}" style ="${this.style}"`;
// }

// const loginInput = Object.create(Input, {
//     style: {
//         value: "border:1px solid red;",
//         writable:true,
//     },
//     placeholder:{
//         value: "Login..."
//     },
// })

// console.log(loginInput.render());

// const serverRequest = {
//     data: null,
//     getData(){
//         ////.....
//     },
//     render(){
//         this.data = this.getData();
// // iнше ніж в Tag
//         return `...`
//     }
// }

/////    Функція КОНСТРУКТОР    ///////////////////////////
///////////////////////////////////////////////////////////

// function User({login = null, password = null, isAdmin = null, age = 0}){
//     this.login = login;
//     this.password = password;
//     this.role = isAdmin ? "Admin" : "User";
//     this.age = age;

//     this.verify = function(password){
//         return this.password === password;
//     }
// }

// const registerData = {
//   login: "Ivan",
//   password: "123dgfhy",
// };
// const user = new User(registerData);
// console.log(user.verify("tyref"));

// const adminData = {
//   login: "Ivan",
//   password: "123dgfhy",
//   isAdmin: true,
// };
// const admin = new User(adminData);
// console.log(admin.password);

// const testData = {
//   login: "Ivan",
//   password: "123dgfhy",
// };
// const testUser = new User(testData);
// console.log(testUser.login);

///   Перевірка на наявність new      new.target   ////
// function User(data) {
//   console.log("new", new.target);

//   if (new.target) {
//     const { login = null, password = null, isAdmin = null, age = 0 } = data;

//     this.login = login;
//     this.password = password;
//     this.role = isAdmin ? "Admin" : "User";
//     this.age = age;

//     this.verify = function (password) {
//       return this.password === password;
//     };
//   } else {
//    return new User(data);
//   }
// }
// const registerData = {
//   login: "Ivan",
//   password: "123dgfhy",
// };
// const user = new User(registerData);
// console.log(user.verify("tyref"));

// const adminData = {
//   login: "Ivan",
//   password: "123dgfhy",
//   isAdmin: true,
// };
// const admin = new User(adminData);
// console.log(admin.password);

// const testData = {
//   login: "Ivan",
//   password: "123dgfhy",
// };
// const testUser =new User(testData);
// console.log(testUser.login);

/// Спрощений запис без this у функції-конструкторі і без new  y const ////

// function User(data) {
//   if (new.target) {
//     const { login = null, password = null, isAdmin = null, age = 0 } = data;
//     const role = isAdmin ? "Admin" : "User";

//     const object = Object.assign(this, {
//       login,
//       password,
//       role,
//       age,
//     });

//     if (role === "Admin") {
//       object.verify = function (password) {
//         console.log(password, this)
//         return this.password === password;
//       };
//     }
//     if (age >= 50) {
//       object.login = String(object.login).toUpperCase();
//     }

//     ///   Перезапис вбудованих функцій  .valueOf()  .toString()
//     object.toString = function () {
//       return `Користувач ${this.login}`;
//     };
//   } else {
//     return new User(data);
//   }
// }

// const registerData = {
//   login: "ivan",
//   password: "123dgfhy",
//   isAdmin: true,
//   age: 50,
// };
// const user = User(registerData);

// console.log(user.toString());
// console.log(user.verify("tyref"));

// const adminData = {
//   login: "Ivan",
//   password: "123dgfhy",
//   isAdmin: true,
// };
// const admin = User(adminData);
// console.log(admin.password);

// const testData = {
//   login: "ivan",
//   password: "123dgfhy",
//   age: 50,
// };
// const testUser = User(testData);
// console.log(testUser.login);

// console.log(Object.getPrototypeOf(testUser) === User.prototype);

//  Додати нову властивість до
// const object = Object.assign(this, {
//       login,
//       password,
//       role,
//       age,
//     });

// User.prototype.test = "hello";
// console.log(user.test);

//  Кількість параметрів функції  .length
//console.log(User.length);

// Назва функції   .name

// const test = User;
// console.log(test.name);

// console.log("================");
//console.log(user.verify("123dgfhy"));

/// Застосування функції  .apply(thisArg, argsArray)

// const verifyUser = user.verify;
// console.log(verifyUser.apply(user,["123dgfhy"]));

//   Прив'язка функції   bind(thisArg, arg1, ... argN)

// const verifyUser = user.verify.bind(user, "123dgfhy");
// console.log(verifyUser());

/// Виклик функції   call(thisAfg, arg1, ... , argN)

// function Animal(name){
//     this.name = name;
// }
// function Person(name, age){
//     Animal.call(this, name);
//     this.age = age;
// }

//////  або

// function Person(name, age){
//     Animal.apply(this, [name]);
//     this.age = age;
// }

////// або

// const  Person = function(name, age){
//     Animal.call(this, name);
//     this.age = age;
// }

// const user2 = new Person("Anton", 32);
// console.log(user2.name);

////////////////////   ФУНКЦІЇ   (недоученное) //////////////////////////
//////////////////////////////////////////////////////////////

// function playTrackById(trackId){
//     //отримати файл пісні та її запустити
// }

// function stopTrackById(trackId){
//     //отримати файл пісні та її запустити
//     console.log(`Отримати файл пісні з ID ${trackId} і поставити її на паузу`);
// }

// function play(trackName,trackId){
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName,newTrackName){
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName){
//     console.log(`Трек ${currentTrackName} на паузі`);

//     //function reloadDataTrack();

//     play();
// }

// ///////   Рекурсія   /////////////////////

// // function reloadDataTrack(amount){
// //     if(amount <= 0){
// //         console.log("Данні оновлені вказану кількість разів");
// //     } else{
// //         console.log("Повторне оновлення");
// //         //певний код для оновлення
// //         reloadDataTrack(amount - 1);
// //     }
// // }
// // reloadDataTrack(5);

// ///  Замикання  ////////////

// // function pauseStopByTrack(trackName, trackId){
// //     let originTrackName = trackName;
// //  let originTrackId = trackId

// //     return function pauseStop(){
//   //  stopTrackById(originTrackId);
// //         console.log(`Трек ${originTrackName} на паузі`);
// //     }
// // }
// // const stopPause1 = pauseStopByTrack("IT - Hello!");
// // stopPause1();

// // const stopPause2 = pauseStopByTrack("IT - JS!");
// // stopPause2();

// ///   Стрілкова функція    //////

// // const runCommand = function(command, errorFn){
// //     const result = command();
// //     if(!result){
// //         return errorFn();
// //     }
// // }
// // runCommand(
// //     () => {
// //         console.log("Запуск команди");
// //         return 1-1;
// //     },
// //     () => console.log("Помилка")
// // );

// ///   Каррірована функція  ////////

// // function pauseStopByTrack(trackName, trackId){

// //         return () => {
// //             stopTrackById(trackId);
// //             console.log(`Трек ${trackName} на паузі`);
// //         }
// //     }
// //     const stopPause1 = pauseStopByTrack("IT - Hello!", 10);
// //     stopPause1();

// //     const stopPause2 = pauseStopByTrack("IT - JS!",11);
// //     stopPause2();

// //   Мемoізація   /////   stopPause1(); - не визивається три раза
// // а лише один раз - економія ресурсів ноута

// // function pauseStopByTrack(trackName, trackId){
// //     let isPause = null;
// //     return () => {
// //         if(isPause === true){
// //             return;
// //         }

// //         stopTrackById(trackId);
// //         console.log(`Трек ${trackName} на паузі`);
// //         isPause = true;
// //     }
// // }
// // const stopPause1 = pauseStopByTrack("IT - Hello!", 10);
// // stopPause1();
// // stopPause1();
// // stopPause1();

// //  Мемоізація - якщо повторно викликається одне і те ж
// // значення amount  то знову не обчислюється а повертається старий
// // результат обчислення

// // const memoCalcSpase = (oldAmount = null, oldUnit = null, oldRresult = null) =>{
// //     return (amount, unit = "px") => {
// //         if(oldAmount === amount && unit === oldUnit){
// //             console.log("Memo");
// //             return oldRresult;
// //         }

// //         oldRresult = `${amount * 4}${unit}`;
// //         oldAmount = amount;
// //         oldUnit = unit;

// //         return oldRresult;
// //     }
// // }
// // const calcSpace = memoCalcSpase();

// // console.log(calcSpace(5));
// // console.log(calcSpace(5));

////////////                CLASS     //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// class User {
//   login = null;
//   password = null;

//   #role = null;

//   static age = null;

//   id = null;

//   #id = 1000; //приватне поле(технічне) - не вивод. в консоль

//   isAdmin = () => {
//     console.log(this.#id);
//     return this.role === "Admin";
//   };

//   createAdminUser = (login) => {
//     const password = this.generateRandomPassword();
//     return new User();
//   };

//   static generateRandomPassword = () => {
//     return true;
//   };

//   get admin() {
//     return this.#role === "Admin";
//   }

//   set admin(value) {
//     this.#role = "Admin";
//   }
// }

// const user = new User();
// console.log(user); //все окрім  age i Random
// // console.log(user.isAdmin());
// console.log(User); // тільки age i Random
// console.log(user.admin); // до #role доступу не буде

// function verifyAdmin(fn) {
//   const result = fn();

//   if (!result) {
//     throw new Error("Не адмін");
//   }

//   return true;
// }
//verifyAdmin(user.isAdmin);

//  constructor  ////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   test = () => {
//     console.log("hello", this.name);
//   };
// }
// //  наслідування  extends
// class User2 extends Person {
//   constructor(login, password) {
//     super(login);

//     this.login = login;
//     this.password = password;
//   }
//   login = null;
//   password = null;
// }
// const user2 = new User2("Ivan", "hgdxn432");

// console.log(user2.test());

///  чи належить об'єкт до іншого класу
// console.log(user2 instanceof User2);
// console.log(user2)

///////   ПАТЕРНИ ПРОГРАМУВАННЯ      ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/////  Останнє замовлення   /////// одиночка

// class RecentPurchases {
//   static #instans = null;

//   static #purchases = [];

//   static create() {
//     if(!this.#instans){
//       this.#instans = new RecentPurchases();
//     }

//     return this.#instans;
//   }

//  static add(item) {
//     this.#purchases.push(item);
//   }

//  static get(){
//     return this.#purchases;
//   }

//   }
//   RecentPurchases.create();

//   RecentPurchases.add("Телефон");
//   RecentPurchases.add("Навушники");

//   console.log(RecentPurchases.get());
//===============

//////        Фабрика    Factory   ///////

class Button {
  constructor({ text, color }) {
    this.text = text;
    this.color = color;
  }

  render() {
    return `<button class="color:${this.color};">${this.text}</button>`;
  }
}

class IconButton {
  constructor({ icon, color }) {
    this.icon = icon;
    this.color = color;
  }

  render() {
    return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
  }
}

class ButtonFactory {
  static TYPE = {
    BASIC: "basic",
    ICON: "icon",
  };

  static createButton(type, options) {
    switch (type) {
      case this.TYPE.BASIC:
        return new Button(options);
      case this.TYPE.ICON:
        return new IconButton(options);
      default:
        throw new Error(`Такого типу кнопки не існує: ${type}`);
    }
  }
}
