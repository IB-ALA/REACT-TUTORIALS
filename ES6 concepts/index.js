// LOGICAL "&&" AND LOGICAL "||"

let a = true;
let b = true;

// &&
// ture - true
console.log(a && b); // returns true if both are true and false if any is false.

function getName(name) {
  return name;
}

console.log(a && getName("IB")); // returns the last value if the first is true and returns false if the first is false
a = false;
console.log(a && getName("IB")); // returns the last value if the first is true and returns false if the first is false

// ||
a = false;
// b = false;
// false - true
console.log(a || b); // returns true if any is true and false if both are false.

console.log(a || getName("IB")); // returns the last value if the first is false and returns true if the first is true
a = true;
console.log(a || getName("IB")); // returns the last value if the first is false and returns true if the first is true

// TEMPLATE LITERALS " `${"...some JS expression"}` "
console.log(`a is ${a} and b is ${b}`);

// TERNARY OPERATOR
let showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}
function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("rice"));
} else {
  console.log(getRecipeOneName("fufu"));
}

showRecipeOne
  ? console.log(getRecipeOneName("rice"))
  : console.log(getRecipeOneName("fufu"));

// OBJECT DESTRUCTURING
const id = 1;
const productName = "Product Appe Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};
console.log(product);
const product2 = {
  description: "Product two description",
  id,
  productName,
  rating,
};
console.log(product2.productName);

const { description } = product2;
console.log(description);

// ARRAY DESTRUCTURING
const array = [1, 2, 3];
let first = array[0];
let second = array[1];

console.log(first, second); // 1 2

const [firstElem, secondElem, thirdElem, forthElem] = array;
console.log(firstElem, secondElem, thirdElem, forthElem); // 1 2 3 undefined

// DEFAULT PARAMENTERS, SPREAD AND REST OPERATORS
function mul2Numbs(num1 = 1, num2 = 2) {
  return num1 * num2;
}

console.log(mul2Numbs(2)); // num1 is 2, and num2 is 2 (set defaultly)

// SPREAD
const array2 = [1, 2, 3];
const array3 = [10, 11, 12];
console.log([999, ...array2, 90, ...array3, 1000]);

// REST
function getInfo(a, ...c) {
  //the rest operator should be the last param
  console.log(a, c);

  return "IB";
}
console.log(getInfo(1, 2, 3, 4, 5, 67, 8, 9, 0));

// ARRAY METHODS
// map, filter, find, some, every, includes, indexOf, findIndex

const personArray = [
  {
    name: "person1",
    age: 30,
    country: "USA",
  },
  {
    name: "person2",
    age: 40,
    country: "USA",
  },
  {
    name: "person1",
    age: 50,
    country: "RUSSIA",
  },
  {
    name: "person1",
    age: 60,
    country: "GHANA",
  },
];

const mapArray = personArray.map((person, index) => {
  return `${person.name} age is ${person.age}`; // returns new array
});
console.log(mapArray);

const findArray = personArray.find((person, index) => {
  return person.country === "USA"; // returns new array
});
console.log(findArray);

const filterArray = personArray.filter((person, index) => {
  return person.country === "USA"; // returns new array
});
console.log(filterArray);

const someArray = personArray.some((person, index) => {
  return person.age > 40; // returns boolean
});
console.log(someArray);

const fruits = ["banana", "apple", "orange"];

const includesArray = fruits.includes("banana"); // returns boolean
console.log(includesArray);

const indexOfArray = fruits.indexOf("orange"); // returns index
console.log(indexOfArray);

const findIndexArray = personArray.findIndex((person, index) => {
  return person.country === "RUSSIA"; // returns index
});
console.log(findIndexArray);

// ASYNC AWAIT FETCH
const productsListElem = document.querySelector(".list-of-products");

async function name() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const result = await response.json();
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (error) {
    console.log(error);
  }
}

function renderProducts(products) {
  productsListElem.innerHTML += products
    .map((product) => `<p>${product.title}</p>`)
    .join(" ");
}
