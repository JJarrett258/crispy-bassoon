import { codeReader, bugFinder } from './8-solution';
import { adventOfCodeExampleInput } from './8-data';
test('Should return an output of 5 when using advent of code data', () => {
    expect(codeReader(adventOfCodeExampleInput)).toEqual(5);
});
test('Should determine the correct step that causes inifinite loop in boot code', () => {
    expect(bugFinder(adventOfCodeExampleInput)).toEqual(`jmp -4 -> nop -4`);
});
