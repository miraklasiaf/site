import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { trackPageview } from '../analytics'

const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete(url: string) {
      trackPageview(url)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
}

export default useAnalytics
