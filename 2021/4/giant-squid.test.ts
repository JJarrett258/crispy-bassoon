import {
    cardContainsNumber,
    checkForRowWin, extractColumData
} from './giant-squid'
describe('Giant Squid Bingo Tests', () => {
    const card1: number [] =
        [
            76, 82,  2, 92, 53,
            74, 33,  8, 89,  3,
            80, 27, 72, 26, 91,
            30, 83,  7, 16,  4,
            20, 56, 48,  5, 13
        ]


    xtest('returns true if card contains a number from call out', () => {
        const callData: number[] = [1, 2, 3]
        expect(cardContainsNumber(card1, callData)).toEqual(true)
    })

    test('returns sum of row if card has winning row', () => {
        const callData: number[] = [30, 83,  7, 16,  4]
        expect(checkForRowWin(card1, callData)).toEqual(140)
    })

    test('get correct indexes for colum data', () => {
        let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        expect(extractColumData(data, 0)).toEqual([0, 5, 10, 15, 20])
    })

    test('column data is able to be called by a generator function', () => {

    })
})