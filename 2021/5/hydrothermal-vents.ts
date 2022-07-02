let things = [[]]
for(let i: number = 0; i < 10; i++) {
    things[i] = [i];
    for(let j: number = 0; j < 10; j++) {
        things[i][j] = [0][0]
    }
}
console.table(things)

