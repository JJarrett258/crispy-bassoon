import { inputData } from './1-data'

let inputNumbers = inputData
const targetNum = 2020
let operands: number[] = []

const twoOperandsSolutionFinder = (): void => {
        let num1 = inputNumbers[0]
        for (let i = 1; i < inputNumbers.length; i++) {
                let num2 = inputNumbers[i]
                if (num1 + num2 === targetNum) {
                        console.log (
                                `Matches: ${num1} ${num2}\nsolution: ${num1 * num2}`
                        )
                        return
                }
        }
        inputNumbers.shift()
        twoOperandsSolutionFinder()
}
//twoOperandsSolutionFinder()

const threeOperandsSolutionFinder = () => {
        let num1 = inputNumbers[0]
        for (let i = 1; i < inputNumbers.length; i++) {
                let num2 = inputNumbers[i]
                for (let l = 2; l < inputNumbers.length; l++) {
                        let num3 = inputNumbers[l]
                        if (num1 + num2 + num3 === targetNum) {
                                console.log (
                                        `Matches: ${num1} ${num2} ${num3}\nsolution: ${num1 * num2 * num3}`
                                )
                                return
                        }
                }
        }
        inputNumbers.shift()
        threeOperandsSolutionFinder()
}
threeOperandsSolutionFinder()

