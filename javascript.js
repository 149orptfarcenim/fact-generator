var facts = [
  /* facts go here */
]

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randomNumber]:
}
