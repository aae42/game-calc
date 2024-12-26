function random_element_from(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function spin() {
  const numbers = Array.from({ length: 19 }, (v, k) => k + 1);
  const letters = [...'ABCDEFGHIJKL'];
  const number = random_element_from(numbers);
  const letter = random_element_from(letters);
  document.getElementById("spin-output").innerHTML = letter + " / " + number;
}

spin();
