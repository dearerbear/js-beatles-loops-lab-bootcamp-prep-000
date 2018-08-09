// add solution here
var musicians = ["Peter", "Paul", "Mary"]
var instruments = ["Uke", "Mando", "Sweet Harmonium"]

function theBeatlesPlay(musicians, instruments){
  storage = [];
  for (let i=0; musicians[i]; i++) {
    storage.push(instruments[i])
  }
  console.log(storage)
}
