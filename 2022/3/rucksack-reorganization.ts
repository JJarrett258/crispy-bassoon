import {parseTextFileToString} from "../../utilities/textParser";

const testData = parseTextFileToString('/Users/Jonathan.Jarrett/side-projects/crispy-bassoon/2022/3/items-in-sack.txt').split('\n')
/*
Day One
 */

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

/*
Day Two
*/
export const findSmallestBagInGroup = (groupBags: string[]) => {
    groupBags.sort(function(a, b) {
        return a.length - b.length
    })
    let smallestBag = new Set(groupBags[0].split(''))
    let secondSmallestBag = new Set(groupBags[1].split(''))
    let largestBag = new Set(groupBags[2].split(''))
    return [smallestBag, secondSmallestBag, largestBag]
}

export function findMatchingBagType(bag1: string, bag2: string, bag3: string) {
    let [smallestBag, secondSmallestBag, largestBag] = findSmallestBagInGroup([bag1, bag2, bag3])
    let groupBadgeType
    for (let itemType of smallestBag) {
        if (secondSmallestBag.has(itemType) && largestBag.has(itemType)) {
            groupBadgeType = lookupPriorityOfItemType(itemType)
            break
        }
    }
    return groupBadgeType
}

const sumValuesOfAllBadgeTypes = (bagsToSort: string[]) => {
    let count = 0
    for (let i = 0; i < bagsToSort.length - 1; i += 3) {
        count += findMatchingBagType(bagsToSort[i], bagsToSort[i + 1], bagsToSort[i + 2])
    }
    return count;
};
