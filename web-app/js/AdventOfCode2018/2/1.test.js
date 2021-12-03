const { determineFrequencies, FrequencyTable } = require('./2');
describe('Day Two Tests', () => {
    test('should populate a frequency table using the letter from a string and assign them to 0', () => {
        const inputString = 'abcde';
        let frequencyTable = determineFrequencies(inputString);
        expect(frequencyTable).toEqual({ 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0 });
    });
    xtest('should return the correct frequency for each letter in a given string', () => {
        const inputString = 'aabbbcdee';
        const frequencyOfLetters = determineFrequencies(inputString);
        expect(frequencyOfLetters).toEqual({ 'a': 2, 'b': 3, 'c': 1, 'd': 1, 'e': 2 });
    });
    // xtest('should return 12 as the checksum value for the given input', () =>{
    //     const inputData: string[] = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']
    //     const checksumValue: number = calculateChecksum(inputData)
    //     expect(checksumValue).toEqual(12)
    // })
});
