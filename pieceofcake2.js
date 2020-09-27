const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var x = nums[0]
    var y = nums[1]
    var z = nums[2]
    
    var a = x - y
    var b = x - z
    
    var temp = [y,z,a,b].sort((a, b) => a - b).reverse()

    console.log(temp[0] * temp[1] * 4)

});