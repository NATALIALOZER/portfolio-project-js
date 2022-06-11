document.addEventListener("DOMContentLoaded", function () {
  var scroller = document.getElementById("view-area");
  var sectionContainer = document.getElementById("section-container");
  var lockerContainer = document.getElementById("locker");
  var lastIndex = 0;
  var indexArray = [
    { x: 0, y: 0, horizontal: false },
    { x: 0, y: 1, horizontal: true },
    { x: 1, y: 1, horizontal: true },
    { x: 2, y: 1, horizontal: false },
    { x: 0, y: 2, horizontal: false },
  ];
  //   var maxRows = 3;
  //   var maxCols = 2;

  var easeInQuad = function (t) {
    return t * t;
  };
  var easeInCubic = function (t) {
    return t * t * t;
  };

  var handleScroll = function (e) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    var index = Math.floor(top / window.innerHeight);
    var percent = (1 / window.innerHeight) * (top - window.innerHeight * index);
    var percentEasing = easeInCubic(percent);

    $("section").removeClass("active");
    $("section").eq(index).addClass("active");
    $("section")
      .eq(index + 1)
      .addClass("active");

    if (index != lastIndex) {
      lastIndex = index;
      sectionContainer.style.transform = "translate(0,0)";
      console.log("activate: ", index);
    }

    if (indexArray[index].horizontal === false) {
      sectionContainer.style.transform =
        "translate(0,-" + 50 * percentEasing + "%)";
    } else {
      sectionContainer.style.transform =
        "translate(-" + 50 * percentEasing + "%, 0)";
    }

    if (window.pageYOffset >= 700) {
      console.log("1", window.pageYOffset);
      lockerContainer.style.position = "fixed";
      lockerContainer.style.visibility = "visible";
    } else {
      console.log("221", window.pageYOffset);
      lockerContainer.style.visibility = "hidden";
    }
  };

  document.addEventListener("scroll", handleScroll);
  document.addEventListener("gesturechange", handleScroll);
});
