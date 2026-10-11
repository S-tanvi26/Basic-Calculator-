
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.value = Number.isFinite(result) ? result : "Error";
    } catch {
        display.value = "Error";
    }
}
```

