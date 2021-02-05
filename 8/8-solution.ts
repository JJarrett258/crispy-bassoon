const instructionRegExp = /(?<instruction>[aA-zZ]{3})\s(?<sign>\+|\-)(?<value>\d+)/

const codeReader = (code: [string, number, boolean][]) => {
    let globalCounter = 0


}

function breadcrumbs(lineOfCode: [string, number, boolean]) {
    if (lineOfCode[2] === true) {
        return 'EXIT'
    } else {
        lineOfCode[2] = true
        console.log(lineOfCode)
    }
}
function nop(index: number) {
    return index + 1
}
function acc(count: number, value) {
    return count + value
}
function jmp(index: number, value) {
    index + value
}

export function splitIntructionIntoConstituentParts(line: string) {
    let parsedBootCodeLine = instructionRegExp.exec(line)
    let instruction = parsedBootCodeLine.groups.instruction
    let value = parsedBootCodeLine.groups.sign === '-' ? -parseInt(parsedBootCodeLine.groups.value) : parseInt(parsedBootCodeLine.groups.value)

    return { instruction, value }
}

export const parseInitialBootCode = (bootCode: string) => {
    let bootCodeArray: string[] = bootCode.split(/\n/)
    let instMap2: [string, number, boolean][]

    bootCodeArray.forEach(line => {
        let { instruction, value } = splitIntructionIntoConstituentParts(line)
        instMap2.push([instruction, value, false])
    })

    return instMap2
}

// console.log(parseInitialBootCode(`nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6`))