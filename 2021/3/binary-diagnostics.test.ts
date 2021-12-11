import {getGammaRate, getResult, invert, parseArray} from "./binary-diagnostics";

describe('binary diagnostics tests', () => {
    const diagnosticsData = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010']

    test('calculates gamma rate', () => {
        expect(getGammaRate(diagnosticsData, false)).toEqual([1,0,1,1,0])
    })

    test('calculates gamma rate from reversed diagnostic input data', () => {
        expect(getGammaRate(diagnosticsData, true)).toEqual([0,1,0,0,1])
    })

    test('the gamma rate number from array of binary numbers', () => {
        const arrayData = getGammaRate(diagnosticsData, false)
        expect(parseArray(arrayData)).toEqual(22)
        expect(parseArray(invert(arrayData))).toEqual(9)
    })

    test('returns correct power consumption', () => {
        expect(getResult(diagnosticsData)).toEqual(198)
    })

})