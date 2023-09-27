/**
 * 1.Write a function upFirst(str),
 * which returns the string str with the first character capitalized,
 * the remaining characters must be lowercase (example: upFirst("Ivanov"),
 * should return "Ivanov", upFirst("IVANOV"), should return "Ivanov")
 */
const task1 = () => {
  const upFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  console.log(upFirst("IVANOV"));
  console.log(upFirst("Ivanov"));
  console.log(upFirst("ivanov"));
};
//task1();

/**
 * 2. Write a function truncate(str, maxlength) that checks
 * the length of the string str, and if it exceeds maxlength,
 * replaces the end of str with "..." so that its length becomes
 * equal to maxlength
 */
const task2 = () => {
  const truncate = (str, maxlength) => {
    if (maxlength < 3) {
      console.log("Maxlength is too low!");
      return "";
    }
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + "...";
    }
    return str;
  };
  console.log(truncate("Hello", 2));
};
//task2();

/**
 * 3. Write a function getShortName(fullName), which converts fullName
 * into a short name. For example, getShortName("Ivanov Sergey Petrovich"),
 * the function should return "Ivanov S.P."
 */
const task3 = () => {
  const getShortName = (fullName) => {
    const nameArray = fullName.split(" ");
    return `${nameArray[0]} ${nameArray[1].charAt(0)}.${nameArray[2].charAt(
      0
    )}.`;
  };
  console.log(getShortName("Ivanov Sergey Petrovich"));
};
//task3();

/**
 * 4. Write a function that accepts an array of objects.
 * The function must return an array with only those objects
 * that have a "name" property
 */
const task4 = () => {
  const filterObjectsWithNames = (objects) => {
    return objects.filter((obj) => obj.hasOwnProperty("name"));
  };
  const inputArray = [
    { name: "Alice", age: 25 },
    { age: 30 },
    { name: "Bob", age: 35 },
    { city: "New York" },
  ];

  const filteredArray = filterObjectsWithNames(inputArray);

  console.log(filteredArray);
};
//task4();

/**
 * 5. Write a function that accepts two arrays.
 * The function should return the result of combining these
 * arrays without duplicates
 */
const task5 = () => {
  const mergeArrays = (arr1, arr2) => {
    let mergedArray = [...arr1, ...arr2];
    mergedArray = mergedArray.filter(
      (item, index, array) => array.indexOf(item) === index
    );
    return mergedArray;
  };
  const array1 = [1, 2, 7, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  console.log(mergeArrays(array1, array2));
};
//task5();

/**
 * 6. Write a function that converts snake_case strings to camelCase.
 * For example modifyString('super-user-name') // return 'superUserName'
 */
const task6 = () => {
  const upFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const modifyString = (snakeStr) => {
    const stringWords = snakeStr.split("_");
    const camelCase = stringWords.map((word) => upFirst(word));
    camelCase[0] = camelCase[0].toLowerCase();
    return camelCase.join("");
  };
  console.log(modifyString("super_user_name"));
};
//task6();

/**
 * 7. Write a function that takes a value with a mathematical expression
 * and returns the result of solving it. For example:
 * calc('5 + 10') // returns 15
 */
const task7 = () => {
  const calc = (expression) => {
    const expressionElements = expression.split(" ");

    if (expressionElements.length !== 3) {
      console.log("Incorrect expression format");
    }

    const operand1 = +expressionElements[0];
    const operator = expressionElements[1];
    const operand2 = +expressionElements[2];

    if (isNaN(+operand1) || isNaN(+operand2)) {
      console.log("Operands must be numbers");
    }

    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "**":
        return operand1 ** operand2;
      case "/":
        if (operand2 === 0) {
          console.log("Division by zero");
        }
        return operand1 / operand2;
      default:
        console.log("Unsupported operator");
    }
  };
  console.log(calc("5 * 3"));
};
//task7();

/**
 * 8. Write a function that takes an object with users and returns an array of names.
 */
const task8 = () => {
  const getUserNames = (users) => {
    const names = users.map((user) => user.name);
    return names;
  };
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Marry",
      age: 22,
    },
    {
      id: 3,
      name: "Poll",
      age: 25,
    },
  ];
  console.log(getUserNames(users));
};
//task8();

/**
 * 9. Write a function that takes an array. Each element of the array, which is a number,
 * must be multiplied by 2, strings must be converted into an array, where each character
 * is a separate element of the array. The function must return the modified object
 */
const task9 = () => {
  const modifyArray = (array) => {
    const modArray = array.map((elem) => {
      if (typeof elem === "number") {
        return elem * 2;
      }
      if (typeof elem === "string") {
        return elem.split("");
      }
      return elem;
    });
    return modArray;
  };
  const inputArray = [1, "hello", 3, "world", 5];
  console.log(modifyArray(inputArray));
};
//task9();

/**
 * 10. Write a function that checks a string for spam.
 * Function should return true if there are 2 identical words
 * in the string, and false if all words are unique.
 */
const task10 = () => {
  const hasSpam = (text) => {
    text = text.replace(",", "");
    text = text.replace(".", "");
    const words = text.split(" ");
    const uniqueWords = {};

    for (const word of words) {
      if (uniqueWords[word.toLowerCase()]) {
        return true;
      }
      uniqueWords[word.toLowerCase()] = true;
    }
    return false;
  };

  console.log(hasSpam("If you scratch my back, I'll scratch yours"));
  console.log(hasSpam("Honesty is the best policy"));
};
// task10();

/**
 * 11.Write a function that checks a string for profanity.
 * Create an array that will contain words that must be censored.
 * The function should take a string and check if it contains words
 * from the array that need to be censored. If the line contains a
 * word from the array, return true; if not, return false.
 */
const task11 = () => {
  const hasProfanity = (text) => {
    const forbiddenWords = ["voldemort", "slavery", "vacation"];
    text = text.toLowerCase();
    for (const word of forbiddenWords) {
      if (text.includes(word)) {
        return true;
      }
    }
    return false;
  };

  console.log(hasProfanity("Palmo holds us in slavery"));
  console.log(hasProfanity("This is a clean text without profanity. No shit"));
  console.log(
    hasProfanity(
      "Everyone in the Harry Potter franchise is terrified to say Voldemort's name"
    )
  );
};
//task11();

/**
 * 12. Write a function that accepts an array. The function must return a sentence
 * of only the string values of the array. For example:
 * arrayToSentence(['Hello', 1, null, 'how', '{}', 'are you']) // return Hello how are you
 */
const task12 = () => {
  const arrayToSentence = (dataArray) => {
    return dataArray.reduce((sentence, item) => {
      if (typeof item !== "string") return sentence;

      try {
        const obj = JSON.parse(item);
        return sentence;
      } catch (error) {
        return `${sentence} ${item}`;
      }
    });
  };
  console.log(
    arrayToSentence([
      "Hello",
      1,
      null,
      "1",
      "false",
      "how",
      "{}",
      `{"name":"John","age":30,"city":"New York"}`,
      "are",
      "[1,2,3]",
      "you",
    ])
  );
};
//task12();

/**
 * 13. Write a function that takes an array of 10 integers (0 through 9) and returns a string
 * of those numbers in the form of a phone number.
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */
const task13 = () => {
  const createPhoneNumber = (numArray) => {
    if (numArray.length != 10) {
      return "Not enough numbers";
    }
    for (const number of numArray) {
      if (typeof number !== "number") {
        return "Array must include only numbers";
      }
      if (number > 9 || number < 0) {
        return "Array must include only numbers from 0 to 9";
      }
    }
    let phoneNumber = `(${numArray.slice(0, 3).join("")}) `;
    phoneNumber += `${numArray.slice(3, 6).join("")}-${numArray
      .slice(6, 10)
      .join("")}`;
    return phoneNumber;
  };
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
};
//task13();

/**
 * Write a function that takes an array of users and returns
 * the name of the user with the highest salary.
 */
const task14 = () => {
  const findHighestPaidUser = (users) => {
    if (users.length === 0) {
      return null;
    }
    let highestPaidUser = users[0];
    for (const user of users) {
      if (user.salary > highestPaidUser.salary) {
        highestPaidUser = user;
      }
    }
    return highestPaidUser.name;
  };
  const users = [
    {
      id: 1,
      name: "John",
      age: 20,
      salary: 1000,
    },
    {
      id: 2,
      name: "Marry",
      age: 22,
      salary: 1500,
    },
    {
      id: 3,
      name: "Poll",
      age: 25,
      salary: 1200,
    },
  ];
  console.log(findHighestPaidUser(users));
};
//task14();

/**
 * 15. Write a function that checks whether a string is valid.
 * The line must be at least 3 characters long and no more than 16 characters,
 * must not be empty, and must not contain numbers.
 */
const task15 = () => {
  const checkStringValidity = (text) => {
    if (typeof text !== "string") {
      return false;
    }
    if (text.length < 3 || text.length > 16) {
      return false;
    }
    for (const char of text) {
      if (!isNaN(+char)) {
        return false;
      }
    }
    return true;
  };

  console.log(checkStringValidity("HelloWorld"));
  console.log(checkStringValidity("ab"));
  console.log(checkStringValidity("a1bc2de3"));
  console.log(checkStringValidity(" "));
  console.log(
    checkStringValidity("ThisIsAnInvalidStringWithMoreThanSixteenCharacters")
  );
};
//task15();

/**
 * 16. Write a function that checks the password to ensure it is correct.
 * The password must be at least 6 characters long, must contain at least
 *  one number and at least one capital letter
 */

const task16 = () => {
  const checkPasswordValidity = (password) => {
    if (password.length < 6) {
      return false;
    }
    const passwordArr = password.split("");
    const hasDigit = passwordArr.some((char) => !isNaN(+char));
    const hasUppercase = passwordArr.some((char) => char >= "A" && char <= "Z");
    return hasDigit && hasUppercase;
  };
  console.log(checkPasswordValidity("Passw0rd"));
  console.log(checkPasswordValidity("Abcd12"));
  console.log(checkPasswordValidity("12345"));
  console.log(checkPasswordValidity("abcd"));
  console.log(checkPasswordValidity("qwerty123"));
};
//task16();
