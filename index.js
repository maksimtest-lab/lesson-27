console.log(this);

// Window
console.log(window.innerWidth, 'innerWidth');
console.log(window.innerHeight, 'innerHeight');

// Navigator
console.log(navigator, 'navigator');
console.log(navigator.userAgent);

// Screen
console.log(screen, 'screen');

// Location
console.log(location, 'location');

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        location.href = `#google.com_${i}`;
    }, `${i}000`);
}

// History
console.log(history, 'history');

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        history.back();

    }
}, 10000)

history.forward();
history.pushState({user_id: 666}, null, '#google.com666');

console.log(history);

// Storage
console.log(localStorage, 'localStorage');
console.log(sessionStorage, 'sessionStorage');

// Хранится постоянно
window.localStorage.setItem('name', 'Igor');
window.localStorage.setItem('age', 25);
window.localStorage.setItem('test', {25: 'Igor'});
window.localStorage.setItem('test2', JSON.stringify({25: 'Igor'}));

// Только сессия, теряется когда вкладка закрылась
window.sessionStorage.setItem('name', 'John');
window.sessionStorage.setItem('age', 32);
window.sessionStorage.setItem('test2', JSON.stringify({32: 'John'}));
console.log(window.sessionStorage.getItem('test'));
console.log(JSON.parse(window.sessionStorage.getItem('test2')), `window.sessionStorage.getItem('test2')`);
window.sessionStorage.removeItem('test2');
console.log(window.sessionStorage.getItem('test2'));
window.sessionStorage.clear();
console.log(sessionStorage, 'sessionStorage');

// Cookies
document.cookie = 'name=Igor';
document.cookie = 'age=25';
console.log(document.cookie, 'cookie');

// DOM
console.log(document, 'document');
console.log(document.body, 'document.body');
console.log(document.body.childNodes, 'document.body.childNodes');
console.log(document.documentElement, 'document.documentElement');

// Все узлы
const childNodes = Array.from(document.body.childNodes).map(el => el);

console.log(childNodes, 'childNodes');

// Только HTML узлы

const bodyChildren = document.body.children;

console.log(bodyChildren, 'bodyChildren');
const div = bodyChildren[0];
console.log(div, 'div');

parentNode = div.parentNode;

console.log(parentNode, 'parentNode'); // Body

const divChildren = div.children;

console.log(divChildren.nextSibling, ' - siblings');
console.log(divChildren.nextElementSibling, ' - element siblings');
console.log(div.firstChild, ' - first siblings');
console.log(div.firstElementChild, ' - fist element siblings');
console.log(div.firstElementChild.textContent, ' - fist element siblings textContent');
console.log(div.lastElementChild.textContent, ' - last element siblings textContent');


// Селекторы

console.log(document.querySelector('div'), ' - querySelector');
console.log(document.querySelector('#first-paragraph'), ' - querySelector');
console.log(document.querySelector('.subtitle'), ' - querySelector');
console.log(document.querySelector('.paragraph'), ' - querySelector');
console.log(document.querySelectorAll('.paragraph'), ' - querySelector All Nodes');

console.log(document.querySelector('.card'), ' - querySelector');

console.log(document.getElementById('first-paragraph'), ' - getElementById');
console.log(document.getElementsByClassName('paragraph'), ' - getElementsByClassName');
console.log(document.getElementsByName('user-input'), ' - getElementsByName');
console.log(document.getElementsByTagName('p'), ' - getElementsByTagName');

// Создание
const newDiv = document.createElement('div');
const block = document.querySelector('.block');

newDiv.createTextNode = 'New div';
newDiv.textContent = 'New div 2';
newDiv.classList.add('newDiv');
newDiv.id = 'newDiv';
// document.body.appendChild(newDiv);
block.appendChild(newDiv);

const parentBlock = block.parentElement;
parentBlock.insertBefore(newDiv, block);


// Удаление
// block.remove();
// newDiv.remove();

// Стили
div.setAttribute('class', 'newClass');

console.log(div.classList.contains('newClass'));
console.log(div.classList.contains('newClass2'));

block.style.color = 'red';
block.style.padding = '20px';
block.style.cssText = 'background-color: yellow; font-size: 30px;';