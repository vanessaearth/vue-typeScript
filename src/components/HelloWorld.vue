<template>
  <div class="hello">
    <!-- 来自父组件 -->
    <h1>{{msg}}</h1>
    <div>
      <input type="text"
             @keyup.enter="addFeature" />
    </div>
    <ul>
      <li v-for="feature in features"
          :key="feature.id">
        {{ feature.name }}
        <span class="tag">{{ feature.version }}</span>
      </li>
      <li>总计：{{total}}</li>
    </ul>

  </div>
</template>

<script lang="ts">
import { getFeatures } from '@/api/feature'
import Feature from '@/modules/feature'
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'

@Component({
  prop
})
export default class HelloWorld extends Vue {
  // 装饰器中参数是给vue的所以是大写
  @Prop({ type: String, required: true })
  //! 是明确赋值断言
  private msg!: string

  @Prop()
  private msg2!: string

  private features: Feature[] = []
  @Watch('msg')
  onMsgChange(val: string, oldVal: string) {
    console.log(val, oldVal)
  }

  @Emit()
  addFeature(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    const feature = {
      id: this.features.length + 1,
      name: input.value,
      version: '1.0'
    }
    this.features.push(feature)
    input.value = ''
    return feature
  }

  get total() {
    return this.features.length
  }

  mounted() {
    getFeatures().then(res => {
      this.features = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  li {
    padding: 5px;
  }
  .tag {
    background: lightcoral;
    color: #fff;
    padding: 2px 5px;
  }
</style>
