import type { NextPage } from 'next'
import useSWR from 'swr'

import axios from 'axios'

const Index: NextPage = () => {
  const url = 'http://localhost:3000/api/v1/health_check'

  const fetcher = (url: string) => {
    return axios.get(url).then((res) => {
      console.log('data', res.data)
      return res.data
    })
  }

  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>An error has occurred.</div>

  return (
    <>
      <div>Rails疎通確認</div>
      {data && <div>レスポンスメッセージ: {data.message}</div>}
    </>
  )
}

export default Index
