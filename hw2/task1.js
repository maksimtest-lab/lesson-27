// Задание на XSS атаку

// Создайте простую веб-страницу, на которой пользователь может ввести свое имя в форму. Напишите скрипт, который вставит имя пользователя на страницу без экранирования. Попробуйте ввести вредоносный скрипт в поле для имени и убедитесь, что он будет выполнен.

const input = document.querySelector('input#name');
const output = document.querySelector('.output');

input.addEventListener('input', () => {
    output.innerHTML = input.value;
});
