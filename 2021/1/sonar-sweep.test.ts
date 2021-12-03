import {calculateDepthIncreasesTotal, getDepthChange, threeMeasurementDepthAnalysis} from "./sonar-sweep";

describe('sonar sweep tests', () => {
    test('determine if next depth bigger than current', () => {
        const currentDepth = 208
        const nextDepth = 210
        const isDepthIncreasing: number = getDepthChange(currentDepth, nextDepth)
        expect(isDepthIncreasing).toEqual(1)
    })

    test('count number of increases in a list of depth changes', () => {
        const depthChanges: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
        const totalIncreases: number = calculateDepthIncreasesTotal(depthChanges)
        expect(totalIncreases).toEqual(7)
    })

    test('determine depth change from three measurement window', () => {
        const depthChanges: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
        const totalIncreases = threeMeasurementDepthAnalysis(depthChanges)
        expect(totalIncreases).toEqual(5)
    })
})