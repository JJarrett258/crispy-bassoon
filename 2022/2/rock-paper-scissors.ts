import {parseStrategyGuide} from "../../utilities/textParser";

/* PART ONE: Resulting scores for each permutation
AX -> 4,4
AY -> 1,8
AZ -> 7,3

BX -> 8,1
BY -> 5,5
BZ -> 2,9

CX -> 3,7
CY -> 9,2
CZ -> 6,6
 */
let rockPaperScissorsMoves = parseStrategyGuide('/Users/Jonathan.Jarrett/side-projects/crispy-bassoon/2022/2/strategy-guide.txt')

function evaluateRound(moveData: string[]) {
    let playerOne: number = 0
    let playerTwo: number = 0
    moveData.forEach(round => {
        if (round.startsWith('A') && round.endsWith('X') ||
            round.startsWith('B') && round.endsWith('Y') ||
            round.startsWith('C') && round.endsWith('Z')) {
            playerOne += 3
            playerTwo += 3
        } else if (round.startsWith('A') && round.endsWith('Z')) {
            playerOne += 6
        } else if (round.startsWith('B') && round.endsWith('X')) {
            playerOne += 6
        } else if (round.startsWith('C') && round.endsWith('Y')) {
            playerOne += 6
        } else {
            playerTwo += 6
        }
        let itemScores = scoreItems(round, playerOne, playerTwo)
        playerOne += itemScores.playerOneScore
        playerTwo += itemScores.playerTwoScore

    })
    return {playerOne, playerTwo}
}

function scoreItems(itemsUsed: string, playerOneScore: number, playerTwoScore: number) {
    if (itemsUsed.startsWith('A')) playerOneScore = 1
    else if (itemsUsed.startsWith('B')) playerOneScore = 2
    else playerOneScore = 3
    if (itemsUsed.endsWith('X')) playerTwoScore = 1
    else if (itemsUsed.endsWith('Y')) playerTwoScore = 2
    else playerTwoScore = 3
    return {playerOneScore, playerTwoScore}
}


/* PART TWO: Resulting scores for each permutation
AX -> AY => 1, 8
AY -> AX => 4, 4
AZ -> AZ => 7, 3

BX -> BZ => 2, 9
BY -> BY => 5, 5
BZ -> BX => 8, 1

CX -> CY => 2, 9
CY -> CZ => 6, 6
CZ -> CY => 9, 2
 */
function selectPlayerTwoItem(moveData: string[]) {
    moveData.map(round => {

        switch (round) {
            case 'A X':
                moveData[moveData.indexOf(round)] = 'A Z'
                break
            case 'A Y':
                moveData[moveData.indexOf(round)] = 'A X'
                break
            case 'A Z':
                moveData[moveData.indexOf(round)] = 'A Y'
                break
            case 'B X':
                moveData[moveData.indexOf(round)] = 'B X'
                break
            case 'B Y':
                moveData[moveData.indexOf(round)] = 'B Y'
                break
            case 'B Z':
                moveData[moveData.indexOf(round)] = 'B Z'
                break
            case 'C X':
                moveData[moveData.indexOf(round)] = 'C Y'
                break
            case 'C Y':
                moveData[moveData.indexOf(round)] = 'C Z'
                break
            case 'C Z':
                moveData[moveData.indexOf(round)] = 'C X'
                break
        }
    })

    return moveData

}

const revisedPlayerTwoMoveSequence = selectPlayerTwoItem(rockPaperScissorsMoves)
const results = evaluateRound(revisedPlayerTwoMoveSequence)

function printResults(results: { playerOne, playerTwo: number }) {
    console.log(`Player One Score: ${results.playerOne}\nPlayer Two Score: ${results.playerTwo}\n\nPlayer ${results.playerOne > results.playerTwo ? 'One' : 'Two'} Wins! 🏆`)
}

printResults(results)