import {parseTextFileToString} from "../../utilities/textParser";
export const assignmentRegex: RegExp = /(?<a>\d+)-(?<b>\d+),(?<x>\d+)-(?<y>\d+)/

let sectionAssignmentData =  parseTextFileToString('/Users/jonathan.jarrett/side-projects/crispy-bassoon/2022/4/section-assignments-data.txt').split('\n')

export function determineNumberOfEnvelopingAssignments(listOfAssignments: string[]): number {
    let numberOfEnvelopes: number = 0;
    let a,b,x,y: number;
    listOfAssignments.forEach(assignment => {
        const groups = assignmentRegex.exec(assignment).groups;
        a = Number(groups.a); b = Number(groups.b); x = Number(groups.x); y = Number(groups.y);
        // Part One:
        //if (x <= a && b <= y) numberOfEnvelopes += 1;
        //else if (x >= a && b >= y) numberOfEnvelopes += 1;
        // Part Two:
        numberOfEnvelopes += numberOfOverlappingAssignments(a, b, x, y);
    })
    return numberOfEnvelopes;
}

function numberOfOverlappingAssignments(a, b, x, y: number): number {
    let overlapPresent: number = 0
    let setAB: Set<number> = new Set<number>()
    let setXY: Set<number> = new Set<number>()
    let smallerSet: Set<number>
    let largerSet: Set<number>
    // Populate sets with the numbers within the given ranges
    if (b - a <= y - x)
    for (let i = a; i < b + 1; i++) {
        setAB.add(i)
    }
    for (let i = x; i < y + 1; i++) {
        setXY.add(i)
    }
    // Determine which of the two sets is smaller to minimise number of checks
    if (setAB.size >= setXY.size) {
        smallerSet = setXY
        largerSet = setAB
    }
    else {
        smallerSet = setAB
        largerSet = setXY
    }
    /*
        Iterate through smallest set and check if the larger set contains a given value.
        If it does, that means the two series of numbers must overlap at that point.
     */
    smallerSet.forEach(value => {
        if (largerSet.has(value)) {
            overlapPresent = 1
            return
        }
    })
    return overlapPresent
}
console.log(determineNumberOfEnvelopingAssignments(sectionAssignmentData));