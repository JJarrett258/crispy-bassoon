import * as fs from "fs";

export const parseTextToNumberArr = (filepath: string): number[] => {
    return fs.readFileSync(filepath, 'utf8').split('\n').map(digit => Number(digit))
}

// export const parseTextArrayToStringArr = (filepath: string): string[] => {
//     return fs.readFileSync(filePath, 'utf8').split('\n').map(entries => entries.replace(/\s/, ''))
// }

export const parseStrategyGuide = (filePath: string): string[] => {
    return fs.readFileSync(filePath, 'utf8').split('\n');
}

export const parseTextFileToString = (filePath: string) => {
    return fs.readFileSync(filePath, "utf-8")
}

export const parseCoordinates = (filePath: string): string[] => {
    return fs.readFileSync(filePath, 'utf-8').split('\n')
}

