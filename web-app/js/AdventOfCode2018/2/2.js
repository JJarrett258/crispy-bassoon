//aabbbcdee
export const determineFrequencies = (inputString) => {
    const indivLetters = inputString.split('');
    let frequencyTable = {};
    for (const letter of indivLetters) {
        frequencyTable[letter] = 0;
    }
    return frequencyTable;
};
