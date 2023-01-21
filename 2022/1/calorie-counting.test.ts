import {findFattestElf, findTheTopThreeGreediestElves} from "./calorie-counting";

const testData = [
    1000,
    2000,
    3000,
    0,
    4000,
    0,
    5000,
    6000,
    0,
    7000,
    8000,
    9000,
    0,
    10000,
    0
]
const testData2 = [
    1000,
    2000,
    3000,
    0,
    4000,
    0,
    5000,
    6000,
    0,
    7000,
    8000,
    9000,
    0,
    10000,
    0,
    30000,
    0,
    40000,
    0,
    50000,
]

describe('calorie counting tests', () => {
    test('finds the fattest elf to have 240000 calories', () => {
        expect(findFattestElf(testData)).toEqual(24000)
    })

    test('finds the top 3 fattest elves to have 45000 calories, the greedy bastards', () => {
        expect(findTheTopThreeGreediestElves(testData)).toEqual(45000)
    })

    test('find top 3 elves using more data', () => {
        expect(findTheTopThreeGreediestElves(testData2)).toEqual(12000)
    })
})