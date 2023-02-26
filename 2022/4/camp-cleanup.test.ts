import {assignmentRegex, determineOverlappingAssignments} from "./camp-clean-up";
describe('Day Four - Camp Cleanup Tests', function () {
    const overlappingAssignments: string = '2-8,3-7';
    it('should assign a,b,x,y the values from the section assignments', function () {
        let point = assignmentRegex.exec(overlappingAssignments).groups
        expect(Number(point.a)).toBe(2)
        expect(Number(point.b)).toBe(8)
        expect(Number(point.x)).toBe(3)
        expect(Number(point.y)).toBe(7)
    });

    it('should return an answer of 2', function () {
       let testSubject = [
           '2-4,6-8',
           '2-3,4-5',
           '5-7,7-9',
           '2-8,3-7',
           '3-7,2-8',
           '6-6,4-6',
           '2-6,4-8',
           '5-5,5-5',
           '2-3,3-4',
           '6-46,6-50',
           '72-72,28-72',
           '49-53,49-51',
           '9-85,8-85',
           '26-80,26-90'
       ]
        expect(determineOverlappingAssignments(testSubject)).toBe(10)
    });
});