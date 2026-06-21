# 🚀 Premium BMI Calculator
A modern, responsive Body Mass Index (BMI) calculator built with vanilla HTML, CSS (Outfit typography, sleek dark slate theme), and JavaScript. 
This project demonstrates clean JavaScript concepts including:
*   Real-time validation of text and numeric inputs
*   Dynamic CSS styling through JavaScript ClassList manipulation
*   Logical operators for range checking and error checking
*   Browser input parser behaviors
---
## 📂 Project Structure
*   `index.html`: The markup structure, using semantic HTML5 elements.
*   `style.css`: Modern styling using HSL color variables, transitions, and hover animations.
*   `script.js`: Core logic for input validation, BMI calculations, and DOM manipulation.
---
## 💡 Key Programming Concepts Learned
### 1. Range Validation (`&&` vs `||`)
*   **Checking inside a range:** To check if a BMI is **between** 25 and 29.9, both conditions must be true at the same time:
    ```javascript
    if (calculatedBmi >= 25 && calculatedBmi <= 29.9) { ... }
    ```
*   **Checking outside a range:** To check if a number is **too small** or **too big**, we check if either condition is true:
    ```javascript
    if (value < 10 || value > 20) { ... }
    ```
### 2. Browser Input Parsers (`type="text"` vs `type="number"`)
*   Using `<input type="number">` causes the browser's internal parser to automatically hide invalid inputs (like `4+` or `70#`) and return `""` to JavaScript.
*   By using `<input type="text">`, JavaScript can read the raw string, check if it's empty, and use `isNaN()` to correctly tell the user to *"type in a correct weight"*.
### 3. Modifying DOM Elements vs Variables
*   Creating a variable like `let inputValue = inputElement.value` only makes a copy of the text.
*   To clear the input box on the screen, you must talk directly to the HTML element:
    ```javascript
    inputElement.value = '';
    ``
