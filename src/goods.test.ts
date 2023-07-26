import { describe, expect, it, test } from 'vitest'
import { getGoodsList, UpdateGoodsSingleField } from './goods'

describe('商品接口测试', () => {
  it('商品列表更新是否可售状态', async () => {
    const response1 = await getGoodsList({ params: { pageIndex: 1, pageSize: 10 } })
    expect(response1.status).toBe(200)
    expect(response1.data.status).toBeTruthy()
    const goodsItem = response1.data.data.find(item => item.status === 0)
    const goodsItemExcludeStatus = {}
    for (const key in goodsItem) {
      if (key !== 'status') {
        goodsItemExcludeStatus[key] = goodsItem[key]
      }
    }

    const response2 = await UpdateGoodsSingleField({ params: { id: goodsItem.id, type: 1 }, data: { value: 1 } })
    expect(response2.status).toBe(200)
    expect(response2.data.status).toBeTruthy()

    const response3 = await getGoodsList({ params: { pageIndex: 1, pageSize: 10 } })
    expect(response2.status).toBe(200)
    expect(response2.data.status).toBeTruthy()
    const goodsItem2 = response3.data.data.find(item => item.id === goodsItem.id)
    const goodsItemExcludeStatus2 = {}
    for (const key in goodsItem2) {
      if (key !== 'status') {
        goodsItemExcludeStatus2[key] = goodsItem2[key]
      }
    }
    expect(goodsItemExcludeStatus2).deep.eq(goodsItemExcludeStatus)
  })
})