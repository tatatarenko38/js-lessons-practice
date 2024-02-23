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
