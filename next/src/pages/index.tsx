import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'

import { fetcher } from '@/utils'

type ArticleProps = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

const Index: NextPage = () => {
  const url = 'http://localhost:3000/api/v1/articles'

  const { data, error } = useSWR(url, fetcher)
  console.log(data)
  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return <div></div>
}

export default Index
