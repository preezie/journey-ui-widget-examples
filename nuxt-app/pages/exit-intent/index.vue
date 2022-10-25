<template>
  <div class="App">
    <Navbar />
    <header class="App-header">
      <h1>Header</h1>
    </header>
    <main>
      <div>
        <h3>
          please move your cursor out to the address bar to trigger the exit
          intent
        </h3>
      </div>
      <div id="preezie-widget-div-id-exit"></div>
      <div id="preezie-widget-div-id"></div>
    </main>
    <footer class="App-footer">
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script lang="ts">
declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

export default {
  name: "exit-intent",
  mounted() {
    if (window.PREEZIE_GUIDE) {
      window.PREEZIE_GUIDE.render([
        {
          guideKey: "EPO-2cca5322-e24d-455d-2e8b-08daa6730d52",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id-exit",
        },
      ]);

      window.PREEZIE_GUIDE.render([
        {
          guideKey: "87fb039c-e548-41ef-966b-08daa673064e",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id",
        },
      ]);
    }
  },
};
</script>
