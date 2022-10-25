<template>
  <div class="App">
    <Navbar />
    <header class="App-header">
      <h1>Header</h1>
    </header>
    <main>
      <div id="preezie-widget-div-id"></div>
    </main>
    <footer class="App-footer">
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

declare global {
  interface Window {
    PREEZIE_GUIDE: any;
  }
}

export default Vue.extend({
  mounted: function () {
    if (window.PREEZIE_GUIDE) {
      window.PREEZIE_GUIDE.render([
        {
          guideKey: "87fb039c-e548-41ef-966b-08daa673064e",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id",
        },
      ]);
    }
  },
});
</script>
