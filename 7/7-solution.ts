import { inputData } from './7-data'
let testInput = `
striped white bags contain 3 plaid yellow bags, 3 muted orange bags, 1 shiny gold bag, 5 light white bags.
drab green bags contain 2 dotted cyan bags, 4 striped white bags, 3 muted magenta bags.`

let directParentOfShiny_regex = /(?<directParentOfShiny>.*)\scontain.*\d shiny gold bags?/
let directParent = directParentOfShiny_regex.exec(testInput).groups.directParentOfShiny

let child = directParentOfShiny_regex.exec(testInput).groups.directParentOfShiny
let parent_regex = new RegExp(`(?<grandparentOfShiny>.*) contain.*(`+child+`)`)

function regularExpressionGenerator(child) {
    return new RegExp(`(?<parent>.*) contain.*(`+child+`)`)
}

//let 

//let counter = 0

const decendantFinder = (child) => {
    let parent = regularExpressionGenerator(child).exec(testInput).groups.parent

}
const testing = (n, l) => {
    return n + l
}

module.exports = testing
