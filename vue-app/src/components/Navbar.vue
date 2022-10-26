<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/workflow">Widget</router-link>
        </li>
        <li>
          <router-link to="/cta">Cta</router-link>
        </li>
        <li>
          <router-link to="/popup">Popup</router-link>
        </li>
        <li>
          <router-link to="/exit-intent">Exit intent</router-link>
        </li>
      </ul>
    </nav>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  text-align: left;
}

ul {
  margin: 0;
  padding: 0;
  background: #3a3e45;
  font-family: Arial, sans serif;
  font-size: 22px;
  text-transform: uppercase;
}

li {
  display: inline-block;
}

a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
}
a:hover,
:focus {
  color: aqua;
}
</style>
