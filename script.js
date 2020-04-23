const list = document.querySelector('.todo-list__list');
const input = document.getElementById('todo-list__input');
const button = document.querySelector('.todo-list__button');

button.addEventListener('click', () => {
    if (input.value !== '') {
        addListItemFunction();
    } else {
        alert('You must write something!');
    }
});
input.addEventListener('keydown', () => {
    if (event.which === 13) {
        if (input.value !== '') {
            addListItemFunction();
        } else {
            alert('You must write something!');
        }
    }
});

//обрабатываем список
editingList();

list.addEventListener('click', listFunction);

//Функция изменения стилей и удаления
function listFunction(event) {
    let target = event.target;

    if ((target.tagName !== 'LI') && (target.tagName !== 'I')) {
        target = target.closest('li');
        if (target.classList.contains('bg_two')) {
            target.firstElementChild.firstElementChild.classList.add('none');
            target.children[1].classList.remove('text-decoration');
            target.classList.remove('bg_two');
        } else if (target.tagName !== 'I') {
            target.firstElementChild.firstElementChild.classList.remove('none');
            target.children[1].classList.add('text-decoration');
            target.classList.add('bg_two');
        }
    } else if (target.tagName === 'I') {
        target = target.closest('li');
        target.remove();
        // Обрабатываем список
        editingList();
    }

}
// Функция добавдения новой строки
function addListItemFunction() {

    let li = document.createElement('li');
    li.classList.add('todo-list__item');

    let spanI = document.createElement('span');
    spanI.classList.add('done');

    let iDone = document.createElement('i');
    iDone.classList.add('material-icons');
    iDone.classList.add('none');
    iDone.innerHTML = 'done';

    let spanValue = document.createElement('span');
    spanValue.innerHTML = input.value;
    input.value = '';

    let iClear = document.createElement('i');
    iClear.classList.add('material-icons');
    iClear.classList.add('clear');
    iClear.innerHTML = 'clear';

    list.append(li);
    li.append(spanI);
    spanI.append(iDone);
    li.append(spanValue);
    li.append(iClear);
    //обрабатываем список
    editingList();
}

// Функция обработки списка
function editingList() {
    for (let i = 0; i < list.children.length; i++) {
        if (list.children[i].classList.contains('bg')) {
            list.children[i].classList.remove('bg')
        }
        if (i % 2 !== 0) {
            list.children[i].classList.add('bg');
        }
    }
}

