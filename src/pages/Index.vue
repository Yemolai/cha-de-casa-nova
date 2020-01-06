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
    <q-page class="flex justify-center row q-mt-xl q-mb-xl" id="wish-lists">
      <div v-masonry class="wish-lists-container">
        <WishList v-masonry-tile class="wish-list" v-for="(section, k) of lists" :key="k" v-bind="section"/>
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
  mounted () {
    this.loadLists()
  },
  computed: {
    lists () {
      return this.$store.getters['lists/all']
    }
  },
  methods: {
    async loadLists () {
      await this.$store.dispatch(`lists/load`)
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
.wish-lists-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  width: 75vw;
  &>.wish-list {
    flex-shrink: 1;
    max-width: 100%;
    min-width: 25em;
  }
}
</style>
