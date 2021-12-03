import {destroyOppositePolarityUnits, filterPolymer} from "./3";

describe('day 5 tests', () => {
    const singleUnitToDestroy = 'aA'
    const dualUnitsToDestroy = 'abBA'
    const unitWithNoneToDestroy = 'aabAAB'
    const polymer = 'dabAcCaCBAcCcaDA'

    it('should identify aA as being a unit to be destroyed', function () {
        const resultingPolymerLength = 0
        expect(destroyOppositePolarityUnits(singleUnitToDestroy)).toEqual(resultingPolymerLength)
    });

    it('should not destroy units of same type and polarities', function () {
        const resultingPolymerLength = 6
        expect(destroyOppositePolarityUnits(unitWithNoneToDestroy)).toEqual(resultingPolymerLength)
    });

    it('should identify a second unit is destroyed as a consequence of prior destruction', function () {
        const resultingPolymerLength = 0
        expect(destroyOppositePolarityUnits(dualUnitsToDestroy)).toEqual(resultingPolymerLength)
    });

    it('should return the full result after all eligible units have been destroyed', function () {
        const resultingPolymerLength = 10
        expect(destroyOppositePolarityUnits(polymer)).toEqual(resultingPolymerLength)
    });
})

describe('Day Five: Part Two', () => {

    it('should filter polymer chain and remove all instances of the letter A or a', function () {
        const startingPolymer = 'abcdeAAabs'
        const resultingPolymer = 'bcdebs'
        expect(filterPolymer('A', startingPolymer)).toEqual(resultingPolymer)
    });
    it('should return 6 after filtering the polymer of A units before reacting', function () {
        const startingPolymer = 'dabAcCaCBAcCcaDA'
        const resultingPolymerLength = 6
        const filteredPolymer = filterPolymer('A', startingPolymer)
        expect(destroyOppositePolarityUnits(filteredPolymer)).toEqual(resultingPolymerLength)
    });
})