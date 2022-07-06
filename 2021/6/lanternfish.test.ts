// import {updateCycle} from "./lanternfish";
//
// describe('Lanternfish Tests', () => {
//
//     it('should reduce cycle number by 1', () => {
//         const school = [3]
//         const newSchool = updateCycle(school, 1)
//         expect(newSchool).toEqual([2]);
//     });
//
//     it('should add a new fish when cycle is restarted', function () {
//         const school = [0]
//         const newSchool = updateCycle(school, 1)
//         expect(newSchool).toEqual([6, 8]);
//     });
//
//     it('should update number for each fish within school', function () {
//         const school = [4, 3]
//
//         expect(updateCycle(school, 1)).toEqual([3, 2]);
//     });
//
//     it('should handle larger schools over 3 iterations', function () {
//         let school = [3,4,3,1,2]
//         school = updateCycle(school, 3)
//         expect(school).toEqual([0,1,0,5,6,7,8])
//     });
//
//     it('should handle 18 cycles', function () {
//         let school = [3,4,3,1,2];
//         const result = updateCycle(school, 18)
//         expect(result.length).toEqual(26)
//     });
//
//
// })