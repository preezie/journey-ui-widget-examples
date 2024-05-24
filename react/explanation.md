# preezie React implementation

The `PreezieWidget` component is a React component used to embed Preezie widgets into your React application. This is a explanation of its usage.

## Usage

### 1. Component File

Create a new file named `PreezieWidget.tsx` in your `components` directory and copy the provided code for the `PreezieWidget` component into this file.

Please pay attention to the first line of code as it may need to be commented out based on what react version / framework you are using.

### 2. Import Component

Import the `PreezieWidget` component into the file where you want to use it:

### 3. Usage

Place the `PreezieWidget` component within the JSX structure where you want the widget to appear. Pass the required props (`widgetIds`, `targetElements`, `isAfter`) to the component.

Make sure the element you want to render the widget inside / around of is in the same component tree. You can target any ID or any class, it will always target the first existing class or id.

```javascript
import PreezieWidget from "@/components/PreezieWidget"

export default function Home() {
  return (
    <div>
      <PreezieWidget widgetIds={["b3c10eda-d5b3-43d0-2cef-08da23f2e670,EPO-755aff1b-9193-45cc-ac3d-08dc7b939cc9"]} targetElements={["prz-widget,prz-widget"]} isAfter={[false, true]} />
      <div className="prz-widget"></div>
    </div>
  )
}
```

### 4. Props

##### widgetIds

Widgetids is simply a list of widgetids you want to render. Popups can typically render anywhere but embeds need to sit where you need them to be.

##### targetElements

A list of target elements for the widget to render on, each id requires a respective element, ie see example above

##### isAfter

isAfter determins if the widget renders AFTER the element or INSIDE the element.
