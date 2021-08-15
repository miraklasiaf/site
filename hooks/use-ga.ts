import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { trackPageview } from '../lib/ga'

const useGa = () => {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete(url: string) {
      trackPageview(url)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useGa
