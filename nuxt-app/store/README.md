# This is a sample nuxtjs application for preezie's widget implementations.

This is preezie's [website](https://preezie.com)
This project was bootstrapped with [`create-nuxt-app`](https://nuxtjs.org/docs/get-started/installation/).

## Required scripts

### `head code`

In `nuxt.config.js` file, you can find a [preguide.min](https://preeziecdn.azureedge.net/production/preguide.min.js) javascript file attached in the `head` section of the document.

```sh
script: [
      {
        src: "https://preeziecdn.azureedge.net/production/preguide.min.js",
      },
    ],
```

### `code snippet`

In `pages` folder, you can find recommended widget's implementations for a nuxtjs application in each page.

```sh
window.PREEZIE_GUIDE.render([
    {
    guideKey: "7d51c584-ad76-4253-2fd8-08d9719d685d",
    version: "1.0.0",
    renderTo: "preezie-widget-div-id",
    },
]);
```
