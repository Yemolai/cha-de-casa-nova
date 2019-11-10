<template>
  <div>
    <q-page class="flex flex-center column">
      <ArchText class="curved-text">
        Lista completa para
      </ArchText>
      <q-icon name="img:statics/icons/icons8-kitchenwares-96.png" size="96px"/>
      <h1 class="text-h6 text-center text-uppercase text-weight-bold text-primary">
        Chá de casa nova
      </h1>
    </q-page>
    <q-page>
      <div class="flex flex-wrap justify-around">
        list here
      </div>
    </q-page>
  </div>
</template>

<script>
import ArchText from 'components/ArchText'

export default {
  name: 'PageIndex',
  components: { ArchText }
}
</script>

<style lang="scss">
.curved-text {
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
</style>
