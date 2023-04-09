<template>
  <div class="q-pl-md q-pt-md q-pb-none">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey q-pl-md q-pr-xl"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="desc" label="Descrição" />
      <q-tab name="func" label="Funcionamento" />
      <q-tab name="detl" label="Detalhamento" />
    </q-tabs>

    <q-separator inset/>

    <div class="row q-pt-md">
      <div class="col-12 col-md-6">
        <q-scroll-area class="full-height q-pr-lg"
        :thumb-style="mainThumbStyle"
        :bar-style="mainBarStyle">
          <q-tab-panels v-model="tab" animated class="text-justify"  style="height: 800px;">
            <q-tab-panel name="desc">
              {{ props.obj.descricao }}
            </q-tab-panel>

            <q-tab-panel name="func">
              {{ props.obj.funcionamento }}
            </q-tab-panel>

            <q-tab-panel name="detl">
              <ul>
                <li v-for="item in props.obj.detalhamento" :key="item">
                  {{ item }}
                </li>
              </ul>
            </q-tab-panel>
          </q-tab-panels>
          <div style="height: 800px;"></div>
        </q-scroll-area>
      </div>
      <div class="col-12 col-md-6 q-pa-lg q-pr-xl">
        <q-card class="">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { mainThumbStyle, mainBarStyle } from 'src/assets/variables'

const props = defineProps({
  obj: Object
})
const tab = ref('desc')

onMounted(() => {
})

</script>

<style lang="scss" scoped>
.mainArea {
  height: $hiMain;
}
</style>
