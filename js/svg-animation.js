var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();
var sloganBlock = document.getElementById("slogan");

triangle.style.strokeDasharray = length;

triangle.style.strokeDashoffset = length;

window.addEventListener("scroll", drawLaptop);

function drawLaptop() {
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (scrollpercent >= 0.999) {
    return;
  }

  var draw = length * scrollpercent * 3;

  triangle.style.strokeDashoffset = length - draw;
}
