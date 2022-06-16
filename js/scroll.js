$(document).ready(function () {
  //var scroller = $("#view-area");
  const sectionContainer = $("#section-container")[0];
  const lockerContainer = $("#locker")[0];
  let lastIndex = 0;
  let indexArray = [
    { x: 0, y: 0, horizontal: false },
    { x: 0, y: 1, horizontal: true },
    { x: 1, y: 1, horizontal: true },
    { x: 2, y: 1, horizontal: false },
    { x: 0, y: 2, horizontal: false },
  ];
  //const maxRows = 3;
  //const maxCols = 2;

  // const easeInQuad = function (t) {
  //   return t * t;
  // };

  const easeInCubic = function (t) {
    return t * t * t;
  };

  const handleScroll = function (e) {
    $(".navbar-collapse").removeClass("show");
    const doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let index = Math.floor(top / window.innerHeight);

    if (e.type === "click") {
      e.preventDefault();
      index = e.target.id;

      switch (index) {
        default:
        case "1":
          top = 687;
          break;
        case "2":
          top = 1400;
          break;
        case "3":
          top = 2175.5;
          break;
      }

      $("html, body").animate(
        {
          scrollTop: top,
        },
        150
      );
    }

    let percent = (1 / window.innerHeight) * (top - window.innerHeight * index);
    const percentEasing = easeInCubic(percent);

    $("section").removeClass("active");
    $("section").eq(index).addClass("active");
    $("section")
      .eq(index + 1)
      .addClass("active");

    if (index != lastIndex) {
      lastIndex = index;
      sectionContainer.style.transform = "translate(0,0)";

      console.log("activate now: ", index);
    }

    if (indexArray[index].horizontal === false) {
      sectionContainer.style.transform =
        "translate(0,-" + 50 * percentEasing + "%)";
    } else {
      sectionContainer.style.transform =
        "translate(-" + 50 * percentEasing + "%, 0)";
    }

    if (window.pageYOffset >= 660) {
      lockerContainer.style.position = "fixed";
      lockerContainer.style.visibility = "visible";
      lockerContainer.style.opacity = "0.2";
      lockerContainer.style.zIndex = "1";
      if (window.pageYOffset >= 650) {
        lockerContainer.style.opacity = "0.5";
      }
      if (window.pageYOffset >= 670) {
        lockerContainer.style.opacity = "1";
      }
      if (window.pageYOffset >= 2222 && window.pageYOffset <= 2760) {
        lockerContainer.style.zIndex = "-10000000";
      }
    } else {
      lockerContainer.style.visibility = "hidden";
    }
  };

  $(".locker > a").click(handleScroll);
  $(document).scroll(handleScroll);
  $(document).on("gesture_move", handleScroll);
});
