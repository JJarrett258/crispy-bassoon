import {parseTextToStringArr} from "../../textParser";
const inputData = parseTextToStringArr('./diagnostics-data.txt')

function getSumOfOnesInBinaryColumns(diagnosticsData: string[]): number[] {
    let totalZerosInEachColumns: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    diagnosticsData.forEach(entry => {
        for (let i = 0; i < entry.length; i++) {
            if (entry.charAt(i) === '1') {
                totalZerosInEachColumns[i] += 1
            }
        }
    })
    return totalZerosInEachColumns
}

export const getOxygenRating = (mostFrequentBitInDiagnosticData: number[], diagnosticData: string[]) => {


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

