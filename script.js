/**
 * 1. Use the prompt function to ask the user for their country of residence.
 * If user has not entered anything (empty line), display the message "Enter the data",
 * if user has entered a number, display the message "Name cannot be a number";
 */
const getCountry = () => {
  const userCountry = prompt("Please enter your country of residence");

  if (userCountry === "") {
    alert("Enter the data");
  } else if (!isNaN(+userCountry)) {
    alert("Name cannot be a number");
  }
};
//getCountry();

/**
 * 2. Use prompt to ask the user to enter two numbers.
 * Then print the result whether the second number is multiple of the first number;
 */
const isMultipleOf = () => {
  const readNumber = (message) => {
    const number = prompt(message);
    if (number == "") {
      return readNumber("You must enter a number");
    }
    if (isNaN(+number)) {
      return readNumber("The entered data is not a number");
    }
    return Number(number);
  };
  const firstNumber = readNumber("Enter the first number");
  const secondNumber = readNumber("Enter the second number");
  alert(
    `The second number is ${
      secondNumber % firstNumber == 0 ? "" : "not "
    }a multiple of the first number`
  );
};
//isMultipleOf();

/**
 * 3. Use prompt to ask the user to enter a number.
 * Do a check for an empty string and if the value is NOT a number.
 * As a result, display to the user what the number is (even or odd);
 */
const checkEvenness = () => {
  let num = Number(prompt("Enter the number"));
  if (num == "") {
    alert("You must enter the number");
  } else if (isNaN(+num)) {
    alert("The entered data is not a number");
  } else {
    alert(`The entered number is ${num % 2 == 0 ? "even" : "odd"}`);
  }
};
//checkEvenness();

/**
 * 4. Create a script that asks the user to enter a number between 1 and 100.
 * Add a check that the value is a number or an empty string,
 * and for a given range (not less than 1 and not more than 100).
 * Show the user the answer to which quadrant the number is in.
 * 1-25 (first quarter), 26-50 (second quarter), 51-75 (third quarter),
 * 76-100 (fourth quarter);
 */
const getQuarter = () => {
  const readNumber = (message) => {
    const number = prompt(message);
    if (number == "") {
      return readNumber("You must enter a number");
    }
    if (isNaN(+number)) {
      return readNumber("The entered data is not a number");
    }
    return Number(number);
  };
  const readNumberInRange = (min, max, message) => {
    const number = readNumber(message);
    if (number < min || number > max) {
      return readNumberInRange(
        min,
        max,
        `You must enter number in a range (${min}, ${max})`
      );
    }
    return Number(number);
  };
  const num = readNumberInRange(1, 100, "Enter a number between 1 and 100");
  if (num <= 25) {
    alert("Number is in the first quarter");
  } else if (num <= 50) {
    alert("Number is in the second quarter");
  } else if (num <= 75) {
    alert("Number is in the third quarter");
  } else if (num <= 100) {
    alert("Number is in the fourth quarter");
  }
};
//getQuarter();

/**
 *5. Create a script that will print prime numbers from 1 to 500 in a loop;
 */
const getPrimeNumbers = () => {
  const max = 500;
  const sieve = new Array(max + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i ** 2 <= max; i++) {
    if (sieve[i] == true) {
      for (let j = i ** 2; j <= max; j += i) {
        sieve[j] = false;
      }
    }
  }
  console.log(
    sieve.reduce((primes, isPrime, number) => {
      if (isPrime) {
        primes.push(number);
      }
      return primes;
    }, [])
  );
};
//getPrimeNumbers();

/**
 * 6. Create a script that prints numbers from 1000 to 300 in reverse order;
 */
const printReverse = () => {
  let reversedNumbers = "";
  for (let i = 1000; i >= 300; i--) {
    reversedNumbers += `${i}, `;
  }
  reversedNumbers = reversedNumbers.slice(0, -2);
  console.log(reversedNumbers);
};
//printReverse();

/**
 * 7. Ask the user to enter a number.
 * Print the result of sum, subtraction, division and multiplication
 * of the entered number by all numbers from 1 to 100.
 */
const printOperations = () => {
  const readNumber = (message) => {
    const number = prompt(message);
    if (number == "") {
      return readNumber("You must enter a number");
    }
    if (isNaN(+number)) {
      return readNumber("The entered data is not a number");
    }
    return Number(number);
  };
  num = readNumber("Enter a number");
  for (let i = 1; i <= 100; i++) {
    console.log(
      `${i}: sum= ${num + i}, sub=${num - i}, div = ${(num / i).toFixed(
        2
      )}, mult = ${num * i}`
    );
  }
};
//printOperations();

/**
 * 8. Create a simple calculator. Ask the user for the first operand, the sign, and the second operand.
 * Display the result to the user performing a mathematical operation.
 * For example: entered 10, entered "+", entered 20 (3 prompt calls), the result is 30 (display in alert).
 * Signs can be "+", "-", "*", "/". Also check for the input of two operands and a sign.
 * When dividing, add processing division by zero. If division by zero occurs, display the message
 * “You cannot divide by 0.”
 */
const printCalc = () => {
  const readNumber = (message) => {
    const number = prompt(message);
    if (number == "") {
      return readNumber("You must enter a number");
    }
    if (isNaN(+number)) {
      return readNumber("The entered data is not a number");
    }
    return Number(number);
  };
  const readOperation = (message) => {
    const operation = prompt(message);
    const validOperations = ["+", "-", "*", "/"];
    if (!validOperations.includes(operation)) {
      return readOperation("You must enter a valid operation");
    }
    return operation;
  };

  const firstOperand = readNumber("Enter the first operand:");
  const operation = readOperation(
    'Enter the mathematical operation ("+", "-", "*", "/"):'
  );
  const secondOperand = readNumber("Enter the second operand:");

  if (operation == "+") {
    alert(
      `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`
    );
  } else if (operation == "-") {
    alert(
      `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`
    );
  } else if (operation == "*") {
    alert(
      `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`
    );
  } else if (operation == "/") {
    secondOperand == 0
      ? alert("You cannot divide by 0.")
      : alert(
          `${firstOperand} / ${secondOperand} = ${firstOperand * secondOperand}`
        );
  }
};
//printCalc();

/**
 * 9. Create a "Guess the Number" game.
 */
const guessNumber = () => {
  const readNumber = (message) => {
    const number = prompt(message);
    if (number == "") {
      return readNumber("You must enter a number");
    }
    if (isNaN(+number)) {
      return readNumber("The entered data is not a number");
    }
    return Number(number);
  };
  const readNumberInRange = (min, max, message) => {
    const number = readNumber(message);
    if (number < min || number > max) {
      return readNumberInRange(
        min,
        max,
        `You must enter number in a range (${min}, ${max})`
      );
    }
    return Number(number);
  };
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const bet = readNumber(
    "Enter the amount of money you want to bet on the game"
  );
  const a = readNumber("Enter the minimum number for the number range");
  const b = readNumber("Enter the maximum number for the number range");
  const gain = ((b - a) * 0.1 + bet).toFixed(4);
  alert(`You will receive ${gain}\$ if you win`);
  const guess = readNumberInRange(a, b, "Guess the number!");
  if (!isNaN(+guess)) {
    const randomNum = getRandomNumber(a, b);
    if (guess == randomNum) {
      alert(`Congratulations! You won ${gain}\$!`);
    } else {
      alert(`Sorry! You lost your bet in the amount of ${bet}\$!`);
    }
  }
};
//guessNumber();

/**
 * 10. Create a rock-paper-scissors game.
 */
const rockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  const readInput = (message) => {
    const input = prompt(message);
    if (!choices.includes(input.toLowerCase())) {
      return readInput("You must enter a valid move");
    }
    return input.toLowerCase();
  };
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const playerChoice = readInput("Make a move(rock, paper, scissors)");
  const enemyChoice = choices[getRandomNumber(0, 2)];
  alert(`Enemy chose a ${enemyChoice}`);
  if (playerChoice === enemyChoice) {
    alert("Draw!");
  } else if (
    (playerChoice === "rock" && enemyChoice === "scissors") ||
    (playerChoice === "scissors" && enemyChoice === "paper") ||
    (playerChoice === "paper" && enemyChoice === "rock")
  ) {
    alert("You won!");
  } else {
    alert("Enemy won!");
  }
};
rockPaperScissors();
