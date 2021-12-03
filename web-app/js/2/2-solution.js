const fs = require('fs');
const filePath = '/Users/jonathan.jarrett/workspace/Side Projects/adventOfCode2020/2/2-data.txt';
const rawData = fs.readFileSync(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
});
const inputData = rawData.split(/\n/);
const regex = /(\d+)-(\d+)\s([aA-zZ]):\s([aA-zZ]+)/;
const positionChecker = (password, positionOne, positionTwo, characterKey) => {
    if (password.charAt(positionOne - 1) === characterKey || password.charAt(positionTwo - 1) === characterKey) {
        if (password.charAt(positionOne - 1) !== password.charAt(positionTwo - 1)) {
            return true;
        }
    }
};
const evaluateDataEntry = (passwordEntry) => {
    let sortedData = regex.exec(passwordEntry);
    let minimumCharacters = parseInt(sortedData[1]);
    let maximumCharacters = parseInt(sortedData[2]);
    let characterKey = sortedData[3];
    let characterCount = 0;
    for (let i = 0; i < sortedData[4].length; i++) {
        if (sortedData[4].charAt(i) === characterKey) {
            characterCount += 1;
        }
    }
    //if (characterCount >= minimumCharacters && characterCount <= maximumCharacters) {
    if (positionChecker(sortedData[4], minimumCharacters, maximumCharacters, characterKey))
        validPasswords.push(passwordEntry);
    //}
};
let validPasswords = [];
inputData.forEach(password => evaluateDataEntry(password));
console.log(validPasswords.length);
