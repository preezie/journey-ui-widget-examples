import { useEffect, useRef } from "react"

interface UseWidgetProps {
  widgetIds: string[]
  targetElements: string[]
  isAfter: boolean[]
}

export const usePreezieWidget = (props: UseWidgetProps) => {
  const scriptMountedRef = useRef(false)

  useEffect(() => {
    if (scriptMountedRef.current) return

    const script = document.createElement("script")

    script.src = "https://preeziecdn.azureedge.net/production/preguide.min.js"
    script.async = true
    script.dataset.widgetid = props.widgetIds.join(",")
    script.dataset.targets = props.targetElements.join(",")
    script.dataset.isafter = props.isAfter.join(",")
    document.body.appendChild(script)

    script.onload = () => {
      const przDomContentLoadedEvent = new Event("DOMContentLoaded")
      document.dispatchEvent(przDomContentLoadedEvent)
    }

    scriptMountedRef.current = true

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
