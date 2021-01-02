import {decendantFinder} from './7-solution'

const singularTreeTestData = 
`blue bags contain 3 yellow bags, 2 red bads.
yellow bags contain 4 purple bags, 2 orange bags.
red bags contain 14 silver bags, 9 brown bags.
purple bags contain 18 grey bags.
silver bags contain 4 black bags.
orange bags contain 2 shiny gold bags.
shiny gold bags contain 1 incorrect answer bags.`

export const regularExpressionTestData = `
striped white bags contain 3 plaid yellow bags, 3 muted orange bags, 1 shiny gold bag, 5 light white bags.
drab green bags contain 2 dotted cyan bags, 4 striped white bags, 3 muted magenta bags.`

test('should print out the correct name of the outermost bag', () => {
    let result = decendantFinder(singularTreeTestData, 'shiny gold bags')
    expect(result).toEqual('blue bags')
})
