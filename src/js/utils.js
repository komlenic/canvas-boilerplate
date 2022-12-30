function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatFromRange(min, max) {
  return Math.random() * (max - min) + min;
}

function chance(percentage) {
  return Math.random() * 100 < percentage;
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

class sound {

  #audio;

  constructor(src) {
    this.#audio = document.createElement('audio');
    this.#audio.src = src;
    this.#audio.setAttribute('preload', 'auto');
    this.#audio.setAttribute('controls', 'none');
    this.#audio.style.display = 'none';
    document.body.appendChild(this.#audio);
  }

  play() {
    this.#audio.play();
  }

  pause() {
    this.#audio.pause();
  }
}

module.exports = { 
  randomIntFromRange,
  randomFloatFromRange,
  chance,
  randomItem,
  distance,
  sound,
};
