import * as fs from "fs";
export const parseTextToNumberArr = (filepath: string): number[] => {
    return fs.readFileSync(filepath, 'utf8').split('\n').map(digit => Number(digit))
}

export const parseTextToStringArr = (filePath: string): string[] => {
    return fs.readFileSync(filePath, 'utf8').split('\n')
}
