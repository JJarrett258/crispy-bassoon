import { passportData } from './4-data'

const extractFieldsFromPassport = {
    byr: (passport: string) => /(byr):(\d{4})/g.exec(passport),
    iyr: (passport: string) => /(iyr):(\d{4})/g.exec(passport),
    eyr: (passport: string) => /(eyr):(\d{4})/g.exec(passport),
    hgt: (passport: string) => /(hgt):([0-9]+)([a-z]{2})/g.exec(passport),
    hcl: (passport: string) => /(hcl):#([0-9, a-f]{6})/g.exec(passport),
    ecl: (passport: string) => /(ecl):(amb|blu|brn|gry|grn|hzl|oth)/g.exec(passport),
    pid: (passport: string) => /(pid):(\d{9})/g.exec(passport)
}

const requiredPassportFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
]
// todo: DONE
export const dateRangeChecks = (byr_iyr_eyr: RegExpExecArray): boolean => {
    let checkStatus: boolean = true
    let year = isNaN(parseInt(byr_iyr_eyr[2])) ? 0 : parseInt(byr_iyr_eyr[2])
    switch(byr_iyr_eyr[1]) {
        case 'byr': 
            checkStatus = year >= 1920 && year <= 2002
            break

        case 'iyr': 
            checkStatus = year >= 2010 && year <= 2020
            break

        case 'eyr':
            checkStatus = year >= 2020 && year <= 2030
            break
    }
    return checkStatus
}

//todo: DONE
export const heightChecker = (hgt: string): boolean => {
    const heightRegex = /(hgt):([0-9]+)([a-z]{2})/g
    let sortedData = heightRegex.exec(hgt)??[]
    if (sortedData.length === 0) {
        return false
    } else {
        let [value, unit] = [isNaN(parseInt(sortedData[2])) ? 0 : parseInt(sortedData[2]), sortedData[3]]
        let heightCheckStatus = unit === 'cm' ? value >= 150 && value <= 193 : value >= 59 && value <= 76
        return heightCheckStatus
    }
}
//todo: DONE
export const remainingChecks = (passport: string) :boolean => {
    let eyeColour = extractFieldsFromPassport.ecl(passport) ? true : false

    let personalID = extractFieldsFromPassport.pid(passport) ? true : false

    let hairColour = extractFieldsFromPassport.hcl(passport) ? true : false

    if (!eyeColour || !personalID || !hairColour) {
        return false
    } else {
        return true
    }
}

const validatePassportData = (passportData: string) => {
    let sortedPassportData: string[] = passportData.split(/\n\n/g)
    let passportsWithAllFieldsPresent = []
    sortedPassportData.forEach(passport => {
        let passportContainsAllRequiredFields = true
        requiredPassportFields.forEach(requiredField => {
            if (!passport.includes(requiredField)) {
                passportContainsAllRequiredFields = false
            }
        })
        if (passportContainsAllRequiredFields) {
            passportsWithAllFieldsPresent.push(passport)
        }
    })

    let numberOfValidPassports = 0

    passportsWithAllFieldsPresent.forEach(passport => {
        let validDOB = dateRangeChecks(extractFieldsFromPassport.byr(passport))
        let validIssueYear = dateRangeChecks(extractFieldsFromPassport.iyr(passport))
        let validExpireDate = dateRangeChecks(extractFieldsFromPassport.eyr(passport))
        let heightCheckOutcome = heightChecker(passport)
        let remainingChecksOutcome = remainingChecks(passport)
        if (validDOB && validExpireDate && validIssueYear && heightCheckOutcome && remainingChecksOutcome) {
            numberOfValidPassports += 1
        } else {
            console.log(`${passport}\n------------------------------`)
            console.log(`byr: ${validDOB}`)
            console.log(`iyr: ${validIssueYear}`)
            console.log(`eyr: ${validExpireDate}`)
            console.log(`hgt: ${heightCheckOutcome}`)
            console.log(`pid, ecl, hcl: ${remainingChecksOutcome}\n------------------------------------\n`)
        }
    });
    console.log(`Number of valid passports: ${numberOfValidPassports}`)
}

validatePassportData(passportData)
