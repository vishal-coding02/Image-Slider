const prevIcon = document.querySelector(".icons #icon-left");
const nextIcon = document.querySelector(".icons #icon-right");

let imagesSrc = [
  "./image/in_space.jpg",
  "./image/outer-digital-space-tq-1360x768.jpg",
  "./image/QL0WBtU.jpg",
  "./image/R.jpeg",
  "./image/wp2217779.jpg"
];

let index = 0;

prevIcon.addEventListener("click", () => {
  if (index <= 0) {
    index = imagesSrc.length;
  }
  index--;
  document.getElementById("slider").src = imagesSrc[index];
//   console.log(imagesSrc[index]);
});

nextIcon.addEventListener("click", () => {
  index++;
  if (index >= imagesSrc.length) {
    index = 0;
  }
  document.getElementById("slider").src = imagesSrc[index];
//   console.log(imagesSrc[index]);
});
