# 🚀 JavaScript Practice Playground

> A beginner-friendly JavaScript practice project containing multiple small interactive web projects built with **HTML, CSS, and Vanilla JavaScript**.

The main purpose of this repository is to **learn and practice JavaScript by building real, interactive mini-projects** instead of only studying JavaScript theory.

The project currently contains:

* 🎨 **Color Changer**
* 🧮 **BMI Calculator**
* 🕐 **Digital Clock**
* 🔢 **Guess the Number** *(planned / currently commented out)*

---

## 📌 Project Overview

This project is designed as a **JavaScript learning playground**.

HTML provides the structure, CSS provides the visual design, and JavaScript provides the actual functionality and interaction.

### Technology Stack

* **HTML5** — Page structure and form elements
* **CSS3** — Layout, styling, responsiveness, animations and visual design
* **JavaScript (Vanilla JS)** — Logic, DOM manipulation, events, calculations and dynamic updates

> **Main Learning Focus: JavaScript**

No frameworks or libraries are used in this project.

---

# 📂 Project Structure

```text
JS-Practice-Playground/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    ├── bmi.js
    ├── colorChange.js
    └── digitalClock.js
```

### File Responsibilities

| File                 | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `index.html`         | Main HTML page containing all project sections |
| `css/style.css`      | Complete UI styling and responsive layout      |
| `js/bmi.js`          | BMI Calculator functionality                   |
| `js/colorChange.js`  | Color Changer functionality                    |
| `js/digitalClock.js` | Digital Clock functionality                    |

---

# 🏗️ HTML

The `index.html` file provides the structure for the complete playground.

It contains a main dashboard with separate cards for each JavaScript project.

## Main HTML Sections

### Header

The header introduces the project:

```html
<header>
    <h1>
        <pre>
            JS Practice Playground
        </pre>
    </h1>

    <p>Three classic JavaScript projects in one clean dashboard</p>
</header>
```

The header provides the title and a short description of the playground.

---

## 🎨 Color Changer HTML

The Color Changer contains several clickable elements:

```html
<div class="color-buttons-container">
    <div class="color-btn" id="red"></div>
    <div class="color-btn" id="green"></div>
    <div class="color-btn" id="blue"></div>
    <div class="color-btn" id="yellow"></div>
    <div class="color-btn" id="purple"></div>
    <div class="color-btn" id="reset">Reset</div>
</div>
```

Each element has an `id`.

JavaScript uses that `id` to determine which background color should be applied.

---

# 🧮 BMI Calculator HTML

The BMI Calculator contains a form with two inputs:

```html
<input type="number" id="height" placeholder="e.g., 175">

<input type="number" id="weight" placeholder="e.g., 70">
```

The user enters:

* Height in centimeters
* Weight in kilograms

The form is submitted using:

```html
<button type="submit" class="submit-btn">
    Calculate
</button>
```

The calculated result is displayed inside:

```html
<div id="bmi-result"></div>
```

The HTML also contains a BMI weight guide:

```text
Underweight: BMI < 18.5
Normal weight: BMI 18.5 - 24.9
Overweight: BMI 25 - 29.9
Obesity: BMI >= 30
```

JavaScript reads these elements and dynamically displays the appropriate category.

---

# 🕐 Digital Clock HTML

The clock uses a simple container:

```html
<div id="clock" class="clock-display">
    00:00:00
</div>
```

JavaScript continuously updates this element with the current local time.

---

# 🎨 CSS

The CSS file provides the complete visual design of the playground.

The project uses a **dark dashboard-style UI** with responsive cards.

---

## CSS Variables

The project uses CSS custom properties:

```css
:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-color: #f8fafc;
    --accent-color: #38bdf8;
    --accent-hover: #0ea5e9;
    --border-color: #334155;
}
```

This makes the design easier to maintain.

For example:

```css
background-color: var(--bg-color);
```

Instead of repeatedly writing the same color:

```css
background-color: #0f172a;
```

---

# 📱 Responsive Layout

The project dashboard uses CSS Grid:

```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(280px, 1fr)
    );
}
```

This allows the project cards to automatically adjust according to the available screen width.

The layout can therefore work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

---

# 🃏 Project Cards

Each JavaScript project is displayed inside a card:

```css
.project-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
}
```

Cards also have a hover effect:

```css
.project-card:hover {
    transform: translateY(-4px);
}
```

This creates a small visual movement when the user places the mouse over a project.

---

# 🎨 Color Changer Styling

Each color button has its own CSS color:

```css
#red {
    background-color: #ef4444;
}

#green {
    background-color: #22c55e;
}

#blue {
    background-color: #3b82f6;
}

#yellow {
    background-color: #eab308;
}

#purple {
    background-color: #a855f7;
}
```

The buttons also have a hover effect:

```css
.color-btn:hover {
    transform: scale(1.05);
}
```

---

# 🕐 Digital Clock Styling

The clock is styled as a large digital display:

```css
.clock-display {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 1.5rem;
    letter-spacing: 2px;
}
```

---

# 🧮 BMI Form Styling

The BMI form uses Flexbox:

```css
.bmi-form {
    display: flex;
    flex-direction: column;
}
```

This places the labels, inputs and button vertically.

---

# ⭐ JavaScript — Main Learning Focus

The most important part of this project is JavaScript.

The projects demonstrate several fundamental JavaScript concepts that are extremely important for beginners.

---

# 1. DOM Selection

The project uses JavaScript to find HTML elements.

### `querySelector()`

Example:

```javascript
const form = document.querySelector('.bmi-form');
```

This selects the first HTML element matching:

```css
.bmi-form
```

Another example:

```javascript
const body = document.querySelector('body');
```

This selects the `<body>` element.

---

### `querySelectorAll()`

The Color Changer uses:

```javascript
const buttons = document.querySelectorAll('.color-btn');
```

Unlike `querySelector()`, `querySelectorAll()` selects **all matching elements**.

Here it selects all elements having:

```html
class="color-btn"
```

The result can then be processed using:

```javascript
buttons.forEach(...)
```

---

### `getElementById()`

The Digital Clock uses:

```javascript
const clock = document.getElementById('clock');
```

This directly finds:

```html
<div id="clock">
```

---

# 2. Event Listeners

JavaScript listens for user actions using:

```javascript
addEventListener()
```

For example, the BMI form listens for a submit event:

```javascript
form.addEventListener('submit', function (e) {
    ...
});
```

The Color Changer listens for clicks:

```javascript
btn.addEventListener('click', function (e) {
    ...
});
```

This is one of the most important concepts in browser JavaScript:

> **User action → JavaScript event → JavaScript logic → DOM update**

---

# 3. Preventing Default Form Submission

Normally, submitting an HTML form causes the browser to reload or navigate.

The BMI Calculator prevents that behavior:

```javascript
e.preventDefault();
```

Therefore:

```text
User clicks Calculate
        ↓
submit event occurs
        ↓
preventDefault()
        ↓
Page does NOT reload
        ↓
JavaScript calculates BMI
        ↓
Result appears on the same page
```

This is an important concept when creating interactive forms.

---

# 4. Reading User Input

The BMI Calculator reads values from HTML inputs:

```javascript
const height =
    parseInt(document.querySelector('#height').value);

const weight =
    parseInt(document.querySelector('#weight').value);
```

The `.value` property retrieves what the user entered.

For example:

```text
Height = 175
Weight = 70
```

JavaScript receives these values from the form.

---

# 5. Converting String Input to Number

HTML form values are generally received as strings.

Therefore, the project uses:

```javascript
parseInt()
```

Example:

```javascript
parseInt("175");
```

returns:

```text
175
```

This allows JavaScript to perform numerical calculations.

---

# 6. Input Validation

The BMI Calculator validates the user's input before performing the calculation.

Example:

```javascript
if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML =
        `Please Enter the Valid height ${height}`;
}
```

The code checks whether:

* The value is empty
* The value is zero or negative
* The value is not a valid number

The same validation is performed for weight.

---

# 7. `isNaN()`

The project uses:

```javascript
isNaN(height)
```

`isNaN()` checks whether a value is **Not a Number**.

Example:

```javascript
isNaN(175);
```

returns:

```text
false
```

while an invalid numeric value can result in:

```text
true
```

This helps prevent invalid input from being used in the BMI calculation.

---

# 8. BMI Calculation

The BMI calculation is performed using:

```javascript
const bmi =
    (weight / ((height * height) / 10000))
    .toFixed(2);
```

The standard BMI formula is:

```text
BMI = Weight / Height²
```

Because the user enters height in centimeters, the code converts the calculation appropriately for meters.

### Example

```text
Height = 175 cm
Weight = 70 kg
```

The resulting BMI is approximately:

```text
22.86
```

---

# 9. `toFixed(2)`

The project uses:

```javascript
.toFixed(2)
```

This limits the displayed BMI to two decimal places.

For example:

```text
22.857142
```

becomes:

```text
22.86
```

This makes the result easier to read.

---

# 10. BMI Category Logic

After calculating BMI, JavaScript determines the weight category.

The logic is:

```javascript
if (bmi < 18.5) {
    category = ...
}
else if (bmi <= 24.9) {
    category = ...
}
else if (bmi <= 29.9) {
    category = ...
}
else {
    category = ...
}
```

The logic can be represented as:

```text
BMI < 18.5
      ↓
Underweight

18.5 - 24.9
      ↓
Normal Weight

25 - 29.9
      ↓
Overweight

30+
      ↓
Obesity
```

This is an example of using:

* `if`
* `else if`
* `else`
* Comparison operators
* Conditional logic

---

# 11. Reading Existing HTML Content with JavaScript

Instead of hardcoding the category names again in JavaScript, the code reads them from the HTML:

```javascript
const listItems =
    document.querySelectorAll('#weight-guide ul li');
```

This selects all `<li>` elements inside the BMI guide.

The code then checks:

```javascript
if (listItems.length > 0)
```

before trying to access the list items.

---

# 12. Using `innerText`

The category text is retrieved using:

```javascript
listItems[0].innerText
```

For example, the HTML contains:

```text
Underweight: BMI < 18.5
```

The code then uses:

```javascript
.split(':')[0]
```

to extract:

```text
Underweight
```

So:

```javascript
listItems[0].innerText.split(':')[0]
```

means:

```text
Get the text
      ↓
Split it at ":"
      ↓
Take the first part
```

---

# 13. Dynamic HTML with `innerHTML`

The final BMI result is displayed using:

```javascript
results.innerHTML =
    `Your BMI is <strong>${bmi}</strong> (${category})`;
```

This demonstrates **template literals** and **dynamic HTML rendering**.

For example:

```text
Your BMI is 22.86 (Normal weight)
```

The `${...}` syntax allows JavaScript variables to be inserted into a string.

---

# 14. Template Literals

The project uses backticks:

```javascript
`Your BMI is ${bmi}`
```

instead of:

```javascript
"Your BMI is " + bmi
```

Template literals make dynamic strings easier to read.

Example:

```javascript
const name = "John";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

# 🎨 Color Changer JavaScript

The Color Changer demonstrates how JavaScript can dynamically change CSS.

First, all color buttons are selected:

```javascript
const buttons =
    document.querySelectorAll('.color-btn');
```

Then each button receives a click event:

```javascript
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        ...
    });
});
```

---

# 15. `forEach()`

The code uses:

```javascript
buttons.forEach(...)
```

This allows JavaScript to perform the same operation on every color button.

Conceptually:

```text
Find all color buttons
        ↓
Loop through each button
        ↓
Add click event
        ↓
Wait for user click
```

---

# 16. Event Object

When a button is clicked, JavaScript receives an event object:

```javascript
function (e) {
```

The clicked element can be accessed using:

```javascript
e.target
```

The project then retrieves its ID:

```javascript
e.target.id
```

For example, clicking:

```html
<div class="color-btn" id="red"></div>
```

produces:

```javascript
e.target.id
```

with the value:

```text
red
```

---

# 17. Dynamic CSS Using JavaScript

The Color Changer changes the body background dynamically:

```javascript
body.style.backgroundColor = e.target.id;
```

If the user clicks the red button:

```text
e.target.id = "red"
```

JavaScript effectively performs:

```javascript
body.style.backgroundColor = "red";
```

If the user clicks blue:

```javascript
body.style.backgroundColor = "blue";
```

This demonstrates the connection between:

```text
JavaScript
    ↓
DOM
    ↓
CSS style
    ↓
Visual change
```

---

# 18. Reset Logic

The reset button uses a condition:

```javascript
if (e.target.id === 'reset') {
    body.style.backgroundColor = '#0f172a';
}
```

Therefore:

```text
Click Red
   ↓
Background becomes red

Click Blue
   ↓
Background becomes blue

Click Reset
   ↓
Background returns to default dark color
```

This is another practical example of conditional logic.

---

# 🕐 Digital Clock JavaScript

The Digital Clock demonstrates a different JavaScript concept:

> **Running code repeatedly at a fixed time interval.**

First, the clock element is selected:

```javascript
const clock =
    document.getElementById('clock');
```

---

# 19. `setInterval()`

The clock uses:

```javascript
setInterval(function () {

    let date = new Date();

    clock.innerText =
        date.toLocaleTimeString();

}, 1000);
```

`setInterval()` repeatedly executes the function.

The value:

```javascript
1000
```

means:

```text
1000 milliseconds = 1 second
```

Therefore, the clock updates every second.

---

# 20. JavaScript `Date()`

Every second, the code creates a new Date object:

```javascript
let date = new Date();
```

The `Date` object provides information about the current date and time.

---

# 21. `toLocaleTimeString()`

The current time is formatted using:

```javascript
date.toLocaleTimeString()
```

This produces a local time representation such as:

```text
10:35:42 AM
```

The result is then inserted into the page:

```javascript
clock.innerText =
    date.toLocaleTimeString();
```

---

# 🔄 Digital Clock Logic

The complete logic can be visualized as:

```text
Start application
       ↓
Find #clock element
       ↓
Start setInterval()
       ↓
Wait 1 second
       ↓
Create new Date()
       ↓
Get current local time
       ↓
Update #clock
       ↓
Wait another second
       ↓
Repeat...
```

This gives the user a live digital clock.

---

# 🧠 JavaScript Concepts Practiced

This project provides practice with many fundamental JavaScript concepts.

### DOM

```javascript
document.querySelector()
document.querySelectorAll()
document.getElementById()
```

### Events

```javascript
addEventListener()
```

### Event Object

```javascript
event
event.target
event.target.id
```

### Forms

```javascript
submit
preventDefault()
```

### Input Values

```javascript
element.value
```

### Type Conversion

```javascript
parseInt()
```

### Validation

```javascript
isNaN()
```

### Conditions

```javascript
if
else if
else
```

### Loops / Iteration

```javascript
forEach()
```

### DOM Manipulation

```javascript
innerText
innerHTML
```

### CSS Manipulation

```javascript
element.style.backgroundColor
```

### Mathematical Operations

```javascript
+
-
*
/
```

### String Manipulation

```javascript
split()
```

### Number Formatting

```javascript
toFixed()
```

### Template Literals

```javascript
`${variable}`
```

### Date & Time

```javascript
new Date()
toLocaleTimeString()
```

### Timers

```javascript
setInterval()
```

---

# 🔗 How the Three Projects Work

The projects follow the same basic browser JavaScript pattern:

```text
HTML
 ↓
Creates elements
 ↓
JavaScript selects elements
 ↓
JavaScript listens for events
 ↓
JavaScript performs logic
 ↓
DOM / CSS is updated
 ↓
User sees the result
```

---

# 🎯 Learning Goals

The main goal of this project is to strengthen JavaScript fundamentals through practical projects.

The project focuses on learning how JavaScript interacts with a web page.

### Current Learning Goals

* Understand the DOM
* Select HTML elements
* Handle browser events
* Read form input
* Validate user input
* Perform calculations
* Use conditional statements
* Loop through elements
* Modify HTML dynamically
* Modify CSS dynamically
* Work with dates and times
* Use JavaScript timers
* Build interactive browser applications

---

# 🚧 Future Projects

The repository can be expanded with more JavaScript mini-projects.

One project already prepared in the HTML is:

### 🔢 Guess The Number

The HTML structure currently exists but is commented out.

Possible future projects:

* 🔢 Guess the Number
* 📝 To-Do List
* ⏱️ Stopwatch
* ⏳ Countdown Timer
* 🎯 Random Quote Generator
* 🔐 Password Generator
* 📝 Character Counter
* 🎲 Dice Roller
* 🔍 Search Filter
* 🖼️ Image Slider
* ❓ Quiz Application
* 🛒 Shopping Cart
* 💰 Expense Tracker
* 📝 Notes App

---

# ▶️ How to Run

No installation or build process is required.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/JS-Practice-Playground.git
```

### 2. Open the project

```text
JS-Practice-Playground/
```

### 3. Open `index.html`

You can simply open:

```text
index.html
```

in your browser.

For development, using **VS Code + Live Server** is recommended.

---

# 🛠️ Development Environment

Recommended tools:

* **Visual Studio Code**
* **Google Chrome**
* **Live Server extension**
* **Git**
* **GitHub**

---

# 📚 What I Learned

Through this project, I am practicing the transition from JavaScript syntax and theory to actual browser-based applications.

The most important concept is understanding that JavaScript is not only about writing functions and variables.

It can also:

```text
Read HTML
   ↓
Respond to user actions
   ↓
Process data
   ↓
Apply logic
   ↓
Change HTML
   ↓
Change CSS
   ↓
Create interactive web applications
```

---

# 🔐 Security Note

This is a client-side JavaScript learning project.

The BMI Calculator performs validation in the browser, but this validation should **not** be considered server-side security validation for a production application.

Similarly, DOM APIs such as `innerHTML` should be used carefully when displaying untrusted user-generated content.

This repository is intended primarily for:

* Learning
* Practice
* Experimentation
* Understanding JavaScript fundamentals

---

# 📈 Project Status

| Project             | Status      |
| ------------------- | ----------- |
| 🎨 Color Changer    | ✅ Completed |
| 🧮 BMI Calculator   | ✅ Completed |
| 🕐 Digital Clock    | ✅ Completed |
| 🔢 Guess The Number | 🚧 Planned  |

---

# 📌 Key Takeaway

> **The purpose of this project is to learn JavaScript by building rather than only reading theory.**

Each mini-project focuses on a different JavaScript concept:

```text
Color Changer
→ DOM + Events + CSS Manipulation

BMI Calculator
→ Forms + Validation + Conditions + Calculations

Digital Clock
→ Date + Timers + DOM Updates

Guess The Number
→ Future JavaScript Practice
```

---

# 🤝 Contributing

This repository is primarily a personal JavaScript learning project.

However, suggestions, improvements and beginner-friendly ideas are welcome.

If you find a bug or have an idea for another JavaScript practice project, feel free to open an issue or submit a pull request.

---

# 📄 License

This project is available for educational and learning purposes.

---

## ⭐ Author

- 
## 👨‍💻 Author


**### 🔗 Connect

**SyedStackLab**
*Aspiring Full-Stack Web Developer*
- GitHub: `https://github.com/SyedMobinMian`
- LinkedIn: `https://www.linkedin.com/in/syedalimian`
I am a developer focused on strengthening my programming fundamentals by building practical projects and learning through hands-on development.

### 🎯 Career & Learning Goals

My goal is to become a strong **Full-Stack Web Developer** with a solid understanding of both frontend and backend development.
I am currently focusing on:

* 🟨 **JavaScript** — DOM, Events, ES6+, APIs, Async JavaScript and modern JavaScript development
* ⚛️ **React.js** — Component-based frontend development
* 🟢 **Node.js** — Backend development with JavaScript
* 🐘 **PHP** — Server-side development
* 🔥 **Laravel** — Modern PHP web application development
* 🗄️ **MySQL** — Database design and SQL
* 🐍 **Python** — Programming, automation and future AI/ML development
* 🤖 **AI & Machine Learning** — Future learning and project development

### 💡 Development Philosophy

> **Learn the fundamentals → Build projects → Understand the logic → Improve → Build again.**
I prefer learning by building practical projects rather than relying only on theoretical knowledge.
This repository is part of that journey, with a particular focus on understanding **JavaScript fundamentals through small, practical projects**.



### 🚀 Ambition

My long-term goal is to build reliable, secure and maintainable web applications while continuously improving my programming fundamentals and understanding how modern web technologies work together.

This repository represents one step in that journey.

---

## 💡 Final Note

This project is intentionally kept simple.

The objective is not to use complicated frameworks or advanced architecture, but to understand the fundamentals of **HTML + CSS + JavaScript** and learn how they work together to create interactive web pages.
