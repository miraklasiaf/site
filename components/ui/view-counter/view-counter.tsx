import { useEffect } from 'react'
import { fetcher } from '@/lib/fetcher'
import { chakra } from '@chakra-ui/react'
import useSWR from 'swr'

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      })

    registerView()
  }, [slug])

  return <chakra.span>{`${views ? new Number(views).toLocaleString() : '–––'} views`}</chakra.span>
}
