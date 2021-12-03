export const ffs = require('fs')
const { performance } = require('perf_hooks');

const listOfFrequencies = ffs.readFileSync('1/data2018.txt', "utf-8")
        .split("\n")
        .map(frequency => Number(frequency))

export const findDuplicateFrequency = (listOfFrequencies: number[]): number => {
    const recordOfEachSumOfFrequenciesAtEachIteration: Set<number> = new Set<number>([0])
    let sumOfFrequency: number = 0
    let duplicateFound = false
    while (!duplicateFound) {
        for (const frequency of listOfFrequencies) {
            sumOfFrequency += frequency
            if (recordOfEachSumOfFrequenciesAtEachIteration.has(sumOfFrequency)) {
                duplicateFound = true
                break
            } else {
                recordOfEachSumOfFrequenciesAtEachIteration.add(sumOfFrequency)
            }
        }
    }
    return sumOfFrequency
}

const startTime = performance.now()
console.log(findDuplicateFrequency(listOfFrequencies))
const endTime = performance.now()
console.log(`Call to findDuplicateFrequency took ${endTime - startTime} milliseconds`)







