function number(string, numberOfCharacters) {
  let output = 0;
  output = string.replaceAll(" ", "").substr(0, numberOfCharacters);
  return output;
}
console.log(number("this is the string", 6));