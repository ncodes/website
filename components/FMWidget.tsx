import { useEffect } from "react"

export default function FMWidget() {
  useEffect(() => {
    ;(window as any).fairmintSettings = {
      org: "jointexchange",
      stage: "production",
    }

    const script = document.createElement("script")
    script.id = "fairmint-widget-init-script"
    script.type = "text/javascript"
    script.async = true
    script.src = "https://static.fairmint.co/widget/fairmint.latest.js"

    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag?.parentNode?.insertBefore(script, firstScriptTag)

    return () => {
      script.remove()

      const widgetContainers = document.getElementsByClassName("fairmint-widget-container")
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < widgetContainers.length; i++) {
        widgetContainers[i].remove()
      }
    }
  }, [])

  return <div className="fairmint-invest-widget" />
}
