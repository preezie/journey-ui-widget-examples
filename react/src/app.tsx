import PreezieWidget from "@/components/PreezieWidget"

export default function Home() {
  return (
    <div>
      <PreezieWidget widgetIds={["b3c10eda-d5b3-43d0-2cef-08da23f2e670"]} targetElements={["prz-widget"]} isAfter={[false]} />
      <div className="prz-widget"></div>
    </div>
  )
}
