export type clientDetailOrder = {
    orderNumber:string,
    dateoforder:string,
    amountmoney:number,
}

export type clientDetailListOrder = {
    data: clientDetailOrder[],

}