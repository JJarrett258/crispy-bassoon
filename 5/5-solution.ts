import { data } from './5-data'


const rowFinder = (boardingPassID: string) => {
    let high = 127
    let low = 0
    let numberToUse = 64
    for (let i = 0; i !== 6; i++) {
        if (boardingPassID[i] === 'F') {
            high = high - numberToUse
        } else {
            low = low + numberToUse
        }
        numberToUse = numberToUse / 2
    }
    let rowResult = boardingPassID[6] === 'F' ? low : high
    return rowResult
}

const columnFinder = (boardingPassID: string) => {
    let high = 7
    let low = 0
    let numberToUse = 4
    for (let i = 7; i !== 9; i++) {
        if (boardingPassID[i] === 'L') {
            high = high - numberToUse
        } else {
            low = low + numberToUse
        }
        numberToUse = numberToUse / 2
    }
    let columnResult = boardingPassID[9] === 'L' ? low : high
    return columnResult
}


const seatFinder = (boardingPassID: string) => {
    let row = rowFinder(boardingPassID)
    let column = columnFinder(boardingPassID)
    let seat = (row * 8 + column)
    return seat
}

const highestIDPossible = () => {
    let highestIdSoFar = 0
    let orderedData: number[] = []
    data.forEach(id => {
        let result = seatFinder(id)
        orderedData[result] = result
    })
    for (let i = 0; i < orderedData.length; i++) {
        console.log(orderedData[i])
    }
}
highestIDPossible()