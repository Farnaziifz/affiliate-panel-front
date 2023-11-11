export type client = {
    id: string,
    name: string,
    subscribeDate: string,
    avgPeyment: number,
    orderCount: number,
    customerValue: number,
    status: boolean,
    customerLable: string
}

export type clientList = {
    data: client[],
    totalPage: number,
    pageNumber: number
}