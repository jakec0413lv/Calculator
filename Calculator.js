let displayNumber = '';
let tempNumber = '';
let resultNumber = 0;

let selection = '';

//Number Button Functions

const press1 = () => {
    displayNumber = displayNumber + '1';
    document.getElementById('display-area').textContent = displayNumber;
}

const press2 = () => {
    displayNumber = displayNumber + '2';
    document.getElementById('display-area').textContent = displayNumber;
}

const press3 = () => {
    displayNumber = displayNumber + '3';
    document.getElementById('display-area').textContent = displayNumber;
}

const press4 = () => {
    displayNumber = displayNumber + '4';
    document.getElementById('display-area').textContent = displayNumber;
}

const press5 = () => {
    displayNumber = displayNumber + '5';
    document.getElementById('display-area').textContent = displayNumber;
}

const press6 = () => {
    displayNumber = displayNumber + '6';
    document.getElementById('display-area').textContent = displayNumber;
}

const press7 = () => {
    displayNumber = displayNumber + '7';
    document.getElementById('display-area').textContent = displayNumber;
}

const press8 = () => {
    displayNumber = displayNumber + '8';
    document.getElementById('display-area').textContent = displayNumber;
}

const press9 = () => {
    displayNumber = displayNumber + '9';
    document.getElementById('display-area').textContent = displayNumber;
}

const press0 = () => {
    displayNumber = displayNumber + '0';
    document.getElementById('display-area').textContent = displayNumber;
}

const addDecimal = () => {
    displayNumber = displayNumber + '.';
    document.getElementById('display-area').textContent = displayNumber;
}
//Operator Functions

const plusFunction = () => {
    if(selection === ''){
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'plus';
    }else{
        equalsFunction();
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'plus';
    }
}

const minusFunction = () => {
    if(selection === ''){
    tempNumber = displayNumber;
    displayNumber = '';
    selection = 'minus';
    }else{
        equalsFunction();
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'minus';
    }
}
const multiplyFunction = () => {
    if(selection === ''){
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'multiply';
    }else{
        equalsFunction();
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'multiply';
    }
}

const divideFunction = () => {
    if(selection === ''){
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'divide';
    }else{
        equalsFunction();
        tempNumber = displayNumber;
        displayNumber = '';
        selection = 'divide';
    }
}

//Equal Function
const equalsFunction = () => {
    if(selection === 'plus'){
        resultNumber = Number(displayNumber) + Number(tempNumber);
        document.getElementById('display-area').textContent = resultNumber;
        displayNumber = resultNumber; 
        selection = '';
    }
    if(selection === 'minus'){
        resultNumber = Number(tempNumber) - Number(displayNumber);
        document.getElementById('display-area').textContent = resultNumber; 
        displayNumber = resultNumber; 
        selection = '';
    }
    if(selection === 'multiply'){
        resultNumber = Number(displayNumber) * Number(tempNumber);
        document.getElementById('display-area').textContent = resultNumber;
        displayNumber = resultNumber; 
        selection = ''; 
    }
    if(selection === 'divide'){
        resultNumber = Number(tempNumber) / Number(displayNumber);
        document.getElementById('display-area').textContent = resultNumber; 
        displayNumber = resultNumber; 
        selection = '';
    }
}

const reset = () => {
    displayNumber = '';
    document.getElementById('display-area').textContent = displayNumber; 
    tempNumber = '';
    selection = '';
}

