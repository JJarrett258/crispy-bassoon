// export const updateCycle = (schoolOfLanternfish: number[], numberOfCylces: number) => {
//     if (numberOfCylces === 0) return schoolOfLanternfish;
//     for (let i = 0; i !== schoolOfLanternfish.length; i++) {
//         if (schoolOfLanternfish[i] === 0) {
//             schoolOfLanternfish[i] = 6
//             schoolOfLanternfish.push(9)
//         } else {
//             schoolOfLanternfish[i] -= 1;
//         }
//     }
//     numberOfCylces -= 1;
//     return updateCycle(schoolOfLanternfish, numberOfCylces);
// }

export const updateCycle = (schoolOfLanternfish: number[]) => {
    for (let j = 0; j < 256; j++) {
        for (let i = 0; i !== schoolOfLanternfish.length; i++) {
            if (schoolOfLanternfish[i] === 0) {
                schoolOfLanternfish[i] = 6
                schoolOfLanternfish.push(9)
            } else {
                schoolOfLanternfish[i] -= 1;
            }
        }
    }
    return schoolOfLanternfish.length
}


function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

const updateStringCycle = (stringVersionOfSchool: string, numberOfCycles: number) => {
    if (numberOfCycles === 0) return stringVersionOfSchool;
    for (let i = 0; i !== stringVersionOfSchool.length; i++) {
        if (Number(stringVersionOfSchool.charAt(i)) === 0) {
            setCharAt(stringVersionOfSchool, i, '6')
            stringVersionOfSchool.concat('9')
        } else {
            setCharAt(stringVersionOfSchool, i, Number(stringVersionOfSchool.charAt(i)) - 1)
        }
    }
    numberOfCycles -= 1;
    return updateStringCycle(stringVersionOfSchool, numberOfCycles)
}


const puzzleInput = [3, 5, 3, 5, 1, 3, 1, 1, 5, 5, 1, 1, 1, 2, 2, 2, 3, 1, 1, 5, 1, 1, 5, 5, 3, 2, 2, 5, 4, 4, 1, 5, 1, 4, 4, 5, 2, 4, 1, 1, 5, 3, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 1, 2, 3, 5, 5, 1, 1, 3, 1, 4, 1, 3, 4, 5, 1, 4, 5, 1, 1, 4, 1, 3, 1, 5, 1, 2, 1, 1, 2, 1, 4, 1, 1, 1, 4, 4, 3, 1, 1, 1, 1, 1, 4, 1, 4, 5, 2, 1, 4, 5, 4, 1, 1, 1, 2, 2, 1, 4, 4, 1, 1, 4, 1, 1, 1, 2, 3, 4, 2, 4, 1, 1, 5, 4, 2, 1, 5, 1, 1, 5, 1, 2, 1, 1, 1, 5, 5, 2, 1, 4, 3, 1, 2, 2, 4, 1, 2, 1, 1, 5, 1, 3, 2, 4, 3, 1, 4, 3, 1, 2, 1, 1, 1, 1, 1, 4, 3, 3, 1, 3, 1, 1, 5, 1, 1, 1, 1, 3, 3, 1, 3, 5, 1, 5, 5, 2, 1, 2, 1, 4, 2, 3, 4, 1, 4, 2, 4, 2, 5, 3, 4, 3, 5, 1, 2, 1, 1, 4, 1, 3, 5, 1, 4, 1, 2, 4, 3, 1, 5, 1, 1, 2, 2, 4, 2, 3, 1, 1, 1, 5, 2, 1, 4, 1, 1, 1, 4, 1, 3, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 1, 4, 1, 3, 1, 2, 5, 5, 4, 1, 2, 3, 3, 2, 2, 1, 3, 3, 1, 4, 4, 1, 1, 4, 1, 1, 5, 1, 2, 4, 2, 1, 4, 1, 1, 4, 3, 5, 1, 2, 1]

console.log(updateCycle(puzzleInput))


