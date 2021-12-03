export function nextBagRegex(name) {
    return new RegExp(`(?<parent>.*) contain.*\\d\\s(` + name + `)`, 'g');
}
let initialOuterBagsRegExp = nextBagRegex('shiny gold bag');
export function findNextOuterBag(bagColour, inputData) {
    return nextBagRegex(bagColour).exec(inputData);
}
let validOuterBagColours = new Set();
export const recursiveOuterBagColourReturner = (inputData, bagColour) => {
    if (findNextOuterBag(bagColour, inputData) !== null) {
        bagColour = findNextOuterBag(bagColour, inputData).groups.parent;
        validOuterBagColours.add(bagColour);
        return recursiveOuterBagColourReturner(inputData, bagColour);
    }
    else {
        validOuterBagColours.add(bagColour);
    }
};
export const findAllOuterBags = (inputData) => {
    let bagColourArray = [...inputData.matchAll(initialOuterBagsRegExp)];
    bagColourArray.forEach(entry => {
        validOuterBagColours.add(entry[1]);
        recursiveOuterBagColourReturner(inputData, entry[1]);
    });
    return validOuterBagColours;
};
