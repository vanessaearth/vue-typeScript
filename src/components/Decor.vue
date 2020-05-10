<template>
  <div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Vue } from 'vue-property-decorator'
// componet
function Component(target: any) {
  target
  return Vue.extends()
}
@Component
export default class Decor extends Vue {}
</script>

<style scoped>
</style>
