const isNumber = (number) => typeof number == "number";
const hasProperty = (object, property) => {
  if (!object) return false;
  return Object.hasOwn(object, property);
};

/**
 * 1. Create a function that checks whether a value is a number. The function must return Boolean.
 */
const task1 = () => {
  const isNumber = (number) => typeof number == "number";
  console.log(isNumber(10));
  console.log(isNumber(undefined));
  console.log(isNumber("Palmo"));
  console.log(isNumber(true));
};
//task1();

/**
 * 2. Create a function that accepts 3 numbers.
 * It should return the average of these 3 numbers.
 * (Don't forget to add checks to ensure that the arguments are not empty and are numbers).
 */
const task2 = () => {
  const getAvarage = function (firstNum, secondNum, thirdNum) {
    if (
      !isNumber(firstNumber) ||
      !isNumber(secondNumber) ||
      !isNumber(thirdNumber)
    ) {
      console.log("All arguments must be numbers");
      return 0;
    }
    return (firstNumber + secondNumber + thirdNumber) / 3;
  };

  //   const getAvarage = function (...numbers) {
  //     if ([...arguments].some((number) => !isNumber(number))) {
  //       console.log("All arguments must be numbers");
  //       return 0;
  //     }
  //     return numbers.reduce(
  //       (average, number) => average + number / numbers.length,
  //       0
  //     );
  //   };
  console.log(getAvarage(32, 12, 68));
  console.log(getAvarage(32, 12, "Palmo"));
  console.log(getAvarage(32, 12));
};
//task2();

/**
 * 3. Create a function that takes an object
 * and checks whether it has a 'name' property.
 * Return Boolean type.
 */
const task3 = () => {
  const hasNameProperty = (object) => {
    if (!object) return false;
    return Object.hasOwn(object, "name");
  };
  const person = {
    surname: "Bars",
    name: "Nik",
    age: 21,
  };
  const car = {
    brand: "Lamborghini",
    model: "Murcielago",
    price: 331000,
  };
  console.log(hasNameProperty(person));
  console.log(hasNameProperty(car));
};
//task3();

/**
 * 4. Create a function that takes an object with name and surname
 * properties and returns a string in the format Name Surname.
 */
const task4 = () => {
  const getFullName = (object) => {
    if (!hasProperty(object, "name")) {
      return "Object does not contain name property";
    }
    if (!hasProperty(object, "surname")) {
      return "Object does not contain surname property";
    }
    return `${object.name} ${object.surname}`;
  };
  const person = {
    surname: "Bars",
    name: "Nik",
    age: 21,
  };
  const car = {
    brand: "Lamborghini",
    model: "Murcielago",
    price: 331000,
  };
  console.log(getFullName(person));
  console.log(getFullName(car));
};
//task4();

/**
 * 5. Create a function that accepts an object of type
 * {name1: 200, name2: 500, name3: 400}.
 * The function must return the sum of all properties of the object.
 */
const task5 = () => {
  const getPropertiesSum = (object) =>
    Object.values(object).reduce((sum, number) => {
      return sum + (+number || 0);
    }, 0);

  const object = {
    name1: 200,
    name2: 500,
    name3: "Palmo",
    name4: 400,
  };

  console.log(getPropertiesSum(object));
};
//task5();

/**
 * 6. Create a function that accepts an object.
 * All NUMERIC properties of the object must be divided by 2,
 * if the result is NOT an integer, round it according to mathematical rules,
 * and change the text properties to the string Hello, Palmo.
 * If the property is not numeric or text, remove it from the object.
 * The function should return the converted object.
 */
const task6 = () => {
  const modifyObject = (inputObject) => {
    const modifiedObject = Object.keys(inputObject).reduce((modifiedObject, key) => {
      const value = inputObject[key];

      if (typeof value === "number") {
        modifiedObject[key] = Math.round(value / 2);
      }

      if (typeof value === "string") {
        modifiedObject[key] = "Hello, Palmo";
      }

      return modifiedObject;
    }, {});
    return modifiedObject;
  };

  const inputObject = {
    number1: 20,
    number2: 15.5,
    text1: "Some text",
    boolean1: true,
    array1: [1, 2, 3],
  };

  const modifiedObject = modifyObject(inputObject);
  console.log(modifiedObject);
  console.log(inputObject);
};
//task6();
