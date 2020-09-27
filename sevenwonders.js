const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pow2 = (number) => Math.pow(number, 2)

rl.on('line', (line) => {
  var a = line.split("") //Got Array

  const temp = {}
  a.forEach(x => {
    if (temp[x]) {
      temp[x] += 1
    } else {
      temp[x] = 1
    }
  })
  const keysObj = Object.keys(temp)
  let result = 0
  keysObj.forEach(x => {
    result += pow2(temp[x])
  })
  if (keysObj.length === 3) {
    const valObj = Object.values(temp).sort((a, b) => a - b)
    console.log(result + (valObj[0]*7))
  } else {
    console.log(result)
  }
});