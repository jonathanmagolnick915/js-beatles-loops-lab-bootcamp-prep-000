var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", ]

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

theBeatlesPlay(musicians, instruments)

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
    var i = 0;
    while (i < facts.length) {
      facts[i] += "!!!"
      i++
    }
    return facts
}

function iLoveTheBeatles(i){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    i++
  }
  while(i < 15);
  return newArray
}
