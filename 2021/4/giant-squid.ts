import {parseTextToStringArr} from "../../textParser";
//1 H hydrogen 1312.0

const elementalSymbolRegex = /\s([a-zA-Z]{1,2})\s/
const firstIonisationEnergyRegex = /\d\s[a-zA-z]+\s[a-z]+\s(\d+)/
let stringData = parseTextToStringArr('/Users/jonathan.jarrett/side-projects/advent-of-code/2021/4/ionisationData.txt')

type ionisationTableType = {
    "Element": string
    "1st Ionisation Energy": number
}
// console.log(stringData)
const firstIonisationEnergies = (allIonisationEnergies: string[]) => {
    let ionisationData: ionisationTableType[] = []
    for (const element of allIonisationEnergies) {
        let elementSymbol = elementalSymbolRegex.exec(element)[1]
        let firstIonEnergy = Number(firstIonisationEnergyRegex.exec(element)[1])
        ionisationData.push({
            "Element": elementSymbol,
            "1st Ionisation Energy": firstIonEnergy
        })
    }
    console.table(ionisationData)
}

firstIonisationEnergies(stringData)