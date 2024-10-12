export interface InvestmentInput {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number,
}

export type InvestmentInput2 = {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number,
    independant: boolean,
    readyToAction: boolean
}