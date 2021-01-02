import { inputData } from './7-data'

export function regularExpressionGenerator(name: string) {
    return new RegExp(`(?<parent>.*) contain.*(`+name+`s?)`, 'g')
}
export function findNextOuterBag(bagColour: string, inputData: string) {
    return regularExpressionGenerator(bagColour).exec(inputData)
}
export const decendantFinder = (inputData: string, bagColour: string) => {
    if (findNextOuterBag(bagColour, inputData) === null) {
        return bagColour;
    } else {
        bagColour = regularExpressionGenerator(bagColour).exec(inputData).groups.parent
        return decendantFinder(inputData, bagColour)
    }
}

const singularTreeTestData = 
`blue bags contain 3 yellow bags, 2 red bads.
yellow bags contain 4 purple bags, 2 orange bags.
red bags contain 14 silver bags, 9 shiny gold bags.
purple bags contain 18 grey bags.
silver bags contain 4 shiny gold bags.
orange bags contain 2 shiny gold bags.
shiny gold bags contain 1 incorrect answer bags.`

//! May become useful
// let myArray
// let rawr = regularExpressionGenerator('shiny gold bag')
// while ((myArray = rawr.exec(singularTreeTestData)) !== null) {
//     console.log(myArray)
// }
