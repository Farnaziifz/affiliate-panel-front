export type clientPay = {
    HowToGet:string,
    count:string,
    dateOfCatch:number,
    score:string,
}

export type clientDetailListPay = {
    data: clientPay[],

}

export type clientPay2 = {
    TitleScore:string,
    TypeOfScore:string,
    CountOfScore:number,
    DateOfScore:string,
    LevelOfScore:string
}

export type clientDetailListPay2 = {
    data: clientPay2[],

}
export type clientPay3 = {
    CreditAmount:string,
    TimeOfAmount:string,
    Period:number,
    PeriodOfUse:string,
}

export type clientDetailListPay3 = {
    data: clientPay3[],

}

export type clientPay4 = {
    TitleOfDiscountAndCode:string,
    SettingsOfCode:string,
    StatusOfDiscount:string,
    PeriodOfUse:string,
}

export type clientDetailListPay4 = {
    data: clientPay4[],

}

export type clientPay5 = {
    ValueOfOrder:string,
    TypeOfCashBack:string,
    StatusOfDiscount:string,
    PeriodOfUse:string,
}

export type clientDetailListPay5 = {
    data: clientPay5[],

}