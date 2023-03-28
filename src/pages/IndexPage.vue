<template>
  <q-page class="flex flex-center">
    <img class="oscilate-1" src="~/assets/brand/LOGO_EKIPAR_Cubo3.svg" alt="" width="120" height="120">
    <div class="column q-gutter-y-lg items-center q-pa-lg">

      <q-card class="leaf-2">
        <!-- <q-card-section class="bg-grey-9 text-white q-py-xs glossy">
          <div class="text-h6 text-caps">A Empresa</div>
        </q-card-section> -->
        <q-card-section class="text-justify q-gutter-md">
          <div class="">A <strong>Ekipar – Engenharia de Processos Químicos</strong>, trabalha no desenvolvimento de equipamentos destinados a pesquisas e produção em pequena escala.
          </div>
          <div><strong>Somos</strong> uma empresa que tem como foco a produção mais limpa. <strong>Desenvolvemos</strong> produtos que estejam adequados aos mais rigorosos padrões de Engenharia. <strong>Trabalhamos</strong> no desenvolvimento de plantas pilotos que sejam adequadas as necessidades de cada pesquisador ou produtor.
          </div>
          <div>Nossas plantas didáticas possuem os <strong>menores preços</strong> de mercado. São equipamentos que <strong>seguem as normas nacionais e internacionais</strong> de engenharia.
          </div>
          <div><strong>Possuímos</strong> o ideal de integração, ou seja: <strong>"para formar um profissional na área técnica, necessitamos integrar o conhecimento"</strong>.
          </div>
          <div>Assim, nossas unidades são capazes de transmitir o sentimento de sistemas industrializados. <strong>Equipamentos mais próximos do que acontecem no mundo real</strong>.
          </div>
        </q-card-section>
      </q-card>

      <q-card class="leaf-2 full-width">
        <q-card-section class="q-py-md">
          <box-title title="Clientes e Parceiros"/>
        </q-card-section>

        <q-card-section class="">

          <SlideCarousel />

        </q-card-section>
      </q-card>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SlideCarousel from 'src/components/SlideCarousel.vue'
import BoxTitle from 'src/components/BoxTitle.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    SlideCarousel,
    BoxTitle
  }
})
</script>
