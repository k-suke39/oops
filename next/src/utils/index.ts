import axios from 'axios'

export const fetcher = (url: string) => {
  return axios.get(url).then((res) => {
    console.log('res', res)
    return res.data
  })
}
