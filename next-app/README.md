# This is a sample nextjs application for preezie's widget implementations.

This is preezie's [website](https://preezie.com)
This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Required scripts

### `head code`

In `pages` folder, you can find a [preguide.min](https://preeziecdn.azureedge.net/production/preguide.min.js) javascript file attached in the `head` section of the document.

```sh
<Script src="https://preeziecdn.azureedge.net/production/preguide.min.js" strategy="beforeInteractive"></Script>
```

### `code snippet`

In `pages` folder, you can find recommended widget's implementations for a nextjs application in each page.

```sh
window.PREEZIE_GUIDE.render([
    {
    guideKey: "7d51c584-ad76-4253-2fd8-08d9719d685d",
    version: "1.0.0",
    renderTo: "preezie-widget-div-id",
    },
]);
```
