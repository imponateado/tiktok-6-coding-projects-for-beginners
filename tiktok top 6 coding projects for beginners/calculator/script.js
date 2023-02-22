const screen = document.getElementById('screen');

function placeOnScreen (bttnobj) {
    if(screen.textContent === '0') {
        screen.textContent = '';
    }
    screen.textContent += bttnobj.value;
}

function evaluate () {
    const expression = screen.textContent;
    try {
        const result = math.evaluate(expression);
        screen.textContent = result;
    } catch (e) {
        screen.textContent = 'Error';
    }
}

function calc () {
    screen.textContent = eval(screen.textContent);
}
function deleteLastChar () {
    if(screen.textContent.length <= 1) {
        screen.textContent = '0';
    } else {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}

function clearScreen () {
    screen.textContent = 0;
}