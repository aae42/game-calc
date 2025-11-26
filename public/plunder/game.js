function randomElementFrom(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function getRandomCoords() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const letters = 'ABCDEFGHIJKL'.split('');
  return {
    letter: randomElementFrom(letters),
    number: randomElementFrom(numbers),
  };
}

export function spin() {
  const coords = getRandomCoords();
  document.getElementById("spinOutput").innerHTML = coords.letter + " • " + coords.number;
}
