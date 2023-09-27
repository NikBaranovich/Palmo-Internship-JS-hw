/**
 * 1. Create a calculator object with methods for adding, subtracting,
 * multiplying, dividing, and apply them to the two numbers the user enters.
 */
const task1 = () => {
  const calculator = {
    add: (a, b) => {
      if (isNaN(a) || isNaN(b)) return;
      return a + b;
    },
    subtract: (a, b) => {
      if (isNaN(a) || isNaN(b)) return;
      return a - b;
    },
    multiply: (a, b) => {
      if (isNaN(a) || isNaN(b)) return;
      return a * b;
    },
    divide: (a, b) => {
      if (isNaN(a) || isNaN(b)) return;
      return b === 0 ? "Error! Division by zero" : a / b;
    },
  };

  const num1 = +prompt("Enter first number:");
  const num2 = +prompt("Enter second number:");
  const additionResult = calculator.add(num1, num2);
  const subtractionResult = calculator.subtract(num1, num2);
  const multiplicationResult = calculator.multiply(num1, num2);
  const divisionResult = calculator.divide(num1, num2);

  console.log(`Sum: ${additionResult}`);
  console.log(`Difference: ${subtractionResult}`);
  console.log(`Product: ${multiplicationResult}`);
  console.log(`Division: ${divisionResult}`);
};
// task1();

/**
 * 2. Write a function that takes an array of numbers
 * and filters it, returning only even numbers
 */
const task2 = () => {
  const filterEvenNumbers = (numberArray) => {
    return numberArray.filter((number) => !isNaN(number) && number % 2 === 0);
  };
  console.log(filterEvenNumbers([3, 6, 1, 8, "not a number", 54, 3]));
};
//task2();

/**
 * 3. Create a function that takes an object
 * and outputs all its properties and values to the console.
 */
const task3 = () => {
  const logObjectProperties = (object) => {
    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }
  };
  const person = {
    name: "Nik",
    surname: "Baranovich",
    age: 21,
    gender: "Male",
  };
  logObjectProperties(person);
};
//task3();

/**
 * 4. Write a function that sorts an array of objects
 * by one of the properties (for example, name).
 * Parameters of the function will be the object and the parameter to sort by.
 */
const task4 = () => {
  const sortByProperty = (objectArray, sortingProperty) => {
    return objectArray.sort((a, b) => {
      if (a[sortingProperty] < b[sortingProperty]) {
        return -1;
      }
      if (a[sortingProperty] > b[sortingProperty]) {
        return 1;
      }
      return 0;
    });
  };
  const users = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Fred", age: 18 },
    { name: "Charlie", age: 22 },
  ];
  console.log(sortByProperty(users, "name"));
};
//task4();

/**
 * 5. Write a function that takes an array and returns the element that occurs most often.
 */
const task5 = () => {
  const getMostFrequentElement = (array) => {
    if (!array.length) {
      return null;
    }
    let maxCount = 1;
    let mostFrequentElement = arr[0];
    let currentCount = 1;
    array.sort();
    for (let index = 1; index < array.length; index++) {
      if (array[index] === array[index - 1]) {
        currentCount++;
      } else {
        currentCount = 1;
      }
      if (currentCount > maxCount) {
        mostFrequentElement = array[index - 1];
        maxCount = currentCount;
      }
    }
    return mostFrequentElement;
  };
  let arr = ["Palmo", 10, "Palmo", 40, 50, { a: 30, b: 50 }, 30];
  console.log(getMostFrequentElement(arr));
};
// task5();

/**
 * 6. Write a function that checks whether a string is a palindrome.
 */
const task6 = () => {
  function reverseString(string) {
    return [...string].reverse().join("");
  }
  const checkPalindrome = (text) => {
    if (typeof text !== "string") {
      return false;
    }
    const solidText = text.replaceAll(" ", "").toLowerCase();
    const reversedText = reverseString(solidText);

    return solidText === reversedText;
  };

  console.log(checkPalindrome("Racecar"));
  console.log(checkPalindrome("Palmo"));
  console.log(checkPalindrome("Never odd or even"));
};
// task6();

/**
 * 7. Write a function that accepts two arrays and returns
 * a new array concatenating both input arrays. !!! Do not use the concat function
 */
const task7 = () => {
  const mergeArrays = (array1, array2) => [...array1, ...array2];

  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  console.log(mergeArrays(array1, array2));
};
// task7();

/**
 * 8. Create an object that has methods to convert temperatures between Celsius, Fahrenheit, and Kelvin.
 */
const task8 = () => {
  const CELSIUS_TO_FAHRENHEIT_RATIO = 9 / 5;
  const FAHRENHEIT_TO_CELSIUS_RATIO = 5 / 9;
  const CELSIUS_TO_KELVIN_OFFSET = 273.15;

  const temperatureConverter = {
    celsiusToFahrenheit: (temperature) => {
      temperature * CELSIUS_TO_FAHRENHEIT_RATIO + 32;
    },
    celsiusToKelvin: (temperature) => {
      temperature + CELSIUS_TO_KELVIN_OFFSET;
    },
    fahrenheitToCelsius: (temperature) => {
      (temperature - 32) * FAHRENHEIT_TO_CELSIUS_RATIO;
    },
    fahrenheitToKelvin: (temperature) => {
      (temperature - 32) * FAHRENHEIT_TO_CELSIUS_RATIO +
        CELSIUS_TO_KELVIN_OFFSET;
    },
    kelvinToCelsius: (temperature) => {
      temperature - CELSIUS_TO_KELVIN_OFFSET;
    },
    kelvinToFahrenheit: (temperature) => {
      (temperature - CELSIUS_TO_KELVIN_OFFSET) * CELSIUS_TO_FAHRENHEIT_RATIO +
        32;
    },
  };

  const celsiusTemperature = 25;
  const fahrenheitTemperature = 77;
  const kelvinTemperature = 298.15;

  console.log(temperatureConverter.celsiusToFahrenheit(celsiusTemperature));
  console.log(temperatureConverter.celsiusToKelvin(celsiusTemperature));
  console.log(temperatureConverter.fahrenheitToCelsius(fahrenheitTemperature));
  console.log(temperatureConverter.fahrenheitToKelvin(fahrenheitTemperature));
  console.log(temperatureConverter.kelvinToCelsius(kelvinTemperature));
  console.log(temperatureConverter.kelvinToFahrenheit(kelvinTemperature));
};
// task8();

/**
 * 9. Write a function that accepts an array of numbers
 * and returns an object with the maximum and minimum values.
 */
const task9 = () => {
  // First solution
  //   const findMinMax = (numberArray) => {
  //     if (numberArray.length === 0) {
  //       return { min: undefined, max: undefined };
  //     }
  //     return {
  //       min: Math.min.apply(null, numberArray),
  //       max: Math.max.apply(null, numberArray),
  //     };
  //   };
// Second solution
  const findMinMax = (numberArray) => {
    if (numberArray.length === 0) {
      return { min: undefined, max: undefined };
    }
    return numberArray.reduce(
      (maxMin, number) => {
        if (number > maxMin.max) {
          maxMin.max = number;
        }
        if (number < maxMin.min) {
          maxMin.min = number;
        }
        return maxMin;
      },
      { min: numberArray[0], max: numberArray[0] }
    );
  };
  console.log(findMinMax([5, 2, 9, 1, 5, 6]));
};
// task9();

/**
 * 10. Write a function that takes two arrays and returns an array of elements found in both arrays.
 */
const task10 = () => {
  const findCommonElements = (firstArray, secondArray) => {
    return firstArray.filter((element) => secondArray.includes(element));
  };
  const firstArray = [1, "Hello, World!", 3, 4, 5];
  const secondArray = [3, 4, "Hello, World!", 6, 7];
  console.log(findCommonElements(firstArray, secondArray));
};
// task10();

/**
 * 11. Write a function that converts a string into Camel Case where each word begins with an uppercase letter.
 */
const task11 = () => {
  const upFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const stringToCamelCase = (text) => {
    if (typeof text != "string") {
      return null;
    }
    const stringWords = text.replaceAll(",", "").split(" ");
    const camelCase = stringWords.map((word) => upFirst(word));
    camelCase[0] = camelCase[0].toLowerCase();
    return camelCase.join("");
  };
  console.log(stringToCamelCase("hello, world"));
};
// task11();

/**
 * 12. Write a function that accepts an array (which may contain other arrays) and returns a new flat array.
 */
const task12 = () => {
  const toFlatArray = (array) => {
    return array.reduce((flatArray, element) => {
      if (element instanceof Array) {
        return flatArray.concat(toFlatArray(element));
      }
      flatArray.push(element);
      return flatArray;
    }, []);
  };
  console.log(toFlatArray([1, 2, [3, 4, [5, 6], 7, 8], 9]));
};
// task12();

/**
 * 13. Write a function that outputs array elements in reverse order without changing the original array.
 */
const task13 = () => {
  const reverseArray = (array) => [...array].reverse();
  const inputArray = [1, 2, 3, 4, 5];
  console.log(reverseArray(inputArray));
  console.log(inputArray);
};
// task13();

/**
 * 14. Write a function that takes two strings and checks whether one string is an anagram of the other.
 */
const task14 = () => {
  const isAnagram = (firstString, secondString) => {
    if (typeof firstString != "string" || typeof secondString != "string") {
      return false;
    }
    firstString = firstString.replaceAll(" ", "").toLowerCase();
    secondString = secondString.replaceAll(" ", "").toLowerCase();
    if (firstString.length != secondString.length) {
      return false;
    }
    const anagram1 = [...firstString].sort().join("");
    const anagram2 = [...secondString].sort().join("");
    return anagram1 === anagram2;
  };
  console.log(isAnagram("listen", "silent"));
  console.log(isAnagram("Anagram ", "Nag a ram"));
  console.log(isAnagram("dessert", "sorted"));
};
// task14();

/**
 * 15. Create a function that converts an object into an array of arrays,
 * where the first element is the key and the second is the value.
 */
const task15 = () => {
  const objectToArray = (object) => {
    return Object.keys(object).map((key) => [key, object[key]]);
  };
  console.log(objectToArray({ a: 1, b: 2, c: "Palmo" }));
};
// task15();
