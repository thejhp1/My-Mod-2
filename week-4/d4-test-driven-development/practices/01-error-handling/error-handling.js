// 1. test
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.error(e.name + ": " + e.message);
    } else {
      console.error("Not a TypeError");
    }
  }
  return sum;
}

let res = sum(null);
console.log(res);

//==========================================================================================
// 2. test
function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw new TypeError("Invalid name! Must be a string!");
  }
}

try {
  sayName("Alex");
  sayName(1);
} catch (e) {
  console.error(e.message);
}

//==========================================================================================
// 3. test
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try {
  greet(null);
} catch {
  console.log("Hello World!");
}
