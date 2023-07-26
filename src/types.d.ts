
interface QueryOptions {
  params?: {
    pageIndex: number
    pageSize: number
  },
  data?: {
    order: any
    query: any
  }
}

interface PostOptions {
  params?: any
  data?: any
}