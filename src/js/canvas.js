import utils from './utils';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

function init() {
  let red = utils.randomIntFromRange(0, 255);
  let green = utils.randomIntFromRange(0, 255);
  let blue = utils.randomIntFromRange(0, 255);
  c.fillStyle = `rgb(${red},${green},${blue}`;
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.arc(mouse.x, mouse.y, 100, 0, 2 * Math.PI, false);
  c.fill();

}

init();
animate();
