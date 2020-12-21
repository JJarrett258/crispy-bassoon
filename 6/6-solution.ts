import { rawData } from './6-data'

let declarationForms = rawData.split(/\n\n/)

const evaluate = (customsDeclarationForms: string[]) => {
    let questionsAnsweredWithYes = new Set()
    let totalsPerGroups: number[] = []
    customsDeclarationForms.forEach(groupsForm => {
        for (let i = 0; i < groupsForm.length; i++) {
            if(groupsForm.charAt(i) !== '\n') {questionsAnsweredWithYes.add(groupsForm.charAt(i))}
            console.log(questionsAnsweredWithYes)
        }
        totalsPerGroups.push(questionsAnsweredWithYes.size)
        console.log(totalsPerGroups)

    });
    let grandTotal = 0
    totalsPerGroups.forEach(total => {
        grandTotal += total
    })
    console.log(grandTotal)
}

const evalulatePartTwo = (customerDeclarationForms: string[]) => {
    let numberOfQuestionsWhichAllMembersOfAGivenGroupAnsweredYes = 0
    customerDeclarationForms.forEach(group => {
        let individualResponses = group.split(/\n/)
        let responseToCompareAgainst = individualResponses.reduce(
            function (a, b) {
                return a.length < b.length ? a : b;
            }
        )
        for (let i = 0; i < responseToCompareAgainst.length; i++) {
            let questionsToWhichAllAnsweredYes = individualResponses.every(letter => letter.includes(responseToCompareAgainst.charAt(i)))
            if (questionsToWhichAllAnsweredYes) {
                numberOfQuestionsWhichAllMembersOfAGivenGroupAnsweredYes += 1
            }
        }
    })
    console.log(numberOfQuestionsWhichAllMembersOfAGivenGroupAnsweredYes)
}
//evaluate(declarationForms)
evalulatePartTwo(declarationForms)
