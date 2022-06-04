var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('operation is unknow');
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) { 
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

let operationButtons = document.querySelectorAll('.operation-block>button')

for (let index = 0; index < operationButtons.length; index++) {
    var button = operationButtons[index];
    button.addEventListener('click', onOperationButtonClick);    
}
