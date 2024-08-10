//the function base code.
function number(string, numberOfCharacters) {
  //made a variable to show the final results.
  let output = 0;
  //at first removing the spaces (using replaceAll method and replacing each space with nothing.). then extracting the targeted part(using substring method.)
  output = string.replaceAll(" ", "").substr(0, numberOfCharacters);
  //at the end returning the main var.
  return output;
}
//testing.
console.log(number("this is the string", 6));
