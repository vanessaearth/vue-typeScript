<template>
  <div id="app">
    <HelloWorld msg="Vue.js - TypeScript App"
                @add-feature="onAddFeature" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Feature from '@/modules/feature'
@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  onAddFeature(f: Feature) {
    alert('add one: ' + f.name)
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
