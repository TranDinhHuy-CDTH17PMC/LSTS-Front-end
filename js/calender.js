var now = new Date();
document.getElementById("month__value").innerHTML = now.getMonth() + 1;

var month = Number.parseInt(document.getElementById("month__value").innerHTML);

function changeMonth(change) {
  if (change == "plus") {
    month++;
    if (month > 12) month = 1;
  } else {
    month--;
    if (month < 1) month = 12;
  }

  document.getElementById("month__value").innerHTML = month;
}
