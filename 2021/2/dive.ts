/*
down X increases your aim by X units, up X decreases your aim by X units.
forward X does two things:
    It increases your horizontal position by X units.
    It increases your depth by your aim multiplied by X.
 */
const magnitudeRegExp = /(\d+)/
const directionRegExp = /([a-z]+)/

export const calculateFinalPosition = (navData: string[], horizontalPosition: number = 0, verticalPosition: number = 0, aim: number = 0): number => {
    navData.map(directions => {
        let direction = directions.match(directionRegExp)[1]
        let magnitude = Number(directions.match(magnitudeRegExp)[1])
        switch(direction) {
            case 'forward':
                verticalPosition += (aim * magnitude)
                horizontalPosition += magnitude
                break
            default:
                aim += direction === 'down' ? magnitude : -Math.abs(magnitude)
                break
        }
    })
    return horizontalPosition * verticalPosition
}