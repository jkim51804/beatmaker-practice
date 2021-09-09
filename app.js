const pads = document.querySelectorAll(".pads div");
const audio = document.querySelectorAll(".audio");

pads.forEach((element, index) =>
  element.addEventListener("click", function () {
    audio[index].currentTime = 0;
    audio[index].play();
  })
);
