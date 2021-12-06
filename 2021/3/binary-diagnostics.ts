

export const getGammaRate = (diagnosticsData: string[], isEpsilonRate: boolean = false): number[] => {
    let totalZerosInEachColumns: number[] = [0, 0, 0, 0, 0]
    diagnosticsData.forEach(entry => {
        for (let i = 0; i < entry.length; i++) {
            if (entry.charAt(i) === '0') {
                totalZerosInEachColumns[i] += 1
            }
        }
    })
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

export const getEpsilonRate = (diagnosticsData: string[]): number => {
    return 1
}

function invert(binaryDigits: number[]) {
    return binaryDigits.map(bit => bit === 0 ? 1 : 0)
}

function binaryArrayToNumber(binaryDigits: number[]) {
}