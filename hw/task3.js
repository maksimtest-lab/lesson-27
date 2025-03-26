// используя JavaScript, выполните асинхронный запрос на сервер для получения данных в формате JSON.
// обработайте полученные данные и отобразите их на странице, например, в виде списка или таблицы.
// реализуйте обработку ошибок и отображение сообщения об ошибке, если запрос завершился неудачно.

const container = document.querySelector('.container');
const apiUrl = 'https://swapi.dev/api/people/';
const tableKeys = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

const getData = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results) {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            table.appendChild(thead);
            table.appendChild(tbody);

            const tr = document.createElement('tr');
            thead.appendChild(tr);

            for (key in tableKeys) {
                const th = document.createElement('th');
                th.textContent = tableKeys[key];
                tr.appendChild(th);
            }

            container.textContent = '';
            container.appendChild(table);

            // const ul = document.createElement('ul');
            // container.appendChild(ul);

            data.results.forEach((item) => {
                const tr = document.createElement('tr');
                for (key in tableKeys) {
                    const td = document.createElement('td');
                    td.textContent = item[tableKeys[key]];
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);

                // const li = document.createElement('li');
                // li.textContent = item.name;
                // ul.appendChild(li);
            });
        }
    } catch (error) {
        container.textContent = 'Ошбика загрузки данных((';
        console.error(error);
    }
};


getData();