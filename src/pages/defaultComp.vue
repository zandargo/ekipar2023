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

    <div class="mainArea row q-pt-md ">
      <div class="col-12 col-md-6">
        <q-scroll-area class="full-height q-pr-lg"
        :thumb-style="mainThumbStyle"
        :bar-style="mainBarStyle">
          <q-tab-panels v-model="tab" animated class="text-justify bg-transparent"  style="height: 800px;">
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

          <div style="height: 800px;"/>

        </q-scroll-area>
      </div>
      <div class="col-12 col-md-6 q-pt-lg q-pr-xl">
        <q-card class="full-height">
          <q-carousel
            v-model="slide"
            transition-prev="slide"
            transition-next="slide"
            control-color="grey-6"
            class="text-grey-6 full-height"
            swipeable animated
            navigation padding
            arrows infinite
            :autoplay="autoplay"
          >
            <q-carousel-slide v-for="(item, index) in imageList"
            :key="index" :name="index"
            class="column no-wrap flex flex-center text-black items-center"
            >
              <q-img
                :src="item"
                spinner-color="primary"
                spinner-size="82px"
                fit
              />
            </q-carousel-slide>
          </q-carousel>
        </q-card>
      </div>
    </div>

  </div>
</template>

<script setup>
// import { onBeforeMount, onMounted, ref } from 'vue'
import { onMounted, ref } from 'vue'
import { mainThumbStyle, mainBarStyle } from 'src/assets/variables'

const props = defineProps({
  obj: Object
})
const tab = ref('desc')
const slide = ref(1)
const autoplay = ref(false)
const imageList = []

// onBeforeMount(() => {

// })

onMounted(() => {
  // console.log(props.obj)
  const imgSrc = '../src/assets/img/'
  // const tmpObj = props.obj
  for (let i = 0; i < props.obj.img.length; i++) {
    imageList.push(imgSrc + props.obj.img[i])
  }
  console.log('imageList: ' + imageList)
})

</script>

<style lang="scss" scoped>
.mainArea {
  height: $hiMain;
}
</style>
