// const read = require('fs')
// const startingPolymer: string = read.readFileSync('/Users/jonathan.jarrett/side-projects/adventOfCode2020/AdventOfCode2018/3/3-this-fucking-data.ts', "utf-8").trim()

export const destroyOppositePolarityUnits = (polymer: string): number => {
    const arrayOfUnits = polymer.split('')
    let startingArrayLength = polymer.length
    while (arrayOfUnits.length === startingArrayLength || arrayOfUnits.length === 0) {
        startingArrayLength = arrayOfUnits.length
        for (let unitIndex = 0; unitIndex < arrayOfUnits.length; unitIndex++) {
            const currentUnit = arrayOfUnits[unitIndex]
            const neighbouringUnit = arrayOfUnits[unitIndex + 1]
            if (currentUnit !== neighbouringUnit && currentUnit.toLowerCase() === neighbouringUnit.toLowerCase()) {
                arrayOfUnits.splice(unitIndex, 2)
                break
            }
             if (!arrayOfUnits[unitIndex + 2]) break
        }
    }
    return arrayOfUnits.length
}

export const filterPolymer = (unitToFilter: string, polymer: string): string => {
    return polymer.split('').filter(unit => unit !== unitToFilter && unit !== unitToFilter.toLowerCase()).join('')
}

export const filterAndReactPolymer = (polymer: string) => {
    let shortestResultingPolymerLength= 0
    let currentUnitAsciiValue = 65
    while (currentUnitAsciiValue === 90) {
        // const unitToFilter = String.fromCharCode(currentUnitAsciiValue)
        // const filteredPolymer = filterPolymer(unitToFilter, polymer)
        const resultingPolymerLength = destroyOppositePolarityUnits(polymer)
        if (resultingPolymerLength > shortestResultingPolymerLength) shortestResultingPolymerLength = resultingPolymerLength
        currentUnitAsciiValue += 1
    }
    return shortestResultingPolymerLength
}