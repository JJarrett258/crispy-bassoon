import {parseTextToStringArr} from "../textParser";
const navData = parseTextToStringArr('/Users/jonathan.jarrett/side-projects/advent-of-code/2021/2/dive-data.txt')

export const getForwardValues = (navData: string[]): number => {
    const magnitudeRegExp = /(\d+)/
    let forwardValues: number[] = []
    navData.map(value => {
        if (value.includes('forward')) {
            forwardValues.push(Number(value.match(magnitudeRegExp)[1]))
        }
    })
    return forwardValues.reduce((previousValue, currentValue) => previousValue + currentValue)
}

export const getVerticalValues = (navData: string[]): number => {
    const magnitudeRegExp = /(\d+)/
    let verticalValues: number[] = []
    navData.map(value => {
        if (value.includes('down')) {
            verticalValues.push(Number(value.match(magnitudeRegExp)[1]))
        } else if (value.includes('up')) {
            verticalValues.push(-Math.abs(Number(value.match(magnitudeRegExp)[1])))
        }
    })
    return verticalValues.reduce((previousValue, currentValue) => previousValue + currentValue)
}

function totalChangeInDirection(navData: string[]): number {
    return getVerticalValues(navData) * getForwardValues(navData)
}
console.log(totalChangeInDirection(navData))
// 1451208