function textareaResize(event, line_height, min_line_count) {
  let min_line_height = min_line_count * line_height;
  let obj = event.target;
  let div = document.getElementById('text_area_div');
  div.innerHTML = obj.value;
  let obj_height = div.offsetHeight;

  if (event.keyCode == 13)
    obj_height += line_height;
  else if (obj_height < min_line_height)
    obj_height = min_line_height;
  obj.style.height = obj_height + 'px';
}

function showHiddenLabel(event) {
  let contents = event.target.previousSibling.previousElementSibling.innerHTML;
  if (event.target.value === contents) {
    event.target.value = "";
  }
  event.target.previousSibling.previousElementSibling.style.display = 'block';
  event.target.previousSibling.previousElementSibling.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";
  event.target.defaultValue = "";
}

function hideLabel(event) {
  if (event.target.value === '') {
    event.target.previousSibling.previousElementSibling.style.display = 'none';
    event.target.style.color = 'rgb(5, 237, 237)';
    event.target.value = event.target.previousSibling.previousElementSibling.innerHTML;
  }
}

function showHiddenLabelUnder(event) {
  let contents = event.target.nextSibling.nextSibling.nextElementSibling.innerHTML;
  console.log(event.target.value);
  console.log(typeof contents);
  if (event.target.value == contents) {
    console.log(event.target.value);
    event.target.value = "";
  }
  event.target.nextSibling.nextSibling.nextElementSibling.style.display = 'block';
  event.target.nextSibling.nextElementSibling.style.color = 'rgb(5, 237, 237)';
  event.target.style.color = "black";
}

function hideLabelUnder(event) {
  if (event.target.value === '') {
    event.target.nextSibling.nextSibling.nextElementSibling.style.display = 'none';
    event.target.value = event.target.nextSibling.nextSibling.nextElementSibling.innerHTML;
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