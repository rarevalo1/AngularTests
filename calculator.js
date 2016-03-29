window.onload = function() {
    var buttons = document.getElementsByTagName('button'),
        result = document.querySelectorAll('.lcd p')[0],
        clear = document.getElementsByClassName('btn clear')[0];

    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i));
        } else {
            buttons[i].addEventListener("click", addValue(i));
        }
    }

    clear.onclick = function() {
        result.innerHTML = '';
    };

    function addValue(i) {
        return function() {
            if (buttons[i].innerHTML === '÷') {
                result.innerHTML += '/';
            } else if (buttons[i].innerHTML === 'x') {
                result.innerHTML += '*';
            } else if (buttons[i].innerHTML === '–') {
                result.innerHTML += '-'
            } else {
                result.innerHTML += buttons[i].innerHTML;
            }
        };
    }



    function calculate(i) {
        return function() {
            result.innerHTML = eval(result.innerHTML);
        };
    }
};
