"use client"
import { usePreezieWidget } from "@/hooks/usePreezieWidget"

export default function Home() {
  usePreezieWidget({
    widgetIds: ["24862275-1985-4f6a-0134-08d941ad6505", "061be698-722c-47e5-6622-08d96ce662e1"],
    targetElements: ["widget-render", "widget-render-2"],
    isAfter: [true, false],
  })

  return (
    <div className="p-4">
      <h1 className="p-2 text-center text-2xl font-bold">Next 13 / preezie integration</h1>
      <div className="widget-render"></div>
      <div className="mb-4"></div>
      <div id="widget-render-2"></div>
    </div>
  )
}
