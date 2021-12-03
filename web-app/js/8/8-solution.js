import { bootCode } from './8-data';
const instructionRegExp = /(?<instruction>[aA-zZ]{3})\s(?<sign>\+|\-)(?<value>\d+)/;
function nop(index) {
    return index + 1;
}
function acc(count, value) {
    return count + value;
}
function jmp(index, value) {
    return index + value;
}
export function splitIntructionIntoConstituentParts(line) {
    let parsedBootCodeLine = instructionRegExp.exec(line);
    let instruction = parsedBootCodeLine.groups.instruction;
    let value = parsedBootCodeLine.groups.sign === '-' ? -parseInt(parsedBootCodeLine.groups.value) : parseInt(parsedBootCodeLine.groups.value);
    return { instruction, value };
}
export const parseInitialBootCode = (bootCode) => {
    let bootCodeArray = bootCode.split(/\n/);
    let instMap2 = [['', 0, false]];
    bootCodeArray.forEach(line => {
        let { instruction, value } = splitIntructionIntoConstituentParts(line);
        instMap2.push([instruction, value, false]);
    });
    instMap2.shift();
    return instMap2;
};
export const codeReader = (bootCode) => {
    let globalCounter = 0;
    let code = parseInitialBootCode(bootCode);
    for (let i = 0; i !== code.length; i += 0) {
        if (code[i][2] === true) {
            break;
        }
        code[i][2] = true;
        if (code[i][0] === 'nop') {
            i = nop(i);
            continue;
        }
        if (code[i][0] === 'jmp') {
            i = jmp(i, code[i][1]);
            continue;
        }
        else {
            globalCounter += code[i][1];
            i += 1;
            continue;
        }
    }
    return globalCounter;
};
codeReader(bootCode);
