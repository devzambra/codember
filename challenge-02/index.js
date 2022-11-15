const fs = require('fs')

const file = fs.readFileSync(__dirname + '/encrypted.txt')

let words = file.toString().split(' ')

const result = words.map(w => {
 return wordToLetters(w)
})

console.log(result);

function wordToLetters(word) {
  if (word.startsWith("1")) {
    if (word.length > 3) {
      const cur = word.substring(0,3)
      return String.fromCharCode(Number(cur)) + wordToLetters(word.substring(3))
    } else {
      return String.fromCharCode(Number(word))
    }
  } else {
    if (word.length > 2) {
      const cur = word.substring(0,2)
      return String.fromCharCode(Number(cur)) + wordToLetters(word.substring(2))
    } else {
      return String.fromCharCode(Number(word))
    }
  }
}

