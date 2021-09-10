const pads = document.querySelectorAll(".pads div");
const audio = document.querySelectorAll(".audio");
const visual = document.querySelector(".visual");
const colors = ["red", "coral", "yellow", "green", "blue", "navy"];

pads.forEach((element, index) =>
  element.addEventListener("click", function () {
    audio[index].currentTime = 0;
    audio[index].play();
    createBubble(index);
    createBackColor(index);
  })
);

const createBubble = function (index) {
  let bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = "move 1s ease";
  bubble.addEventListener("animationend", function () {
    visual.removeChild(this);
  });
};

const createBackColor = function (index) {
  let back = document.createElement("div");
  visual.appendChild(back);
  back.style.backgroundColor = colors[index];
  back.style.animation = "full 1s ease";
  back.addEventListener("animationend", function () {
    visual.removeChild(this);
  });
};
