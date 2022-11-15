const fs = require('fs')

const file = fs.readFileSync('./users.txt')

let users = file.toString().split('\n\n').map(u => u.replace(/\n/g, ' '))

const required = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
let lastValid = ''

users = users.filter(user => {
  const values = user.split(' ')
  if(values.length < required.length) return false
  const everyKeyVal = values.every(v => {
    const keyVal = v.split(':')
    return keyVal.length === 2
  })
  const everyRequired = required.every(r => values.map(v => v.split(':')[0]).includes(r))

  if ( everyKeyVal && everyRequired) {
    lastValid = user
    return true
  }
  return false
})

console.log({total: users.length, last: lastValid})