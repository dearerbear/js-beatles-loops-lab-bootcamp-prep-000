// // add solution here
// var musicians = ["Peter", "Paul", "Mary"]
// var instruments = ["Uke", "Mando", "Sweet Harmonium"]

function theBeatlesPlay(musicians, instruments){
  var storage = new Array();
  for (let i=0; musicians[i]; i++) {
    storage.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(storage)
  return storage;
}


var statements = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]


function johnLennonFacts(facts) {
  var applause = new Array();
  let i = 0;
  var l = facts.length;
  // console.log(l)
  while (i<l) {
    console.log(fact[i] + "!")
    i++;
  }
  // return applause;
}

johnLennonFacts(statements)
