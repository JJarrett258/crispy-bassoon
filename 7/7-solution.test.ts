import { inputData } from './7-data'
import { findAllOuterBags, recursiveOuterBagColourReturner} from './7-solution'

const singularTreeTestData = 
`blue bags contain 3 yellow bags, 2 red bags.
yellow bags contain 4 purple bags, 2 orange bags.
red bags contain 14 silver bags, 9 brown bags.
purple bags contain 18 grey bags.
silver bags contain 4 black bags.
orange bags contain 2 shiny gold bags.
shiny gold bags contain 1 incorrect answer bags.`

const multipleTreeTestData = 
`blue bags contain 2 shiny gold bags, 3 grey bags.
orange bags contain 14 pink bags, 9 silver bags.
pink bags contain 18 shiny gold bags, 1 prussian blue bags.
silver bags contain 4 grey bags, 2 turq bags.
turq bags contain 2 shiny gold bags.
red bags contain 2 purple bags, 4 silver bags.
purple bags contain 2 grey bags, 2 green bags.
green bags contain 2 shiny gold bags, 2 grey bags.`

let adventOfCodeExampleInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

test('should return total bag colours as being 3', () => {
    expect(findAllOuterBags(multipleTreeTestData).size).toEqual(8)  
})

test('advent of code example', () => {
    expect(findAllOuterBags(adventOfCodeExampleInput).size).toEqual(4)
})


