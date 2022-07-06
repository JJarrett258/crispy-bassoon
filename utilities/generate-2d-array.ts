export const get2DArray = (numberOfRows: number, numberOfColumns: number): [number][] => {
    let twoDimensionalArray: [number][] = []
    for (let r: number = 0; r < numberOfRows; r++) {
        twoDimensionalArray[r] = [r];
        for (let c: number = 0; c < numberOfColumns; c++) {
            twoDimensionalArray[r][c] = [0][0]
        }
    }
    return twoDimensionalArray
}
