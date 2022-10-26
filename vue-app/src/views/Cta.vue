<template>
  <div class="App">
    <Navbar />
    <header class="App-header">
      <h1>Header</h1>
    </header>
    <main>
      <div>
        <h3>please press the cta button to see widget</h3>
      </div>
      <div id="preezie-widget-div-id-popup"></div>
    </main>
    <footer class="App-footer">
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Cta extends Vue {
  mounted() {
    if (window.PREEZIE_GUIDE) {
      window.PREEZIE_GUIDE.render([
        {
          guideKey: "EPO-2cca5322-e24d-455d-2e8b-08daa6730d52",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id-popup",
        },
      ]);
    }
  }
}
</script>
