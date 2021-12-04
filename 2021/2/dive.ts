import {parseTextToStringArr} from "../textParser";
const navData = parseTextToStringArr('/Users/jonathan.jarrett/side-projects/advent-of-code/2021/2/dive-data.txt')
const magnitudeRegExp = /(\d+)/
const directionRegExp = /([a-z]+)/

export const getVerticalValues = (navData: string[], horizontalPosition: number = 0, verticalPosition: number = 0, aim: number = 0): number => {
    navData.map(value => {
        let direction = value.match(directionRegExp)[1]
        let magnitude = Number(value.match(magnitudeRegExp)[1])
        switch(direction) {
            case 'forward':
                horizontalPosition += magnitude
                break
            default:
                verticalPosition += direction === 'down' ? magnitude : (-Math.abs(magnitude))
                break
        }
    })
    return horizontalPosition * verticalPosition
}
console.log(getVerticalValues(navData))
// 1451208