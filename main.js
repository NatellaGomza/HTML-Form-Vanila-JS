function calc() {
    const calculator = document.querySelector('.calculator');
    const output = document.querySelector('.output');
    const actions = document.querySelector('.calculation');

    const data = {
      displayValue: '0',
      firstValue: null,
      secondValue: false,
      operator: null,
      calculationStr: '', 
      result: '',
      calculationsLog: [],
    };
  
    function appendNumber(number) {
      if (number === '.' && data.displayValue.includes('.')) return;
  
      if (data.secondValue) {
        data.displayValue = number;
        data.secondValue = false;
      } else {
        data.displayValue =
          data.displayValue === '0'
            ? number
            : data.displayValue + number;
      }
      updateDisplay();
    }
  
    function handleOperator(nextOperator) {
      const inputValue = Number(data.displayValue);
  
      if (data.operator && data.secondValue) {
        data.operator = nextOperator;
        return;
      }
  
      if (data.firstValue === null && !isNaN(inputValue)) {
        data.firstValue = inputValue;
      }
  
      if (data.operator) {
        const result = calculate(
          data.firstValue,
          inputValue,
          data.operator
        );
        data.result = result;
        data.displayValue = result;
        data.firstValue = result;
      }
  
      data.secondValue = true;
      data.operator = nextOperator;
      updateDisplay();
    }
  
    function calculate(firstNum, secondNum, operator) {
      switch (operator) {
        case '+':
          return firstNum + secondNum;
          break;
        case '-':
          return firstNum - secondNum;
          break;
        case '*':
          return firstNum * secondNum;
          break;
        case '/':
          return firstNum / secondNum;
          break;
        default:
          break;
      }
      return secondNum;
    }
    
    
  
    function updateDisplay() {
      output.innerText = data.displayValue;
    }
  
    function reset() {
      data.displayValue = '0';
      data.firstValue = null;
      data.secondValue = false;
      data.operator = null;
      actions.innerHTML = '';
      data.calculationStr = '';
      data.result = '';
    }
    
  
    function calculationDisplay(target) {
      data.calculationStr += target.innerText.replace('=', '');
      actions.innerText = data.calculationStr;
    }
  
    function handleEqual() {
      if (data.calculationStr !== '=' && data.result !== '') {
        data.calculationsLog.push(data.calculationStr);
      }
      reset();
    }  
    updateDisplay();
  
    calculator.addEventListener('click', (e) => {
      const { target } = e;
      const { innerText: btnValue } = target;
  
      if (!target.classList.contains('calc__btn')) return;
  
      if (target.classList.contains('number')) {
        appendNumber(btnValue);
        calculationDisplay(target);
      }
  
      if (target.classList.contains('operator')) {
        calculationDisplay(target);
        handleOperator(btnValue);
        
      }
  
      if (target.classList.contains('reset')) {
        reset();
        updateDisplay();
      }
  
      if (target.classList.contains('equal')) {
        handleEqual();
      }
    });
  }
  
 calc();