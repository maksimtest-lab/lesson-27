// создайте HTML-разметку для слайдера изображений, содержащего элементы управления (например, кнопки "Предыдущий" и "Следующий") и область отображения изображения.
// используя JavaScript, добавьте обработчики событий для кнопок, чтобы реализовать функционал переключения изображений.
// обновляйте область отображения с текущим изображением при каждом переключении.

const items = document.querySelectorAll('.slider__item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let current = 0;

prev.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = items.length - 1;
    }
    updateSlider();
});

next.addEventListener('click', () => {
    current++;
    if (current >= items.length) {
        current = 0;
    }
    updateSlider();
});

function updateSlider() {
    items.forEach((item, index) => {
        if (index === current) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}