var cards = document.querySelectorAll(".card__text p");
cards.forEach((element) => {
  var txt = element.innerHTML;
  var res = txt.slice(0, 150);
  var index_space = res.lastIndexOf(" ");
  res = res.slice(0, index_space) + '...';
  element.innerHTML = res;
  console.log(res);
  console.log(res.length);
});
