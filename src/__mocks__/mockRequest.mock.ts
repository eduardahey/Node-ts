import {Params} from 'express-serve-static-core'
import {Request} from 'express'

export const makeMockRequest = ({params, query} : {params?: Params, query?: Params}) : Request => {
    const req = {
        params: params || { },
        query: query || { }
    } as unknown;
    return req as Request;
}