import { request } from './request'

export function getGoodsList({ data = { query: {}, order: {} }, params = { pageIndex: 1, pageSize: 10 } }: QueryOptions) {
  return request.post('/goods/page', data, { params })
}

export function UpdateGoodsSingleField({ data = {}, params = {} }: PostOptions) {
  return request.post('/goods/updateSingleField', data, { params })
}