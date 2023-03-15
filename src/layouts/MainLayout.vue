<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated id="titlebar">
      <q-toolbar class="glossy row justify-between"
      :class="$q.screen.lt.md ? 'q-px-xs' : 'q-px-md'">
        <div class="col-shrink">
          <q-btn
            size="lg"
            flat dense round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>

        <q-img width="180px" class="col-shrink"
          src="~/assets/brand/LOGO_EKIPAR_Texto_inv3.svg"
        />
        <div class="col-2 col-md-1">
          <q-page-sticky position="top-right"
          :offset="$q.screen.lt.md ? [4, -45] : [18, -42]">
            <q-img class="col-shrink"
              src="~/assets/brand/LOGO_EKIPAR_Cubo3shadow.svg"
              :width="$q.screen.lt.md ? '56px' : '64px'"
            />
          </q-page-sticky>
        </div>

      </q-toolbar>
    </q-header>

    <!-- //*  BARRA DE NAVEGAÇÃO LATERAL  *// -->
    <q-drawer show-if-above v-model="leftDrawerOpen"
    class="shadow-13 bg-grey-9">
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

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

      </q-list>
    </q-drawer>

    <!-- //*  CONTAINER DA PÁGINA PRINCIPAL  *// -->
    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import componentes from 'assets/lib/lista_comp'
import equipamentos from 'assets/lib/lista_equip'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () { leftDrawerOpen.value = !leftDrawerOpen.value }

</script>

<style lang="scss">
.navbar {
  background-color: $info;
}
.mainpage {
  background-color: $gray4;
}
</style>
