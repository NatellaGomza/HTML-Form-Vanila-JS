let leftBorderColor;
let isBlockReady = false;
let fieldset = document.querySelector("fieldset");
let button = document.querySelector("#submit");


function textareaResize(event, line_height, min_line_count) {
  let min_line_height = min_line_count * line_height;
  let obj = event.target;
  let div = document.getElementById('text_area_div');
  div.innerHTML = obj.value;
  let obj_height = div.offsetHeight;

  if (event.keyCode == 13) {
    obj_height += line_height;
  } else if (obj_height < min_line_height) {
    obj_height = min_line_height;
    obj.style.height = obj_height + 'px';
  }
}

function showHiddenLabel(event) {
  let target = event.target.previousSibling.previousElementSibling;
  let contents = event.target.placeholder;

  if (event.target.value === contents) {
    event.target.value = "";
  }

  target.style.visibility = 'visible';
  target.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";
  event.target.defaultValue = "";

  pickOutBorder(event);
}

function showHiddenLabelUnder(event) {
  let target = event.target.nextSibling.nextSibling.nextElementSibling;
  let contents = event.target.placeholder;
  leftBorderColor = true;

  if (event.target.value == contents) {
    event.target.value = "";
  }

  target.style.display = 'block';
  event.target.nextSibling.nextElementSibling.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";

  pickOutBorder(event);
}

function showHiddenLabelLastBlock(event) {
  let target = event.target.previousSibling.previousElementSibling;
  let contents = event.target.placeholder;

  if (event.target.value === contents) {
    event.target.value = "";
  }

  target.style.display = 'block';
  target.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";
  event.target.defaultValue = "";

  pickOutBorder(event);
}

function hideLabel(event) {
  let target = event.target.previousSibling.previousElementSibling;

  if (event.target.value === '') {
    target.style.visibility = 'hidden';
    event.target.style.color = 'rgb(5, 237, 237)';
    event.target.value = event.target.placeholder;
  }

  removeSelection(event);
}

function hideLabelUnder(event) {
  let target = event.target.nextSibling.nextSibling.nextElementSibling;

  if (event.target.value === '') {
    target.style.display = 'none';
    event.target.value = event.target.placeholder;
  }

  removeSelection(event);
}

function hideLabelLastBlock(event) {
  let target = event.target.previousSibling.previousElementSibling;

  if (event.target.value === '') {
    target.style.display = 'none';
    event.target.style.color = 'rgb(5, 237, 237)';
    event.target.value = event.target.placeholder;
  }
}

function validateBlock(blocks, event) {
  let block = event.currentTarget;
  let arrFromBlocks = Array.from(blocks);
  isBlockReady = false;
  for (let i = 0; i < arrFromBlocks.length; i++) {
    if ((arrFromBlocks[i].value != arrFromBlocks[i].placeholder) || (arrFromBlocks[i].value != "")) {
      isBlockReady = true;
    } else if ((arrFromBlocks[i].value == arrFromBlocks[i].placeholder) || (arrFromBlocks[i].value == "")) {
      isBlockReady = false;
    }
  }

  if (isBlockReady) {
    pickOutBorder(event, block);
  }
}

function getFirstBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.first_block textarea');
  let textareaArr = Array.from(textarea);
  let counter = 4;
  isBlockReady = false;

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      counter--;
    }
  }

  if (counter === textareaArr.length) {
    isBlockReady = true;
  }

  if (isBlockReady) {
    pickOutBorder(event, block);
  }
}

function getSecondBlock(event) {
  let blocks = document.querySelectorAll('.second_block textarea');
  validateBlock(blocks, event);
}

function getThirdBlock(event) {
  let blocks = document.querySelectorAll('.third_block textarea');
  validateBlock(blocks, event);
}

function getFourthBlock(event) {
  let blocks = document.querySelectorAll('.fifth_block textarea');
  validateBlock(blocks, event);
}

function getFifthBlock(event) {
  let blocks = document.querySelectorAll('.fifth_block textarea');
  validateBlock(blocks, event);
}

function showErrorMessage(event) {
  let error = document.createElement("span");
  error.className = "error";
  error.innerHTML = "Это поле обязательно для заполнения";
  event.target.after(error);
}

function makeRedBorder(arr, block) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i].value == arr[i].placeholder) || (arr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }
}

function pointErrors(blocks, event) {
  let block = event.currentTarget;
  let arrFromBlocks = Array.from(blocks);
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == event.target.placeholder) {
    showErrorMessage(event);
  }

  makeRedBorder(arrFromBlocks, block);

}

function checkFirstBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.first_block textarea');
  let textareaArr = Array.from(textarea);
  let counter = 4;
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == "Имя" || event.target.value == "Ник в Telegram" ||
    event.target.value == "Ссылка на репозитарий этого задания" ||
    event.target.value == "Что вы точно не хотите делать в работе, что вы делаете с неохотой?") {
    showErrorMessage(event);
  }

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      counter--;
    }
  }

  if (counter != textareaArr.length) {
    block.style.borderColor = "red";
  }

}

function checkSecondBlock(event) {
  let blocks = document.querySelectorAll('.second_block textarea');
  pointErrors(blocks, event); 
}

function checkThirdBlock(event) {
  let blocks = document.querySelectorAll('.third_block textarea');
  pointErrors(blocks, event); 
}

function checkFourthBlock(event) {
  let blocks = document.querySelectorAll('.fourth_block textarea');
  pointErrors(blocks, event); 
}

function checkFifthBlock(event) {
  let blocks = document.querySelectorAll('.fifth_block textarea');
  pointErrors(blocks, event); 
}

function changeColor(event, block, textarea) {
  let textareaArr = Array.from(textarea);
  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value != textareaArr[i].placeholder) || (textareaArr[i].value != "")) {
      isBlockReady = true;
    }
  }

  if (isBlockReady) {
    pickOutBorder(event, block);
  }
}

function pickOutBorder(event, block) {
  let leftBorder = event.target.parentNode.parentNode;
  leftBorderColor = true;

  if (!!leftBorderColor) {
    leftBorder.style.borderColor = "grey";
  }

  if (isBlockReady && block) {
    block.style.borderColor = "rgb(5, 237, 237)";
  } else if (!isBlockReady && block) {
    block.style.borderColor = "lightgrey";
  }
}

function removeSelection(event) {
  let leftBorder = event.target.parentNode.parentNode;
  leftBorderColor = false;

  if (!leftBorderColor && !isBlockReady) {
    leftBorder.style.borderColor = "lightgrey";
  }
}

function movingRange(rangeInput, rangeLabel, minValue, maxValue) {
  rangeLabel.innerText = rangeInput.value + "%";
  let rangeLength = (window.getComputedStyle(rangeInput).width);
  let rangeLabelSize = (window.getComputedStyle(rangeLabel).width);

  if (+rangeInput.value < 50) {
    rangeLabel.style.left = (parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 10) + 'px';
  } else {
    rangeLabel.style.left = parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 'px';
  }

  +rangeInput.value >= 96 ? maxValue.style.display = "none" : maxValue.style.display = "block";
  +rangeInput.value !== 0 ? minValue.style.visibility = "visible" : minValue.style.visibility = "hidden"
}

function changingFirstRange() {
  const rangeInput = document.querySelector('.first_range');
  const rangeLabel = document.querySelector('.range_label_first');
  const valueMinFirstRange = document.querySelector('#valueMinFirstRange');
  const valueMaxFirstRange = document.querySelector('#valueMaxFirstRange');

  movingRange(rangeInput, rangeLabel, valueMinFirstRange, valueMaxFirstRange);  
}

function changingSecondRange() {
  const rangeInput = document.querySelector('.second_range');
  const rangeLabel = document.querySelector('.range_label_second');
  const valueMinSecondRange = document.querySelector('#valueMinSecondRange');
  const valueMaxSecondRange = document.querySelector('#valueMaxSecondRange');

  movingRange(rangeInput, rangeLabel, valueMinSecondRange, valueMaxSecondRange);
}

function fixHeight() {
  const textareaWithHiddenBlock = document.querySelector('.fourth_block textarea');
  textareaWithHiddenBlock.style.height = '100%';
}

function showSpan() {
  const textareaWithHiddenBlock = document.querySelector('.fourth_block textarea');
  textareaWithHiddenBlock.style.color = 'black';
  const hiddenSpan = document.querySelector('.hidden_span');
  hiddenSpan.style.display = "block";
}

function hideSpan() {
  const hiddenSpan = document.querySelector('.hidden_span');
  hiddenSpan.style.display = "none";
}

button.addEventListener("click", function (event) {
  let leftBorder = document.getElementsByClassName("left_border");
  let mainCounter = 0;
  event.preventDefault();

  let arr = Array.from(leftBorder);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].style.borderColor === "rgb(5, 237, 237)") {
      mainCounter++;
    }
  }

  if (mainCounter === arr.length) {
    button.value = "ОТПРАВЛЕНО";
    button.style.backgroundColor = "green";
    arr.forEach(el => el.style.borderColor = "green");
    fieldset.setAttribute('disabled', "");
    let textInfo = document.querySelectorAll("textarea");
    let textInfoArr = Array.from(textInfo);
    textInfo.forEach(el => {
      el.style.backgroundColor = "white"
    })
  }
});