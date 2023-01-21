import {createBingoCard} from "./giant-squid";

/*
    [

        false, false, false,
        true, true, true,       4, 5, 6
        false, false, false

    ],
    [
        true, false, false,     1
        true, false, false,     4
        true, false, false      7
    ]
*/

describe('Giant Squid Bingo Tests', () => {
    // const bingoCard1: number [] =
    //     [
    //         76, 82, 2, 92, 53,
    //         74, 33, 8, 89, 3,
    //         80, 27, 72, 26, 91,
    //         30, 83, 7, 16, 4,
    //         20, 56, 48, 5, 13
    //     ]

    it('should create a bingo card from puzzle input', function () {
        const testData = [74, 33, 8, 80, 27, 72, 30, 83, 7];
        const result = createBingoCard(testData);
        expect(result).toEqual(
            [
                [
                    74, 33, 8,
                    80, 27, 72,
                    30, 83, 7
                ]
            ])
    });

    it('should ', function () {

    });
})