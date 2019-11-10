<template>
  <div>
    <q-page class="flex flex-center column">
      <div class="curved-text-wrapper">
        <ArchText class="curved-text">
          Lista completa para
        </ArchText>
      </div>
      <q-icon name="img:statics/icons/icons8-kitchenwares-96.png" size="96px"/>
      <h1 class="text-h6 text-center text-uppercase text-weight-bold text-primary">
        Chá de casa nova
      </h1>
    </q-page>
    <q-page class="q-mt-xl q-mb-xl">
      <div class="flex flex-wrap justify-around">
        <WishList v-for="(section, k) of lists" :key="k" v-bind="section"/>
      </div>
    </q-page>
  </div>
</template>

<script>
import ArchText from 'components/ArchText'
import WishList from 'components/WishList/WishList'

export default {
  name: 'PageIndex',
  components: { ArchText, WishList },
  data () {
    return {
      lists: [
        {
          icon: 'img:statics/icons/icons8-kitchen-64.png',
          title: 'Cozinha',
          items: [
            { name: 'Abridor de latas', checked: false },
            { name: 'Abridor de garrafas', checked: false },
            { name: 'Açucareiro', checked: true },
            { name: 'Afiador de facas', checked: false },
            { name: 'Assadeira', checked: false },
            { name: 'Avental', checked: undefined },
            { name: 'Bandejas', checked: false },
            { name: 'Batedor de ovos', checked: true },
            { name: 'Chaleira', checked: true },
            { name: 'Coador de café', checked: true },
            { name: 'Colher de sorvete', checked: true },
            { name: 'Colheres de silicone', checked: true },
            { name: 'Colheres de pau', checked: false },
            { name: 'Concha para molhos', checked: false },
            { name: 'Copo medidor', checked: false },
            { name: 'Cortador de pizza', checked: false },
            { name: 'Descanso de panela', checked: false },
            { name: 'Descascador de legumes', checked: false },
            { name: 'Escorredor de arroz', checked: false },
            { name: 'Escorredor de macarrão', checked: false },
            { name: 'Escorredor de louças', checked: false },
            { name: 'Escumadeira', checked: false },
            { name: 'Espremedor de alho', checked: false },
            { name: 'Forma de gelo', checked: false },
            { name: 'Frigideira', checked: false },
            { name: 'Lixeira para pia', checked: false },
            { name: 'Luva térmica', checked: false },
            { name: 'Jogo de panelas', checked: false },
            { name: 'Jogo de copos', checked: false },
            { name: 'Jogo de talheres', checked: false },
            { name: 'Jogo de xícaras', checked: false },
            { name: 'Paliteiro', checked: false },
            { name: 'Pegador de massas', checked: false },
            { name: 'Pegador de saladas', checked: false },
            { name: 'Petisqueira', checked: false },
            { name: 'Pincel culinário', checked: false },
            { name: 'Potes', checked: false },
            { name: 'Pratos', checked: false },
            { name: 'Pratos para sobremesa', checked: false },
            { name: 'Porta-guardanapos', checked: false },
            { name: 'Porta-temperos', checked: false },
            { name: 'Puxa saco', checked: false },
            { name: 'Ralador de queijos', checked: false },
            { name: 'Rodo para pia', checked: false },
            { name: 'Rolo de abrir massas', checked: false },
            { name: 'Saladeira', checked: false },
            { name: 'Saleiro e pimenteiro', checked: false },
            { name: 'Tábua para queijos', checked: false },
            { name: 'Tábua plástica', checked: false },
            { name: 'Tesoura de cozinha', checked: false }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.curved-text-wrapper {
  width: 24em;
  max-width: 90%;
  &>.curved-text {
    margin-bottom: -4em;
    path {
      fill: transparent;
    }

    text {
      fill: $primary;
      font-size: 2.8em;
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>
