# This is a sample vue application for preezie's widget implementations.

This is preezie's [website](https://preezie.com)
This project was bootstrapped with [Create Vue App](https://cli.vuejs.org/guide/creating-a-project.html).

## Required scripts

### `head code`

In the public folder, you can find a [preguide.min](https://preeziecdn.azureedge.net/production/preguide.min.js) javascript file in the `head` section of the document.

```sh
<script type="text/javascript" src="https://preeziecdn.azureedge.net/production/preguide.min.js"></script>
```

### `code snippet`

In the project directory, you can find recommended widget's implementations for a vue application in the `views`.

```sh
window.PREEZIE_GUIDE.render([
    {
    guideKey: "7d51c584-ad76-4253-2fd8-08d9719d685d",
    version: "1.0.0",
    renderTo: "preezie-widget-div-id",
    },
]);
```
