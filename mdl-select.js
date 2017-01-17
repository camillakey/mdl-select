window.addEventListener('load', function() {
    initSelect();
});

function initSelect() {
    document.querySelectorAll('.mdl-select').forEach(initSelectDiv);
}

function initSelectDiv(selectDiv) {
    let label = selectDiv.querySelector('label');
    let select = selectDiv.querySelector('select');
    let optionList = select.querySelectorAll('option');

    let hiddenInput = createHiddenInput(select);
    let selectInput = createSelectInput(select);
    let selectLabel = createSelectLabel(select, label);

    let ulForSelect = createUlForSelect(selectDiv, select, optionList, hiddenInput, selectInput);

    removeAll(selectDiv);

    selectDiv.appendChild(hiddenInput);
    selectDiv.appendChild(selectInput);
    selectDiv.appendChild(selectLabel);
    selectDiv.appendChild(ulForSelect);

    if (selectDiv.classList.contains('mdl-select--floating-label')) {
        selectDiv.className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';
    } else {
        selectDiv.className = 'mdl-textfield mdl-js-textfield mdl-select';
    }
}

function createHiddenInput(select) {
    let input = document.createElement('input');
    input.name = select.name;
    input.type = 'hidden';

    return input;
}

function createSelectInput(select) {
    let input = document.createElement('input');
    input.id = select.id;
    input.type = 'text';
    input.readOnly = true;
    input.classList.add('mdl-textfield__input');

    return input;
}

function createSelectLabel(select, label) {
    let selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', select.id);
    selectLabel.classList.add('mdl-textfield__label');
    selectLabel.innerHTML = label.innerHTML;

    return selectLabel;
}

function createUlForSelect(selectDiv, select, optionList, hiddenInput, selectInput) {
    let ul = document.createElement('ul');
    ul.setAttribute('for', select.id);
    ul.classList.add('mdl-menu', 'mdl-js-menu', 'mdl-menu--bottom-left');

    optionList.forEach(function(option) {
        var li = document.createElement('li');
        li.classList.add('mdl-menu__item');
        li.innerHTML = option.innerHTML;
        li.addEventListener('click', function() {
            selectDiv.classList.add('is-dirty');
            hiddenInput.value = option.value;
            selectInput.value = option.innerHTML;
        });

        ul.appendChild(li);
    });

    return ul;
}

function removeAll(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

