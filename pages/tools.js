// JavaScript File

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function rolld6() {
    return getRandomInt(0, 6);
}

