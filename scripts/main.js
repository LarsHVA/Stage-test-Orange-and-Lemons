window.addEventListener('resize', reportWindowSize, false);
reportWindowSize();

// Calculate objects size desktop
function reportWindowSize() {
  const countLi = document.querySelectorAll('ul.innerSlider li');
    document.documentElement.style.setProperty("--v-countLi", countLi.length * (100 / 3) + 'vw');
    console.log(countLi.length);

    document.documentElement.style.setProperty("--v-outerWidth", window.outerWidth + 'px');
}

// Img follow cursor
const cursorImg = document.querySelector('img.showImg');
const drag = document.querySelector('img.drag');

window.addEventListener('mousemove', (e) => {
  cursorImg.setAttribute("style", "top: "+(e.pageY )+"px; left: "+(e.pageX)+"px;");
});

document.addEventListener('mousemove', (e) => {;
  drag.setAttribute("style", "top: "+(e.pageY -2100 )+"px; left: "+(e.pageX)+"px;");
});

// Slider
// Never made a slider before, followed a tutorial for this
// https://www.youtube.com/watch?v=KHGc7eZyxKY

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});