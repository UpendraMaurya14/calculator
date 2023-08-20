var display = "";
let result = 0;
function clicked(e) {
  display += e;
  // console.log(display);
  document.getElementById("result").innerHTML = display;
}
function calc(e) {
  // console.log(eval(display));
  result = eval(display);
  display = result;
  console.log(result);
  document.getElementById("result").innerHTML = result;
}
function clean() {
  display = "";
  document.getElementById("result").innerHTML = display;
}
