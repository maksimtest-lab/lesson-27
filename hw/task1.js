//  Создание простого калькулятора:

//     - создайте HTML-разметку для калькулятора с кнопками и полем отображения результата.
//     - используя JavaScript, добавьте обработчики событий для кнопок, чтобы реализовать функционал калькулятора (сложение, вычитание, умножение, деление). Предусмотрите невозможность деления на 0.
//     - обновляйте поле отображения результата при каждой операции.

const buttons = document.querySelectorAll('.calculator__body button');
const sequince = [];
const sequinceFormated = [];
const operators = ['+', '-', '/', '*'];
const preventedOperators = ['C'];

// console.log(cals);

const updateCalculatorTitle = () => {
    let title = document.querySelector('.calculator__header--sequince');
    let result = calculateResult();

    title.textContent = "";
    if (sequinceFormated.length > 0) {
        console.log(result);
        if (result != Infinity) {
            title.textContent = sequinceFormated.join("") + "=" + result;
        } else {
            title.textContent = "Деление на ноль невозможно";
        }
    }
}

const calculate = (num1, num2, operation) => {
    num1 = +num1;
    num2 = +num2;

    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
    }
}

const calculateResult = () => {
    let currentOperation;
    let result = 0;

    for (let i = 0; i < sequinceFormated.length; i++) {
        // console.log(result);
        // console.log(currentOperation);
        let item = sequinceFormated[i];

        if (operators.includes(item)) {
            prevNum = sequinceFormated[i - 1];
            currentOperation = item;

        } else if(currentOperation && item) {
            result = calculate(result, item, currentOperation);

        } else if (!result) {
            result = item;
        }

    }

    return result;
}

buttons.forEach((item, value) => {
    item.addEventListener('click', (event) => {
        let symbol = item.textContent;
        sequince.push(symbol);

        if(sequinceFormated.length == 0 && operators.includes(symbol) || preventedOperators.includes(symbol)) {
            // Если кликаем на оператор и при этом пустой массив то ничего не добавляем, хотя минус можно было бы
            console.log('empty array');
        } else if(sequinceFormated.length > 0 && operators.includes(symbol) && operators.includes(sequinceFormated[sequinceFormated.length - 1])) {
            // Если кликаем на оператор и предыдущий у нас тоже оператор, то перезаписываем его
            sequinceFormated[sequinceFormated.length - 1] = symbol;

        } else if(sequinceFormated.length > 0 && !operators.includes(symbol) && !operators.includes(sequinceFormated[sequinceFormated.length - 1])) {
            // Если кликаем на число и предыдущий у нас тоже число, то складываем их как строку и преобразовываем в число
            sequinceFormated[sequinceFormated.length - 1] = Number(String(sequinceFormated[sequinceFormated.length - 1]) + symbol);

        } else {
            // Все остальные случаи тогда просто добавляем в последовательность
            sequinceFormated.push(item.textContent);
        }
        updateCalculatorTitle();
    })
})


const clearButton = document.getElementById('clear_calculator');

clearButton.addEventListener('click', (event) => {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    sequince.length = 0;
    sequinceFormated.length = 0;
    updateCalculatorTitle();
})

console.log(calculateResult());