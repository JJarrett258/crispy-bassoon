import { data } from '../3/3-data';
let hillsideData = data;
let right = [1, 3, 5, 7, 1];
let down = [1, 1, 1, 1, 2];
let probabilityCalc = (arr1) => {
    let x = arr1[0];
    for (let i = 1; i < arr1.length; i++) {
        x = x * arr1[i];
    }
    return x;
};
const sledgeRoute = (hillsideMap) => {
    const lengthOfTheRow = hillsideMap[0].length;
    let treeCollisionProbability = [];
    for (let n = 0; n < right.length; n++) {
        let rightIncrement = right[n];
        let downIncrement = down[n];
        let columnNumber = 0;
        let numberOfTreesHit = 0;
        for (let rowNumber = downIncrement; rowNumber < hillsideMap.length; rowNumber += downIncrement) {
            columnNumber += rightIncrement;
            let p = columnNumber % lengthOfTheRow;
            if (hillsideMap[rowNumber].charAt(p) === '#') {
                numberOfTreesHit += 1;
            }
        }
        treeCollisionProbability.push(numberOfTreesHit);
    }
    console.log(probabilityCalc(treeCollisionProbability));
};
sledgeRoute(hillsideData);
