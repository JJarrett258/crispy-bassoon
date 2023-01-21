import {parseTextFileToString} from "../../utilities/textParser";

const testData = parseTextFileToString('/Users/Jonathan.Jarrett/side-projects/crispy-bassoon/2022/3/items-in-sack.txt').split('\n')

// slice string into two substrings
const divideSackIntoCompartments = (sack: string) => {
    let compartmentOne: string = sack.substring(0, sack.length / 2).slice()
    let compartmentTwo: string = sack.substring(sack.length / 2)
    return {compartmentOne, compartmentTwo}
}
// iterate through first substring and check for match in second
const compareCompartmentContents = (compartmentOne: string, compartmentTwo: string) => {
    for (const item of compartmentOne.split('')) {
        if (compartmentTwo.includes(item)) {
            return lookupPriorityOfItemType(item)
        }
    }
}
// once match is found, stop. Look up corresponding priority number and add to running total
const lookupPriorityOfItemType = (itemType: string) => {
    if (/[a-z]/.test(itemType)) {
        return itemType.charCodeAt(0) - 96
    } else if (/[A-Z]/.test(itemType)) {
        return itemType.charCodeAt(0) - 38
    }
}

function sumCompartmentPriorityValues(sacks: string[]) {
    let runningTotal = 0;
    sacks.forEach(rucksack => {
        let {compartmentOne, compartmentTwo} = divideSackIntoCompartments(rucksack)
        runningTotal += compareCompartmentContents(compartmentOne, compartmentTwo)
    })
    return runningTotal
}

console.log(sumCompartmentPriorityValues(testData))