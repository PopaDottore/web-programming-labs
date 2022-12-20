function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Литвин Валерия. Фахраддинова Ирина';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-03, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Litvin Valeria. Faxraddinova Irina';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';
}