// add solution here
var musicians = ["Peter", "Paul", "Mary"]
var instruments = ["Uke", "Mando", "Sweet Harmonium"]

function theBeatlesPlay(musicians, instruments){
  var storage = new Array();
  for (let i=0; musicians[i]; i++) {
    storage.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(storage)
}
