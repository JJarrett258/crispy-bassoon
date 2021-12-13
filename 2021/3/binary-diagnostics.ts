import {parseTextToStringArr} from "../../textParser";

function getSumOfOnesInBinaryColumns(diagnosticsData: string[]): number[] {
    let totalOnesInEachColumns: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    diagnosticsData.forEach(entry => {
        for (let i = 0; i < entry.length; i++) {
            if (entry.charAt(i) === '0') {
                totalOnesInEachColumns[i] += 1
            }
        }
    })
    return totalOnesInEachColumns
}

export const getGammaRate = (diagnosticsData: string[], isEpsilonRate: boolean = false): number[] => {
    let totalZerosInEachColumns = getSumOfOnesInBinaryColumns(diagnosticsData)
    let result: number [] = []
    totalZerosInEachColumns.forEach(entry => {
        if (entry > diagnosticsData.length / 2) {
            result.push(0)
        } else {
            result.push(1)
        }
    })
    return isEpsilonRate === false ? result : invert(result)
}

export function invert(binaryDigits: number[]) {
    return binaryDigits.map(bit => bit === 0 ? 1 : 0)
}

export const parseArray = arr => {
    return arr.reduce((acc, val) => {
        return (acc << 1) | val;
    });
}

export const getResult = (diagnosticData: string[]): number => {
    const gammaRate = getGammaRate(diagnosticData)
    const epsilonRate = invert(gammaRate)
    return parseArray(gammaRate) * parseArray(epsilonRate)
}


// todo: currently recalculates the entire most frequent bit after each shuffle.
// todo: instead, only calculate the most frequent bit per column (i.e. each column in isolation of its neighbours)

export const getOxygenRating = (diagnosticData: string[]): number => {
    for (let i = 0; i < diagnosticData.length; i++) {
        let mostFrequentBit = getGammaRate(diagnosticData)
        diagnosticData = diagnosticData.filter(entry => entry.charAt(i) === mostFrequentBit[i].toString())
    }
    return parseArray(diagnosticData[0].split('').map(digit => parseInt(digit)))
}

// get most frequent nth bit from list of bytes
let diagnosticsData = parseTextToStringArr('/Users/jonathanjarrett/workspace/crispy-bassoon/2021/3/diagnostics-data.txt')

function getMostFrequentNthBit(column: number, inputData: string[]): number {
    let ones: number = 0
    for (const bit of inputData) {
        ones += bit.charAt(column) === '1' ? 1 : 0
    }
    return ones >= Math.round(inputData.length/2) ? 1 : 0
}

function getLeastFrequentNthBit(column: number, inputData: string[]): number {
    let ones: number = 0
    for (const bit of inputData) {
        ones += bit.charAt(column) === '1' ? 1 : 0
    }
    return ones <= Math.round(inputData.length/2) ? 1 : 0
}

export const getO2Rating = (inputData: string[], column: number) => {
    let x = inputData
    if (x.length === 1) {
        return parseArray(x[0].split(''))
    }
    if (x.length === 2) {
        return x[0].charAt(column) === '1' ? parseArray(x[0].split('')) : parseArray(x[1].split(''))
    }
    let majorityBit = getMostFrequentNthBit(column, x)
    x = x.filter(byte => byte.charAt(column) === majorityBit.toString())
    return getO2Rating(x, column += 1)
}





export const getCO2Rating = (inputData: string[], column: number) => {
    let x = inputData
    if (x.length === 1) {
        return parseArray(x[0].split(''))
    }
    if (x.length === 2) {
       return x[0].charAt(column) === '0' ? parseArray(x[0].split('')) : parseArray(x[1].split(''))
    }
    let minorityBit = getLeastFrequentNthBit(column, x)
    x = x.filter(byte => byte.charAt(column) === minorityBit.toString())
    return getCO2Rating(x, column += 1)
}

let O2 = getO2Rating(diagnosticsData, 0)
let CO2 = getCO2Rating(diagnosticsData, 0)
console.log(O2 * CO2)

