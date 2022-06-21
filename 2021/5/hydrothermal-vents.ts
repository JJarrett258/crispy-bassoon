let things = [[]]
for(let i: number = 0; i < 100; i++) {
    things[i] = [i];
    for(let j: number = 0; j< 100; j++) {
        things[i][j] = [0][0]
    }
}
// console.table(things)
import * as fs from "fs";
const myConsole = new console.Console(fs.createWriteStream('./output.txt'))
myConsole.log('hello world')
