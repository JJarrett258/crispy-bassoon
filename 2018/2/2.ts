const fffs = require('fs')
export type FrequencyTable = {[letter: string]: number}

const listOfFrequencies = fffs.readFileSync('./2-2018.txt', "utf-8")
    .split("\n")

export const CreateFrequencyTable = (inputString: string): FrequencyTable => {
    let frequencyTable: FrequencyTable = {}
    inputString.split('').forEach(letter => {
        frequencyTable[letter] ? frequencyTable[letter] += 1 : frequencyTable[letter] = 1
    })
    return frequencyTable
}

export const containsLetterOccurringTwice = (frequencyTable: FrequencyTable): boolean => {
    for (const frequency of Object.values(frequencyTable)) {
        if (frequency === 2) {
            return true
        }
    }
    return false
}

export const containsLetterOccurringThrice = (frequencyTable: FrequencyTable): boolean => {
    for (const frequency of Object.values(frequencyTable)) {
        if (frequency === 3) {
            return true
        }
    }
    return false
}

export const countNumberOfEntriesContainingTwoAndThree = (frequencyTables: FrequencyTable[]): { two: number; three: number } => {
    let numberOfTwosAndThrees= {two: 0, three: 0}
    frequencyTables.forEach(frequencyTable => {
        if (containsLetterOccurringTwice(frequencyTable)) {
            numberOfTwosAndThrees["two"] += 1
        }
        if (containsLetterOccurringThrice(frequencyTable)) {
            numberOfTwosAndThrees["three"] += 1
        }
    })
    return numberOfTwosAndThrees
}

export const calculateChecksum = (inputData: string[]): number => {
    let {two, three} = {...countNumberOfEntriesContainingTwoAndThree(inputData.map(entry => CreateFrequencyTable(entry)))}
    return two * three
}
console.log(calculateChecksum(listOfFrequencies))

