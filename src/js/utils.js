/**
 * Gets a random integer from a range.
 * @param {number} min An integer.
 * @param {number} max An integer.
 * @returns {number} A random integer between min and max, inclusive.
 */
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Gets a random floating-point number from a range.
 * @param {number} min Any number.
 * @param {number} max Any number.
 * @returns {number} A random float between min and max, inclusive.
 */
function randomFloatFromRange(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns true or false based on a percent chance. 
 * @param {number} percentage A number between 0 and 100.
 * @returns {boolean} Returns true with a % chance based on the provided value.
 */
function chance(percentage) {
  return Math.random() * 100 < percentage;
}

/**
 * Gets a random item from an array.
 * @param {array} array 
 * @returns A random item from the array.
 */
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns the distance between two cartesian points.
 * @param {number} x1 The x value for the first coordinate.
 * @param {number} y1 The y value for the first coordinate.
 * @param {number} x2 The x value for the second coordinate.
 * @param {number} y2 The y value for the second coordinate.
 * @returns {number} The distance between the two cartesian points.
 */
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}


/**
 * Represents a sound.
 */
class Sound {

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
  Sound,
};
