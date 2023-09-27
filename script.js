/**
 * 2. Create a variable num and assign it the value 10.
 * Print the value of this variable using console.log()
 */
const num = 10;
console.log(`num = ${num}`);

/**
 * 3. Create variables first = 5 and second = 10.
 * Print their sum, difference, product and division in console.log()
 */
const first = 5;
const second = 10;
console.log(`sum: ${first} + ${second} = ${first + second}`);
console.log(`difference: ${first} - ${second} = ${first - second}`);
console.log(`product: ${first} * ${second} = ${first * second}`);
console.log(`division: ${first} / ${second} = ${first / second}`);

/**
 * 4. Create variables a = 3 and b = 10, assign their sum to the result variable
 */
const a = 3;
const b = 10;
const result = a + b;
console.log(`a + b = ${result}`);

/**
 * 5. Create a variable bar = 20 and qwerty = 5.
 * Assign the difference bar - qwerty to the res variable and subtract 10.
 * Assign the difference between the res value and the qwerty variable to the end variable
 */
const bar = 20;
const qwerty = 5;
const res = bar - qwerty - 10;
console.log(`res = ${res}`);
const end = res - qwerty;
console.log(`end = ${end}`);

/**
 * 6. Create a variable str and assign it the value Hello, Palmo.
 * Display the result in alert()
 */
const str = "Hello, Palmo!";
alert(str);

/**
 * 7. Create a name variable with your name and age with your age.
 * In alert() display the result I am (name), I am (age). (substitute values from variables)
 */
const name = "Nik Baranovich",
  age = "21";
alert(`I am ${name}, I am ${age} y.o.`);

/**
 * 8. Write a script that counts the number of seconds in an hour, day and month.
 * In console.log() print the result
 */
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

console.log("Seconds in hour:", secondsInHour);
console.log("Seconds in day:", secondsInDay);
console.log("Seconds in month (approximately):", secondsInMonth);

/**
 * 9. Create a variable with a number and square it
 */
const numToSquare = 5;
console.log(`${numToSquare}^2 = ${numToSquare ** 2}`);

/**
 * 10. Create a variable d and assign it the value 8.
 * In variable n place the square of the value of variable d,
 * and in variable x the cube of the value of d
 */
const d = 8;
const n = d ** 2;
const x = d ** 3;
console.log(`${d}^2 = ${n}, ${d}^3 = ${x}`);
