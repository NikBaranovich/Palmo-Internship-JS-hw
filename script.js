const readNumber = (message) => {
  const number = prompt(message);
  if (number == "") {
    return readNumber(`You must enter a number. ${message}`);
  }
  if (isNaN(+number)) {
    return readNumber(`The entered data is not a number. ${message}`);
  }
  return +number;
};
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**1. Calculation of body mass index (BMI):
 * The user enters his weight and height, the program shows him the BMI.
 * The formula for calculation is easily found in Google. */
const task1 = () => {
  const getBMI = (weight, height) => weight / height ** 2;

  const weight = readNumber("Enter your weight:");
  const height = readNumber("Enter your height:");
  const userBMI = getBMI(weight, height);
  alert(userBMI);
};
//task1();

/**2. Learning the multiplication table:
 * The program asks a random question about multiplication
 * (for example, 7x8), and the user must enter the answer.
 * There should be a validation of the user's response. */
const task2 = () => {
  const getOperands = () => {
    const firstOperand = getRandomNumber(0, 10);
    const secondOperand = getRandomNumber(0, 10);
    return { firstOperand, secondOperand };
  };

  const { firstOperand, secondOperand } = getOperands();
  const userAnswer = readNumber(`${firstOperand}x${secondOperand} = `);
  if (userAnswer === firstOperand * secondOperand) {
    alert("You are correct!");
  } else {
    alert("You are wrong!");
  }
};
//task2();

/**
 * 3. Temperature converter: The user enters the temperature in
 * degrees Celsius and receives the answer in degrees Fahrenheit.
 */
const task3 = () => {
  const celsiusToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;
  const userTemperature = readNumber("Enter your temperature in Celsius:");
  alert(celsiusToFahrenheit(userTemperature));
};
//task3();

/**
 * 4. Percentage calculation: The user enters two numbers,
 * one of which is a percentage of the other.
 * The program shows the result of how many percent is one number from another.
 */
const task4 = () => {
  const firstNumber = readNumber("Enter first number");
  const secondNumber = readNumber("Enter second number");
  alert(
    `Second number is ${((secondNumber * 100) / firstNumber).toFixed(
      3
    )}% of the first number`
  );
};
//task4();

/**
 * 5. Distance calculator: The user enters the speed and time,
 * the program shows how far the object will travel.
 */
const task5 = () => {
  const calcDistance = (speed, time) => speed * time;
  const speed = readNumber("Enter speed");
  const time = readNumber("Enter time");
  alert(`Object will travel ${calcDistance(speed, time)} km`);
};
//task5();

/**
 * 6. Day of the week: The user enters a number from 1 to 7,
 * the program displays the name of the day of the week.
 */
const task6 = () => {
  const getDayOfWeek = (dayNumber) => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday my dudes🐸",
      "Thursday",
      "Friday",
      "Daturday",
      "Sunday",
    ];
    return (
      daysOfWeek[dayNumber - 1] ||
      "This day of the week does not exist. For now..."
    );
  };
  const userInput = readNumber("Enter a number from 1 to 7");
  alert(`It's ${getDayOfWeek(userInput)}`);
};
//task6();

/**
 * 7. Tax calculation: The user enters his salary,
 * the program shows how much tax he has to pay. (e.g. tax 5%)
 */
const task7 = () => {
  const calcTax = (salary, tax) => (salary / 100) * tax;
  const userSalary = readNumber("Enter your salary");
  const userTax = calcTax(userSalary, 5);
  alert(`Your tax is ${userTax}$`);
};
//task7();

/**
 * 8. Distribution of students by groups:
 * The user enters the number of students and the number of groups.
 * Program shows how many students will be in each group.
 */
const task8 = () => {
  const studentNumber = readNumber("Enter the number of students");
  const groupNumber = readNumber("Enter the number of groups");
  const studentsDistribution = Math.floor(studentNumber / groupNumber);
  let leftStudents = studentNumber - studentsDistribution * groupNumber;
  const groups = new Array(groupNumber).fill(studentsDistribution);
  for (let i = 0; leftStudents > 0; i++) {
    groups[i] += 1;
    leftStudents--;
  }
  console.log(`Students will be divided into groups: ${groups}`);
};
//task8();

/**
 * 9. Calculation of persentage in the bank:
 * The user enters the amount of the deposit and the annual persentage.
 * The program shows how much money the user will have in a year.
 */
const task9 = () => {
  const calcDeposit = (depositAmount, annualPersentage, years) => {
    return (
      depositAmount * (1 + annualPersentage / 100) ** years - depositAmount
    );
  };

  const depositAmount = readNumber("Enter the amount of the deposit");
  const annualPersentage = readNumber("Enter the annual persentage");
  alert(
    `You will have ${calcDeposit(depositAmount, annualPersentage, 1)} in a year`
  );
};
//task9();

/**
 * 10. Words counter : User enters the text, the program shows how many words are in the text.
 */
const task10 = () => {
  function countWords(text) {
    return text.split(" ").filter(function (n) {
      return n != "";
    });
  }
  const userText = prompt("Enter your text");
  alert(`Your text contains ${countWords(userText)} words`);
};
//task10();

/**
 * 11. Calculation of the cost of the trip:
 * Based on the distance entered by the user
 * and the cost of fuel, the cost of the trip is calculated.
 */
const task11 = () => {
  const distance = readNumber("Enter the distance of your trip (km)");
  const fuelConsumption = readNumber(
    "Enter the fuel consumption of your car (l/100 km)"
  );
  const fuelPrice = readNumber("Enter the cost of fuel (uah)");
  const travelCost = ((distance * fuelConsumption) / 100) * fuelPrice;
  alert(`Cost of your trip will be ${travelCost.toFixed(3)} uah/l`);
};
//task11();

/**
 * 12. Password generator: Develop a program that generates random passwords
 * of a given length with different characters
 * (upper/lower case letters, numbers, special characters).
 */
const task12 = () => {
  const generatePassword = (passwordLength) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const charsArray = chars.split("");
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += charsArray[getRandomNumber(0, charsArray.length - 1)];
    }
    return password;
  };
  console.log(generatePassword(10));
};
//task12();
