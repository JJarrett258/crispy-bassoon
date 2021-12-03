import { findDuplicateFrequency } from "./1";
describe('should return the right num', () => {
    it('should return 0 from inputs', function () {
        const data = [+1, -1];
        expect(findDuplicateFrequency(data)).toEqual(0);
    });
    it('should return 10 from inputs', function () {
        const data = [+3, +3, +4, -2, -4];
        expect(findDuplicateFrequency(data)).toEqual(10);
    });
    it('should return 5 from inputs', function () {
        const data = [-6, +3, +8, +5, -6];
        expect(findDuplicateFrequency(data)).toEqual(5);
    });
    it('should return 14 from inputs', function () {
        const data = [+7, +7, -2, -7, -4];
        expect(findDuplicateFrequency(data)).toEqual(14);
    });
});
