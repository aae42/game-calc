function random_element_from(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export function getRandomCoords() {
  const numbers = Array.from({ length: 18 }, (v, k) => k + 1);
  const letters = [...'ABCDEFGHIJKL'];
  return {
    letter: random_element_from(letters),
    number: random_element_from(numbers),
  };
}

export function spin() {
  const coords = getRandomCoords();
  document.getElementById("spinOutput").innerHTML = coords.letter + " / " + coords.number;
}
