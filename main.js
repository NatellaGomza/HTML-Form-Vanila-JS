function textarea_resize(event, line_height, min_line_count)
{
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

function fRangeChange() {
  let oRangeInput = document.querySelector('input[type=\'range\']');
  let oRangeLabel = document.querySelector('.range_label');
  oRangeLabel.innerText = oRangeInput.value + "%";
  let nLabelWidth = parseFloat(window.getComputedStyle(oRangeLabel).width);
  oRangeLabel.style.left = parseInt(oRangeInput.value*10)+'px';
}