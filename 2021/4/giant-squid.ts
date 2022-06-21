export const cardContainsNumber = (bingoCard: number[], calloutNumbers: number[]): boolean => {
    for (const num of calloutNumbers) {
        if (bingoCard.includes(num)) {
            return true
        }
    }
}

export const nextRound = (bingoCard: [number|boolean], bingoCall: number) => {
    if (bingoCard.includes(bingoCall)) {
        bingoCard[bingoCard.indexOf(bingoCall)] = true
    }
}

export function checkForRowWin(bingoCard: number[], calloutNumbers: number[]) {
    while(true) {
        if (bingoCard.length < 5) {
            return 0
        }
        let rowToCheck: number [] = bingoCard.splice(0, 5)
        if (rowToCheck.every(digit => calloutNumbers.includes(digit))) {
            return rowToCheck.reduce((previousValue, currentValue) => previousValue += currentValue)
        }
    }
}

export function extractColumData(bingoCard: number[], j: number): number[] {
    let colum: number[] = []
    for (let i = j; i < j + 21; i += 5) {
        colum.push(bingoCard[i])
    }
    return colum;
}
