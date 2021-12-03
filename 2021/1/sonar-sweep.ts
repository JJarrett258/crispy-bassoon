import {parseTextToNumberArr} from "../textParser";

const depthData = parseTextToNumberArr('/Users/jonathan.jarrett/side-projects/advent-of-code/2021/1/sonar-sweep-data.txt')
export const getDepthChange = (currentDepth: number, nextDepth: number): number => {
    return nextDepth > currentDepth ? 1 : 0
}

export const calculateDepthIncreasesTotal = (depthChangeData: number[]): number => {
    let totalDepthIncreases = 0
    depthChangeData.reduce((previousValue, currentValue) => {
        if (currentValue > previousValue) {
            totalDepthIncreases += 1
        }
        return currentValue
    })
    return totalDepthIncreases
}

export const threeMeasurementDepthAnalysis = (depthChangeData: number[]) => {
    let newData: number[] = []
    for (let i = 0; i < depthChangeData.length - 2; i++) {
        newData.push(depthChangeData[i] + depthChangeData [i+1] + depthChangeData[i+2])
    }
    return calculateDepthIncreasesTotal(newData)
}



console.log(threeMeasurementDepthAnalysis(depthData))
