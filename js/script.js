
var before = document.querySelector(".container-demo");

var rangeLeft = document.querySelector(".inp-range");

function changeColor(elem){
  // var after = document.getElementsByClassName("container-demo::after");
  var val = elem.value;
  var newWidth = val+'%"';
  document.getElementsByClassName("container-before").style.width = '"'+newWidth;
  document.getElementsByClassName("inp-range").style.left = '"'+newWidth;
  console.log(val);
  console.log(newWidth);
}
rangeLeft.onchange = function(){
  changeColor(this);
  console.log(this);
}


rangeColor.onmousemove = function(){
 changeColor(this);
}
