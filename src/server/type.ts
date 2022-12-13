export enum OrderState{
    InProgress = 'in_progress',
    Placed = 'placed',
    Shipped = 'shipped',
    Cancelled = 'cancelled'
}

export type ProductFrequencyTuple = [string,number]

export interface OrderStatistics {
    orderStats: {
        totalOrders: number,
        ordersThisMonth: number,
        ordersLastMonth: number,
        ordersInProgress: number
    },
    revenueStats: {
        totalRevenue: number
    },
    productStats: {
        topProduct: ProductFrequencyTuple,
        productFrequencyArray: ProductFrequencyTuple[]
    }
}

export interface OrderInfoResponse {
    count?: number
    recent_orders?: Order[]
    statistics?: OrderStatistics
    err?: string 
}
export interface Order { 
    order_id: number,
    order_placed: Date,//'2021-08-25'
    product_name: string,//'bow'
    price: number,//146.14
    first_name: string,//'Katy'
    last_name: string,//'Quest'
    address: string,//'1 Truax Pass'
    email: string,//'kquestde@google.es'
    order_status: OrderState,//'placed'
    date: number//20210825
}