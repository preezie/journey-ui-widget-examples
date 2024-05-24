# PreezieWidget Implementation for React-based Frameworks

This guide provides instructions on implementing the PreezieWidget in React-based frameworks using the provided component code.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- A React-based framework (e.g., Next.js, Create React App)

## Installation

1. **Create a new React project** (skip this step if you already have a project):

   ```bash
   npx create-react-app preezie-widget-demo
   cd preezie-widget-demo
   ```

   For a Next.js project:

   ```bash
   npx create-next-app preezie-widget-demo
   cd preezie-widget-demo
   ```

2. **Create the PreezieWidget Component:**

   Create a new file called `PreezieWidget.tsx` in the `components` directory (create this directory if it doesn't exist).

   ```bash
   mkdir -p src/components
   touch src/components/PreezieWidget.tsx
   ```

   Add the following code to `PreezieWidget.tsx`:

   ```tsx
   // COMMENT THIS WHOLE LINE OUT IF YOU ARE NOT USING NEXTJS
   import { useEffect, useRef } from "react"

   interface Props {
     widgetIds: string[]
     targetElements: string[]
     isAfter: boolean[]
   }

   const PreezieWidget = (props: Props) => {
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
     }, [props])

     return null
   }

   export default PreezieWidget
   ```

## Usage

1. **Use the PreezieWidget Component:**

   In your main component or page, import and use the `PreezieWidget` component.

   For a Next.js project, update your `pages/index.tsx` file:

   ```tsx
   import PreezieWidget from "@/components/PreezieWidget"

   export default function Home() {
     return (
       <div>
         <PreezieWidget widgetIds={["b3c10eda-d5b3-43d0-2cef-08da23f2e670"]} targetElements={["prz-widget"]} isAfter={[false]} />
         <div className="prz-widget"></div>
       </div>
     )
   }
   ```

   For a Create React App project, update your `src/App.tsx` file:

   ```tsx
   import PreezieWidget from "./components/PreezieWidget"

   function App() {
     return (
       <div>
         <PreezieWidget widgetIds={["b3c10eda-d5b3-43d0-2cef-08da23f2e670"]} targetElements={["prz-widget"]} isAfter={[false]} />
         <div className="prz-widget"></div>
       </div>
     )
   }

   export default App
   ```

## Customization

You can customize the widget by changing the `widgetIds`, `targetElements`, and `isAfter` props passed to the `PreezieWidget` component.

- `widgetIds`: An array of widget IDs to be used.
- `targetElements`: An array of target element class names or IDs where the widget should be mounted.
- `isAfter`: An array of boolean values indicating whether the widget should be loaded after the specified target elements.

Example:

```tsx
<PreezieWidget widgetIds={["your-widget-id-1", "your-widget-id-2"]} targetElements={["target-class-1", "target-class-2"]} isAfter={[true, false]} />
```

## Troubleshooting

- **Widget not appearing**: Ensure the `widgetIds`, `targetElements`, and `isAfter` props are correctly set.
- **Script not loading**: Check the network tab in your browser's developer tools to see if the script is being fetched correctly.
- **JavaScript errors**: Look for errors in the console and ensure all dependencies and props are correctly configured.

If you encounter any issues, refer to the Preezie documentation or contact their support for further assistance.

## Conclusion

You've successfully implemented the PreezieWidget in your React-based project. This widget will enhance your application by embedding Preezie's interactive content seamlessly. Happy coding!
