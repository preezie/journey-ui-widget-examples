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
import { Options, Vue } from "vue-class-component";
import Navbar from "./components/Navbar.vue";

@Options({
  components: {
    Navbar,
  },
})
export default class App extends Vue {
  mounted() {
    if (window.PREEZIE_GUIDE) {
      window.PREEZIE_GUIDE.render([
        {
          guideKey: "87fb039c-e548-41ef-966b-08daa673064e",
          version: "1.0.0",
          renderTo: "preezie-widget-div-id",
        },
      ]);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #3a3e45;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-footer {
  background-color: #3a3e45;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
</style>
