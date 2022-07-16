let leftBorderColor;
let isBlockReady = false;
let form = document.querySelector("form");
let leftBorder = document.getElementsByClassName("left_border");
console.log(leftBorder);
let button = document.querySelector("#submit");
let mainCounter = 0;

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
  let contents = target.innerHTML;

  if (event.target.value === contents) {
    event.target.value = "";
  }

  target.style.visibility = 'visible';

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
    event.target.value = target.innerHTML;
  }

  removeSelection(event);
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

    let error = document.createElement("span");
    error.className = "error";
    error.innerHTML = "Это поле обязательно для заполнения";
    event.target.after(error);
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

function getSecondBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.second_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value != textareaArr[i].placeholder) || (textareaArr[i].value != "")) {
      isBlockReady = true;
    } else if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
    }
  }

  if (isBlockReady) {
    mainCounter++;
    pickOutBorder(event, block);
  }
}

function checkSecondBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.second_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == "Ваш комментарий(по желанию)") {
    let error = document.createElement("span");
    error.className = "error";
    error.innerHTML = "Это поле обязательно для заполнения";
    event.target.after(error);
  }

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }
}

function getThirdBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.third_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value != textareaArr[i].placeholder) || (textareaArr[i].value != "")) {
      isBlockReady = true;
    } else if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      console.log('dfdfg')
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }

  if (isBlockReady) {
    mainCounter++;
    pickOutBorder(event, block);
  }
}

function checkThirdBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.third_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == "Ваш комментарий(по желанию)") {
    let error = document.createElement("span");
    error.className = "error";
    error.innerHTML = "Это поле обязательно для заполнения";
    event.target.after(error);
  }

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }
}

function getFourthBlock(event) {
  let block = document.querySelector('.fourth_block');
  let textarea = document.querySelectorAll('.fifth_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value != textareaArr[i].placeholder) || (textareaArr[i].value != "")) {
      isBlockReady = true;
    } else if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }

  if (isBlockReady) {
    mainCounter++;
    pickOutBorder(event, block);
  }
}

function checkFourthBlock(event) {
  let block = event.currentTarget;
  let textarea = document.querySelectorAll('.fourth_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == "Бывают задачи интересные, а бывает, к примеру, нужно добавить на сайт пару новых языков в режиме  copy/paste в файл локализации или помочь опубликовать пост в блоге -  md файл из Гугл документа") {
    let error = document.createElement("span");
    error.className = "error";
    error.innerHTML = "Это поле обязательно для заполнения";
    event.target.after(error);
  }

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }
}

function getFifthBlock(event) {
  let block = document.querySelector('.fifth_block');
  let textarea = document.querySelectorAll('.fifth_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value != textareaArr[i].placeholder) || (textareaArr[i].value != "")) {
      isBlockReady = true;
    } else if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }

  if (isBlockReady) {
    mainCounter++;
    pickOutBorder(event, block);
  }
}

function checkFifthBlock(event) {
  let block = event.currentTarget;;
  let textarea = document.querySelectorAll('.fifth_block textarea');
  let textareaArr = Array.from(textarea);
  isBlockReady = false;
  event.target.parentNode.removeChild(event.target.nextSibling);

  if (event.target.value == "Готовы ли посвятить все 100% своего времени на работу с нашими задачами, не отвлекаясь на стороннюю разработку?") {
    let error = document.createElement("span");
    error.className = "error";
    error.innerHTML = "Это поле обязательно для заполнения";
    event.target.after(error);
  }

  for (let i = 0; i < textareaArr.length; i++) {
    if ((textareaArr[i].value == textareaArr[i].placeholder) || (textareaArr[i].value == "")) {
      isBlockReady = false;
      block.style.borderColor = "red";
    }
  }
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

function showHiddenLabelUnder(event) {
  let target = event.target.nextSibling.nextSibling.nextElementSibling;
  let contents = target.innerHTML;
  leftBorderColor = true;

  if (event.target.value == contents) {
    event.target.value = "";
  }

  target.style.display = 'block';
  event.target.nextSibling.nextElementSibling.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";

  pickOutBorder(event);
}

function hideLabelUnder(event) {
  let target = event.target.nextSibling.nextSibling.nextElementSibling;

  if (event.target.value === '') {
    target.style.display = 'none';
    event.target.value = target.innerHTML;
  }

  removeSelection(event);
}

function showHiddenLabelLastBlock(event) {
  let target = event.target.previousSibling.previousElementSibling;
  let contents = target.innerHTML;

  if (event.target.value === contents) {
    event.target.value = "";
  }

  target.style.display = 'block';
  target.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";
  event.target.defaultValue = "";

  pickOutBorder(event);
}

function hideLabelLastBlock(event) {
  let target = event.target.previousSibling.previousElementSibling;

  if (event.target.value === '') {
    target.style.display = 'none';
    event.target.style.color = 'rgb(5, 237, 237)';
    event.target.value = target.innerHTML;
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

  console.log(isBlockReady);
}

function removeSelection(event) {
  let leftBorder = event.target.parentNode.parentNode;
  leftBorderColor = false;

  if (!leftBorderColor && !isBlockReady) {
    leftBorder.style.borderColor = "lightgrey";
  }
}

function changingFirstRange() {
  let rangeInput = document.querySelector('input[type=\'range\']');
  let rangeLabel = document.querySelector('.range_label');
  const valueMin1 = document.querySelector('#valueMin1');
  const valueMax1 = document.querySelector('#valueMax1');

  rangeLabel.innerText = rangeInput.value + "%";
  let rangeLength = (window.getComputedStyle(rangeInput).width);
  let rangeLabelSize = (window.getComputedStyle(rangeLabel).width);

  if (+rangeInput.value < 50) {
    rangeLabel.style.left = (parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 10) + 'px';
  } else {
    rangeLabel.style.left = parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 'px';
  }

  +rangeInput.value >= 96 ? valueMax1.style.display = "none" : valueMax1.style.display = "block";
  +rangeInput.value !== 0 ? valueMin1.style.visibility = "visible" : valueMin1.style.visibility = "hidden"
}

function changingSecondRange() {
  let rangeInput = document.querySelector('.second_range');
  let rangeLabel = document.querySelector('.range_label_second');
  const valueMin2 = document.querySelector('#valueMin2');
  const valueMax2 = document.querySelector('#valueMax2');

  rangeLabel.innerText = rangeInput.value + "%";
  let rangeLength = (window.getComputedStyle(rangeInput).width);
  let rangeLabelSize = (window.getComputedStyle(rangeLabel).width);

  if (+rangeInput.value < 50) {
    rangeLabel.style.left = (parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 10) + 'px';
  } else {
    rangeLabel.style.left = parseFloat(rangeLength) / 100 * rangeInput.value - parseFloat(rangeLabelSize) / 2 + 'px';
  }

  +rangeInput.value >= 96 ? valueMax2.style.display = "none" : valueMax2.style.display = "block";
  +rangeInput.value !== 0 ? valueMin2.style.visibility = "visible" : valueMin2.style.visibility = "hidden"
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
  event.preventDefault();
  let textInfo = document.querySelectorAll("textarea");
  let textInfoArr = Array.from(textInfo);
  let arr = Array.from(leftBorder);
  arr.forEach( el => {
    console.log(el);
    if (el.borderColor === "rgb(5, 237, 237)") {
      mainCounter++;
    }
  })

    console.log( mainCounter++);

    if (mainCounter == textInfoArr.length) {
      button.value = "ОТПРАВЛЕНО";
      button.style.backgroundColor = "green";
      arr.forEach(el => el.style.borderColor = "green");
    }
});