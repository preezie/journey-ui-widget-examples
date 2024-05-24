import PreezieWidget from "@/components/PreezieWidget"

export default function Home() {
  return (
    <div>
      <PreezieWidget widgetIds={["b3c10eda-d5b3-43d0-2cef-08da23f2e670,EPO-755aff1b-9193-45cc-ac3d-08dc7b939cc9"]} targetElements={["prz-widget,prz-widget"]} isAfter={[false, true]} />
      <div className="prz-widget"></div>
    </div>
  )
}
