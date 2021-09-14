import config from '@mira/config'

export const trackPageview = (url: string) => {
  const _window = window as typeof window & { gtag: any }

  try {
    _window.gtag('config', config.gaTrackingId, {
      page_location: url,
      page_title: document.title
    })
  } catch (error) {
    console.error('Failed sending metrics', error)
  }
}

type TrackEventOptions = {
  action: any
  category: string
  label: string
  value: string
}

export const trackEvent = (options: TrackEventOptions) => {
  const { action, category, label, value } = options
  const _window = window as typeof window & { gtag: any }

  try {
    _window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    })
  } catch (error) {
    console.error('Failed sending metrics', error)
  }
}

export const GAScript = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.gaTrackingId}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)
