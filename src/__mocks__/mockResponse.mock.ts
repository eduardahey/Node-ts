import {Response} from 'express'

export type MockResponse<TResult> = Response & {
    state: {
        status?: number,
        json: TResult | unknown
    }
}

export function makeMockResponse<TResult >(){
    const res = {
        state: {}
    } as MockResponse<TResult>

    res.status = (status: number) => {
        res.state.status = status
        return res
    }

    res.json = (json: TResult) => {
        res.state.json = json
        return res
    }
    return res
}