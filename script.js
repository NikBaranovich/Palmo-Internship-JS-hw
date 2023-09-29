/**
 * 1. Create a button on the page. When you click on it, display the message Hello, Palmo in the alert.
 */
const welcomeButton = document.querySelector(".welcome-button");
welcomeButton.onclick = () => alert("Hello, Palmo!");

/**
 * 2. Create a button and input with the text Hello, Palmo.
 * When you click on the button in the input, the text should be replaced with Hello, World!
 */
const changeTextButton = document.querySelector(".change-text-button");
const helloInput = document.querySelector("#hello-input");
changeTextButton.onclick = () => {
  helloInput.value = "Hello, World!";
};

/**
 * 3. Create a button and input. When you click on the button,
 * display the contents of the input in console.log.
 */
const logButton = document.querySelector(".log-text-button");
const logInput = document.querySelector("#log-input");
logButton.onclick = () => console.log(logInput.value);

/**
 * 4. Create two h1 headings and a button. When you click on the button,
 * the text in the headings should be replaced with each other.
 */
const swapButton = document.querySelector(".swap-text-button");
const firstHeading = document.querySelector(".first-heading");
const secondHeading = document.querySelector(".second-heading");
swapButton.onclick = () => {
  const firstHeadingText = firstHeading.textContent;
  firstHeading.textContent = secondHeading.textContent;
  secondHeading.textContent = firstHeadingText;
};

/**
 * 5. Create a paragraph (<p>) with any text and a button.
 * When you click on the button, the text color should change to red,
 * clicking again, the text should return to its original color.
 */
const colorButton = document.querySelector(".change-color-button");
const colorText = document.querySelector(".color-text");

colorButton.onclick = () => {
  if (colorText.classList.contains("special-text")) {
    colorText.classList.remove("special-text");
    return;
  }
  colorText.classList.add("special-text");
};

/**
 * 6. Create a button and input. When you click on the button, the input should become disabled.
 * When you click again it should unlock.
 */
const toggleButton = document.querySelector(".toggle-input-button");
const toggleInput = document.querySelector("#toggle-input");

toggleButton.onclick = () => {
  if (!toggleInput.disabled) {
    toggleInput.disabled = true;
    toggleButton.textContent = "Enable";
    return;
  }
  toggleInput.disabled = false;
  toggleButton.textContent = "Disable";
};

/**
 * 7. Create 2 squares (green and red). When you click on green,
 * the color of the green square should turn red, the red one should turn green.
 * And vice versa.
 */
const firstBox = document.querySelector(".green-box");
const secondBox = document.querySelector(".red-box");

const toggleBoxClass = (box, originalClass, replaceClass) => {
  box.classList.remove(originalClass);
  box.classList.add(replaceClass);
};
const swapBoxColors = () => {
  if (firstBox.classList.contains("red-box")) {
    toggleBoxClass(firstBox, "red-box", "green-box");
    toggleBoxClass(secondBox, "green-box", "red-box");
    return;
  }
  if (firstBox.classList.contains("green-box")) {
    toggleBoxClass(firstBox, "green-box", "red-box");
    toggleBoxClass(secondBox, "red-box", "green-box");
    return;
  }
};
firstBox.onclick = swapBoxColors;
secondBox.onclick = swapBoxColors;

/**
 * 8. Create a button and an empty ul list on the page.
 * With each click, a new list element with a serial number should appear.
 */
const addItemButton = document.querySelector(".add-item-button");
const itemList = document.querySelector(".item-list");

addItemButton.onclick = () => {
  const itemsLength = itemList.querySelectorAll("li").length;
  const newItem = document.createElement("li");
  newItem.innerHTML = `${itemsLength + 1} Item`;
  itemList.appendChild(newItem);
};

/**
 * 9. Create a textarea and a button on the page. When you click on the button below,
 * a list should appear with each value in the textarea, separated by commas.
 */
const showListButton = document.querySelector(".show-list-button");
const separatedList = document.querySelector(".separated-list");
const listTextarea = document.querySelector("#list-textarea");

showListButton.onclick = () => {
  separatedList.innerHTML = "";
  const itemsList = listTextarea.value.split(",");
  itemsList.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.innerHTML = item;
    separatedList.appendChild(newItem);
  });
};

/**
 * 10. Create a registration form with the fields login, email, age, password, repeat password and the Register button.
 */
const registerButton = document.querySelector("#user-register-button");
registerButton.onclick = (event) => {
  event.preventDefault();
  document.querySelector(".valid-registration").classList.add("hidden");
  const loginInput = document.querySelector("#user-login");
  const loginErrorLabel = document.querySelector("#user-login-error");
  const emailInput = document.querySelector("#user-email");
  const emailErrorLabel = document.querySelector("#user-email-error");
  const ageInput = document.querySelector("#user-age");
  const ageErrorLabel = document.querySelector("#user-age-error");
  const passwordInput = document.querySelector("#user-password");
  const passwordErrorLabel = document.querySelector("#user-password-error");
  const passwordRepeatInput = document.querySelector("#user-password-repeat");
  const passwordRepeatErrorLabel = document.querySelector("#user-password-repeat-error");

  const isLoginValid = validateLogin(loginInput, loginErrorLabel);
  const isEmailValid = validateEmail(emailInput, emailErrorLabel);
  const isAgeValid = validateAge(ageInput, ageErrorLabel);
  const isPasswordValid = validatePassword(passwordInput, passwordErrorLabel);
  const isPasswordRepeatValid = validatePasswordRepeat(
    passwordInput,
    passwordRepeatInput,
    passwordRepeatErrorLabel
  );
  if (isLoginValid && isEmailValid && isAgeValid && isPasswordValid && passwordRepeatErrorLabel) {
    document.querySelector(".valid-registration").classList.remove("hidden");
    loginInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    passwordInput.value = "";
    passwordRepeatInput.value = "";
  }
};
const validateLogin = (loginInput, loginErrorLabel) => {
  const restrictedSymbols = [".", "_", "/", "\\", "|", ","];

  for (const symbol of restrictedSymbols) {
    if ([...loginInput.value].includes(symbol)) {
      loginErrorLabel.innerHTML = `Login must not contain characters: '${restrictedSymbols.join(
        "',  '"
      )}'`;
      loginInput.classList.add("validation-error-input");
      return false;
    }
  }
  if (loginInput.value.length < 4 || loginInput.value.length > 20) {
    loginErrorLabel.innerHTML = `Login must be at least 4 and no more than 20 characters`;
    loginInput.classList.add("validation-error-input");
    return false;
  }
  loginErrorLabel.innerHTML = ``;
  loginInput.classList.remove("validation-error-input");
  return true;
};
const checkIfEmailCorrect = (email) => {
  const atSymbol = email.indexOf("@");
  const dotSymbol = email.lastIndexOf(".");
  const spaceSymbol = email.indexOf(" ");
  return (
    atSymbol != -1 &&
    atSymbol != 0 &&
    dotSymbol != -1 &&
    dotSymbol != 0 &&
    dotSymbol > atSymbol + 1 &&
    email.length > dotSymbol + 1 &&
    spaceSymbol == -1
  );
};
const validateEmail = (emailInput, emailErrorLabel) => {
  if (!checkIfEmailCorrect(emailInput.value)) {
    emailErrorLabel.innerHTML = "Email address is not valid";
    emailInput.classList.add("validation-error-input");
    return false;
  }
  emailErrorLabel.innerHTML = ``;
  emailInput.classList.remove("validation-error-input");
  return true;
};

const validateAge = (ageInput, ageErrorLabel) => {
  if (!ageInput.value.length) {
    ageErrorLabel.innerHTML = "Age is empty";
    ageInput.classList.add("validation-error-input");
    return false;
  }
  if (ageInput.value < 0 || ageInput.value > 120) {
    ageErrorLabel.innerHTML = "Age is not valid";
    ageInput.classList.add("validation-error-input");
    return false;
  }
  ageErrorLabel.innerHTML = ``;
  ageInput.classList.remove("validation-error-input");
  return true;
};

const validatePassword = (passwordInput, passwordErrorLabel) => {
  if (passwordInput.value.length < 6) {
    passwordErrorLabel.innerHTML = "Password must contain at least 6 characters";
    passwordInput.classList.add("validation-error-input");
    return false;
  }
  let hasUppercase = false;
  let hasNumber = false;
  for (const character of passwordInput.value) {
    if (character === character.toUpperCase() && character !== character.toLowerCase()) {
      hasUppercase = true;
    }
    if (!isNaN(character)) {
      hasNumber = true;
    }
  }
  if (!hasUppercase) {
    passwordErrorLabel.innerHTML = "The password must contain at least one uppercase letter";
    passwordInput.classList.add("validation-error-input");
    return false;
  }
  if (!hasNumber) {
    passwordErrorLabel.innerHTML = "The password must contain at least one number";
    passwordInput.classList.add("validation-error-input");
    return false;
  }
  passwordErrorLabel.innerHTML = ``;
  passwordInput.classList.remove("validation-error-input");
  return true;
};

const validatePasswordRepeat = (passwordInput, passwordRepeatInput, passwordRepeatErrorLabel) => {
  if (passwordRepeatInput.value !== passwordInput.value) {
    passwordRepeatErrorLabel.innerHTML = "Passwords must match";
    passwordRepeatInput.classList.add("validation-error-input");
    return false;
  }
  passwordRepeatErrorLabel.innerHTML = ``;
  passwordRepeatInput.classList.remove("validation-error-input");
  return true;
};

/**
 * 11. Create a simple calculator. The page must have buttons from 0 to 9 and signs + - * / =.
 * When you click on each number or sign, the value should appear in the line.
 * When you press the "=" button, display the result of the mathematical expression.
 */
const calculator = document.querySelector(".calculator");

const calculatorDisplay = calculator.querySelector(".calculator-display");

let firstOperand = null;
let operation = null;
let secondOperand = null;
let isPointBlocked = false;

calculator.onclick = (event) => {
  const target = event.target;
  if (target.classList.contains("calculator-button-number")) {
    calculatorDisplay.value += target.value;
  }
  if (target.classList.contains("calculator-button-point")) {
    if (isPointBlocked) {
      return;
    }
    calculatorDisplay.value += target.value;
    isPointBlocked = true;
  }
  if (target.classList.contains("calculator-button-operation")) {
    if (operation) {
      if (calculatorDisplay.value.endsWith(operation)) {
        return;
      }
      secondOperand = Number(calculatorDisplay.value.split(operation).pop());
      calculatorDisplay.value = calculate(firstOperand, operation, secondOperand);
      firstOperand = calculatorDisplay.value;
      operation = target.value;
      calculatorDisplay.value += target.value;
      secondOperand = null;
      isPointBlocked = false;
      return;
    }
    firstOperand = Number(calculatorDisplay.value);
    operation = target.value;
    calculatorDisplay.value += target.value;
    isPointBlocked = false;
  }
  if (target.classList.contains("calculator-button-equal")) {
    secondOperand = Number(calculatorDisplay.value.split(operation).pop());
    calculatorDisplay.value = calculate(firstOperand, operation, secondOperand);
    firstOperand = calculatorDisplay.value;
    operation = null;
    secondOperand = null;
    isPointBlocked = false;
  }
  if (target.classList.contains("calculator-button-clear")) {
    firstOperand = null;
    secondOperand = null;
    operation = null;
    isPointBlocked = false;
    calculatorDisplay.value = "";
  }
};
const calculate = (firstOperand, operation, secondOperand) => {
  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return 0;
  }
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      if (secondOperand === 0) {
        return 0;
      }
      return firstOperand / secondOperand;
    default:
      return 0;
  }
};
/**
 * 12. Create a simple shopping cart. Display several products on the page.
 * Also on the page there must be an icon with a basket, when clicked,
 * a modal window with a list of added products will open.
 * The cart should have a "Empty Cart" button, which, when clicked, will remove all items from the cart.
 */
/**
 * Cookies were used to store cart items, not local storage,
 * since the use of local storage was implemented in my js project
 */
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
  { id: 7, name: "Product 7" },
  { id: 8, name: "Product 8" },
  { id: 9, name: "Product 9" },
];
const cartItems = JSON.parse(getCookie("cart") || `[]`);
const cartButton = document.querySelector(".cart-button");
const productList = document.querySelector(".product-list");
const cartList = document.querySelector(".cart-list");
const cartPopup = document.querySelector(".modal");
const cartClose = cartPopup.querySelector(".close");
const cartDelete = cartPopup.querySelector(".delete-cart");

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const displayProducts = (products) => {
  productList.innerHTML = products.reduce(
    (layout, product) =>
      (layout += `
      <li class="product">
      <h2>Product ${product.id}</h2>
      <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
    </li>`),
    ``
  );
};

productList.onclick = (event) => {
  const target = event.target;
  if (target.classList.contains("add-to-cart")) {
    let productId = +target.getAttribute("data-product-id");
    addToCart(products, productId);
  }
};

displayProducts(products);

const addToCart = (products, productId) => {
  const product = products.find((product) => product.id == productId);
  const existedProduct = cartItems.find((cartProduct) => cartProduct.id == productId);
  if (!cartItems.length || !existedProduct) {
    product.quantity = 1;
    cartItems.push(product);
  } else {
    existedProduct.quantity++;
  }
  document.cookie = `cart = ${JSON.stringify(cartItems)}`;
};
cartButton.onclick = () => {
  cartPopup.classList.add("modal-show");
  cartList.innerHTML = cartItems.reduce(
    (layout, product) =>
      (layout += `
      <li class="cart-item">
      <h2>Product ${product.id}</h2>
      <p>Quantity: ${product.quantity}</p>
    </li>`),
    ``
  );
};

cartClose.onclick = () => {
  cartPopup.classList.remove("modal-show");
};

cartDelete.onclick = () => {
  document.cookie = "cart = []";
  cartItems.length = 0;
  cartList.innerHTML = "";
};
