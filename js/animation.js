// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

var sloganBlock = document.getElementById("slogan");

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", drawLaptop);

function drawLaptop() {
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (scrollpercent >= 0.1) {
    return;
  }

  var draw = length * scrollpercent * 3;

  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}
