import {parseTextFileToString} from "../../utilities/textParser";
export const assignmentRegex: RegExp = /(?<a>\d+)-(?<b>\d+),(?<x>\d+)-(?<y>\d+)/

let sectionAssignmentData =  parseTextFileToString('/Users/jonathan.jarrett/side-projects/crispy-bassoon/2022/4/section-assignments-data.txt').split('\n')

/*
Part One
a----------b
    x---y
 */
export function determineNumberOfEnvelopingAssignments(listOfAssignments: string[]): number {
    let numberOfEnvelopes: number = 0;
    let a,b,x,y: number;
    listOfAssignments.forEach(assignment => {
        const groups = assignmentRegex.exec(assignment).groups;
        a = Number(groups.a); b = Number(groups.b); x = Number(groups.x); y = Number(groups.y);
        if (x <= a && b <= y) numberOfEnvelopes += 1;
        else if (x >= a && b >= y) numberOfEnvelopes += 1;
    })
    return numberOfEnvelopes;
}
// console.log(determineOverlappingAssignments(sectionAssignmentData));

export function determineNumberOfOverlappingAssignments(listOfAssignments: string[]): number {
    let numberOfOverlaps:number = 0;
    let a,b,x,y: number;
    listOfAssignments.forEach(assignment => {
        const groups = assignmentRegex.exec(assignment).groups;
        a = Number(groups.a); b = Number(groups.b); x = Number(groups.x); y = Number(groups.y);
        
    })
}