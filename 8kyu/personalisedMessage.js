/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
*/

function greet(name, owner) {
  const greet = name === owner ? "Hello boss" : "Hello guest";
  return greet;
}
