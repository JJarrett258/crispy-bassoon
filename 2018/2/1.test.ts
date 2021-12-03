type FrequencyTable = {[letter: string]: number}
const {containsLetterOccurringTwice: containsLetterOccurringTwice, CreateFrequencyTable, containsLetterOccurringThrice, calculateChecksum} = require('./2')

describe('Day Two Tests', () => {
    test('should populate a frequency table using the letter from a string and assign them to 0', () => {
        const inputString = 'abcde'
        let frequencyTable: FrequencyTable = CreateFrequencyTable(inputString)
        expect(frequencyTable).toEqual({'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1})
    })

    test('should return the correct frequency for each letter in a given string', () => {
        const inputString = 'aabbbcdee'
        const frequencyOfLetters: FrequencyTable = CreateFrequencyTable(inputString)
        expect(frequencyOfLetters).toEqual({'a': 2, 'b': 3, 'c': 1, 'd': 1, 'e': 2})
    })

    test('should return the number of instances each time a string within an array contains two of the same letter', () => {
        const frequencyTable: FrequencyTable = {'a': 2, 'b': 3, 'c': 1, 'd': 1, 'e': 4}
        const letterOccurringTwice = containsLetterOccurringTwice(frequencyTable)
        expect(letterOccurringTwice).toEqual(true)
    })

    test('should return the number of instances each time a string within an array contains two of the same letter', () => {
        const frequencyTable: FrequencyTable = {'a': 2, 'b': 3, 'c': 1, 'd': 1, 'e': 4}
        const letterOccurringTwice = containsLetterOccurringThrice(frequencyTable)
        expect(letterOccurringTwice).toEqual(true)
    })

    test('should return 12 as the checksum value for the given input', () =>{
        const inputData: string[] = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']
        const checksumValue: number = calculateChecksum(inputData)
        expect(checksumValue).toEqual(12)
    })
})