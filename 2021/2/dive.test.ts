import {getForwardValues, getVerticalValues} from "./dive";
const navData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
describe('dive tests', () => {
    xtest('extracts all forward values into new array', () => {
        const navigationData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
        expect(getForwardValues(navigationData)).toEqual([5, 8, 2])
    })

    xtest('extracts down and up values with sign of up reversed', () => {
        const navigationData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
        expect(getVerticalValues(navigationData)).toEqual([5, -3, 8])
    })
    test('adds all values for forward motion', () => {
        const navigationData = [5, 8, 2]
        expect(getForwardValues(navData)).toEqual(15)
    })

})