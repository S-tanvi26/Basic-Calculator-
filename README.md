# Basic-Calculator-
<div align="center">
# 🧮 Simple Calculator
 
### *A clean, lightweight calculator built with HTML, CSS & JavaScript* ✨
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-success)
 
</div>
---
 
## 📖 About the Project
 
This is a **basic calculator web app** that runs entirely in the browser. No frameworks, no dependencies, just pure HTML, CSS, and vanilla JavaScript. It's a great beginner project for learning DOM manipulation and event handling. 🚀
 
---
 
## ✨ Features
 
- ➕ **Basic operations**: addition, subtraction, multiplication, and division
- 🔢 **Decimal support** with the `.` button
- 🧹 **Clear (C)** button to reset the display
- ⌫ **Delete (DEL)** button to remove the last character
- 🛡️ **Input validation**: only digits and math operators are allowed
- ⚠️ **Error handling**: invalid expressions and division by zero show `Error`
- 📱 **Simple grid layout** for the buttons
- 💡 **Zero dependencies**: works by just opening `index.html`
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|:---:|:---|
| 🌐 **HTML5** | Structure of the calculator |
| 🎨 **CSS3** | Styling and grid layout |
| ⚡ **JavaScript** | Calculator logic and interactivity |
 
---
 
## 📂 Project Structure
 
```
📦 simple-calculator
 ┣ 📜 index.html     # Calculator layout
 ┣ 🎨 style.css      # Styling
 ┣ ⚡ script.js      # Logic
 ┗ 📘 README.md
```
 
---
 
## 🚀 Getting Started
 
### 1️⃣ Clone the repository
 
```bash
git clone https://github.com/<your-username>/simple-calculator.git
cd simple-calculator
```
 
### 2️⃣ Run the app
 
Just open `index.html` in any browser. 🎉
 
```bash
# macOS
open index.html
 
# Windows
start index.html
 
# Linux
xdg-open index.html
```
 
---
 
## 🎮 How to Use
 
| Button | Action |
|:---:|:---|
| `0-9` | Enter numbers |
| `+  -  *  /` | Choose an operation |
| `.` | Add a decimal point |
| `=` | Calculate the result |
| `C` | Clear everything |
| `DEL` | Delete the last character |
 
**Example:** press `1` `2` `*` `3` `=` and the display shows `36` ✅
 
---
 
## 🧠 How It Works
 
```javascript
function calculate() {
    // 1. Read the expression from the display
    // 2. Validate it with a regex (only numbers and operators allowed)
    // 3. Evaluate it safely in strict mode
    // 4. Show the result, or "Error" if it's invalid or infinite
}
```
 
- 🔒 A **regular expression** (`/^[0-9+\-*/.()\s]+$/`) blocks any unsafe characters before evaluation.
- ♾️ `Number.isFinite()` catches results like division by zero.
- 🧯 A `try...catch` block handles malformed expressions gracefully.
---
 
## 🔮 Future Improvements
 
- 🎨 Modern UI with rounded buttons and a dark mode
- ⌨️ Keyboard input support
- 📜 Calculation history
- ➗ Scientific functions (√, %, powers)
- 📱 Fully responsive design
---
 
## 🤝 Contributing
 
Contributions, issues, and feature requests are welcome! 🎉
Fork the repo and open a pull request.
 
---
 
## 👤 Author
 
<div align="center">
### ⭐ If you like this project, give it a star! ⭐
 
*Made with ❤️ using HTML, CSS & JavaScript*
 
</div>
 













