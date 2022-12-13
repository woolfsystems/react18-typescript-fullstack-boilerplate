import { OrderInfoResponse } from '../../server/type'
import useFetch from 'fetch-suspense'
import Cookies from 'js-cookie'

export const useOrderInfo = (): OrderInfoResponse =>{
    const {ok, response} = useFetch('/api/getOrderInfo',{method: 'GET', headers: {'XSRF-CLIENT-TOKEN':Cookies.get('XSRF-TOKEN')}},{metadata: true})
    
    if(!ok){
        throw new Error((response as OrderInfoResponse)?.err || 'Unknown error')
    }

    return response as OrderInfoResponse
}