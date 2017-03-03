// MIT License

(function() {
    window.addEventListener('load', function() {
        initSelect();
        initMdlSelectFunction();
    });

    function initSelect() {
        document.querySelectorAll('.mdl-select').forEach(initSelectDiv);
    }

    function initMdlSelectFunction() {
        HTMLSelectElement.prototype.mdlSelect = function() {
            if (this.parentElement.classList.contains('mdl-select')) {
                updateOptions(this.parentElement);
            }
        };
    }

    function initSelectDiv(selectDiv) {
        var select = selectDiv.querySelector('select');
        var optionList = select.querySelectorAll('option');
        var label = selectDiv.querySelector('label');

        setClass(selectDiv);

        select.hidden = true;
        if (label != null) {
            label.hidden = true;
        }

        var selectInput = createSelectInput(select);
        var selectLabel = createSelectLabel(select, label);
        var ulForSelect = createUlForSelect(selectDiv, select, optionList, selectInput);

        selectDiv.appendChild(selectInput);
        selectDiv.appendChild(selectLabel);
        selectDiv.appendChild(ulForSelect);

        if (label == null) {
            selectDiv.classList.add('is-dirty');
            selectInput.value = select.options[select.selectedIndex].innerHTML;
        }
    }

    function createSelectInput(select) {
        var input = document.createElement('input');
        input.id = select.id + '-mdl-select-input';
        input.type = 'text';
        input.readOnly = true;
        input.classList.add('mdl-textfield__input');

        return input;
    }

    function createSelectLabel(select, label) {
        var selectLabel = document.createElement('label');
        selectLabel.id = select.id + '-mdl-select-label';
        selectLabel.setAttribute('for', select.id + '-mdl-select-input');
        selectLabel.classList.add('mdl-textfield__label');

        if (label != null) {
            selectLabel.innerHTML = label.innerHTML;
        }

        return selectLabel;
    }

    function createUlForSelect(selectDiv, select, optionList, selectInput) {
        var ul = document.createElement('ul');
        ul.id = select.id + '-mdl-select-ul';
        ul.setAttribute('for', select.id + '-mdl-select-input');
        ul.classList.add('mdl-menu', 'mdl-js-menu', 'mdl-menu--bottom-left');
        ul.style.width = selectDiv.clientWidth + 'px';

        optionList.forEach(function(option) {
            var li = document.createElement('li');
            li.classList.add('mdl-menu__item');
            li.innerHTML = option.innerHTML;
            li.addEventListener('click', function() {
                selectDiv.classList.add('is-dirty');
                select.value = option.value;
                selectInput.value = option.innerHTML;
            });

            if (option.disabled) {
                li.style.display = 'none';
            }

            ul.appendChild(li);
        });

        return ul;
    }

    function setClass(selectDiv) {
        selectDiv.className += ' mdl-textfield mdl-js-textfield';

        if (selectDiv.classList.contains('mdl-select--floating-label')) {
            selectDiv.className += ' mdl-textfield--floating-label';
        }

        if (selectDiv.classList.contains('mdl-select--full-width')) {
            selectDiv.className += ' mdl-textfield--full-width';
        }
    }

    function updateOptions(selectDiv) {
        var select = selectDiv.querySelector('select');
        var optionList = select.querySelectorAll('option');
        var liList = selectDiv.querySelector('#' + select.id + '-mdl-select-ul').querySelectorAll('li');

        for (var i = 0; i < optionList.length && liList.length; i++) {
            if (optionList[i].disabled) {
                liList[i].style.display = 'none';
            } else {
                liList[i].style.display = '';
            }
        }
    }
})();
