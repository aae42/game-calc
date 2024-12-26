function random_element_from(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function spin() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  const number = random_element_from(numbers);
  const letter = random_element_from(letters);
  document.getElementById("spin-output").innerHTML = letter + " / " + number;
}

spin();
