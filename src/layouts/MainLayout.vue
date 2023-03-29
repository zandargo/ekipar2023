<template>
  <q-layout view="hHh LpR fFf">
    <!-- //*  BARRA DE TÍTULO  *// -->
    <q-header id="titlebar" class="q-py-md"
    :class="$q.screen.lt.md ? 'q-px-sm' : 'q-px-xl'">
      <q-toolbar class="bg-dark-0 leaf-2 shadow-5 row"
      :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-md'">
        <div class="col-shrink">
          <q-btn
            v-if="$q.screen.lt.md"
            size="lg"
            flat dense round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>

        <div class="col-grow"></div>

        <q-img width="180px" class="col-shrink q-mx-lg"
          src="~/assets/brand/LOGO_EKIPAR_Texto_inv3.svg"
        />
        <div class="col-2 col-md-1">
          <q-page-sticky position="top-right"
          :offset="$q.screen.lt.md ? [12, -72] : [56, -76]">
            <q-img class="col-shrink"
              src="~/assets/brand/LOGO_EKIPAR_Cubo3shadow.svg"
              :width="$q.screen.lt.md ? '64px' : '80px'"
            />
          </q-page-sticky>
        </div>

      </q-toolbar>
    </q-header>

    <!-- //*  BARRA DE NAVEGAÇÃO LATERAL  *// -->
    <q-drawer v-model="leftDrawerOpen"
    class="q-py-md"
    :class="$q.screen.lt.md ? 'q-pl-sm' : 'q-pl-xl'"
    >
    <!-- behavior="desktop" -->
    <!-- :overlay="true" -->
      <q-list class="leaf-2r shadow-13 bg-dark-0 q-py-lg full-height">
        <q-scroll-area style="height: 100%;">

          <q-item-label header></q-item-label>

          <q-item class="text-white text-bold q-px-md">
            <q-item-section>
              COMPONENTES
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple dense
          class="text-white text-bold q-px-xl"
          v-for="item in componentes" :key="item.id">
            <q-item-section>
              {{ item.navlink }}
            </q-item-section>
          </q-item>

          <q-item class="text-white text-bold q-px-md">
            <q-item-section>
              EQUIPAMENTOS
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple dense
          class="text-white text-bold q-px-xl"
          v-for="item in equipamentos" :key="item.id">
            <q-item-section>
              {{ item.navlink }}
            </q-item-section>
          </q-item>
        </q-scroll-area>

      </q-list>
    </q-drawer>

    <!-- //*  CONTAINER DA PÁGINA PRINCIPAL  *// -->
    <q-page-container class="full-height">
      <q-page-sticky position="bottom-right" :offset="[0, 0]">
        <q-img class="bg-logo"
          src="~/assets/brand/LOGO_EKIPAR_CuboBG.svg"
          width="90vh" style="opacity: 0.1"
        />
      </q-page-sticky>
      <q-scroll-area style="height: 80vh;">
        <router-view />
      </q-scroll-area>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn round class="bg-wpp q-pa-sm shadow-5 oscilate-2">
          <q-img class=""
            src="~/assets/brand/whats.svg"
            :width="$q.screen.lt.md ? '24px' : '36px'"
          />
        </q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import componentes from 'assets/lib/lista_comp'
import equipamentos from 'assets/lib/lista_equip'

const leftDrawerOpen = ref(true)
function toggleLeftDrawer () { leftDrawerOpen.value = !leftDrawerOpen.value }

</script>

<style lang="scss">

.navbar {
  background-color: $info;
}
.mainpage {
  background-color: $gray4;
}
.bg-wpp {
  background-color: $wpp5;
}

</style>
