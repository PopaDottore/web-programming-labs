function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок'
}

function clickMe2(button) {
    if(button.innerHTML == 'Литвин')
        button.innerHTML = 'Валерия';
    else
        button.innerHTML = 'Литвин'
}

function clickMe3(button) {
    if(button.innerHTML == 'Фахраддинова')
        button.innerHTML = 'Ирина';
    else
        button.innerHTML = 'Фахраддинова'
}

function clickMe4(button) {
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Еще раз нажми'
    else if
        (button.innerHTML == 'Еще раз нажми')
        button.innerHTML = 'Еще'
    else if
        (button.innerHTML == 'Еще')
        button.innerHTML = 'Начать сначала'
    else
        button.innerHTML = 'Нажми меня'
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
})
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) 
        alert("Был нажат CTRL")
});

document.addEventListener("keydown", function (event) {
    if (event.shiftKey) 
        alert("Был нажат SHIFT")
});

document.addEventListener("keydown", function (event) {
    if (event.altKey) 
        alert("Был нажат ALT")
});