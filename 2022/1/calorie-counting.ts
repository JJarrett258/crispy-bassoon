import {parseTextToNumberArr} from "../../utilities/textParser";

const calorieTable = parseTextToNumberArr('/Users/Jonathan.Jarrett/side-projects/crispy-bassoon/2022/1/calorie-counting-data.txt')


// Part One
export const findFattestElf = (calorieTable: number[]): number => {
    let fattestElf: number = 0;
    let calorieCount: number = 0;
    for (let i = 0; i < calorieTable.length; i++) {
        if (calorieTable[i] === 0) {
            fattestElf = fattestElf > calorieCount ? fattestElf : calorieCount
            calorieCount = 0
        }
        calorieCount += calorieTable[i]
    }
    return fattestElf;
}

// Part Two
// export const findTheTopThreeGreediestElves = (calorieTable:number[]): number => {
//     // Counters for top three elves
//     let fattestElf1 = 0
//     let fattestElf2 = 0
//     let fattestElf3 = 0;
//     let calorieCount = 0;
//     // loop through input
//     for (let i = 0; i < calorieTable.length; i++) {
//         // when a 0 is hit -> marks boundary of when new elf starts
//         if (calorieTable[i] === 0) {
//             if (calorieCount > fattestElf3) {
//                 if (calorieCount > fattestElf2) {
//                     if (calorieCount > fattestElf1) {
//                         fattestElf3 = fattestElf2
//                         fattestElf2 = fattestElf1
//                         fattestElf1 = calorieCount
//                         calorieCount = 0
//                         continue
//                     }
//                     fattestElf3 = fattestElf2
//                     fattestElf2 = calorieCount
//                     calorieCount = 0
//                     continue
//                 }
//                 fattestElf3 = calorieCount
//                 calorieCount = 0
//                 continue
//             }
//         }
//         calorieCount += calorieTable[i]
//     }
//     return fattestElf1 + fattestElf2 + fattestElf3
// }

export const findTheTopThreeGreediestElves = (calorieTable: number[]) => {
    let sortedTable: number[] = []
    let givenElfTotal: number = 0
    for (const calorie of calorieTable) {
        if (calorie === 0) {
            sortedTable.push(givenElfTotal)
            givenElfTotal = 0
        } else {
            givenElfTotal += calorie
        }
    }
    sortedTable.sort((a, b) => b - a)
    return sortedTable[0] + sortedTable[1] + sortedTable[2]
}

console.log(findTheTopThreeGreediestElves(calorieTable))