import {calculateFinalPosition} from "./dive";
const navData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
describe('dive tests', () => {
    test('returns correct result', () => {
        expect(calculateFinalPosition(navData)).toEqual(900)
    })

})