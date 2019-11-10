<template>
  <div>
    <q-page class="flex flex-center column">
      <svg class="curved-text" viewBox="0 0 500 160">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text width="500">
          <textPath xlink:href="#curve">
            Lista completa para
          </textPath>
        </text>
      </svg>
      <q-icon name="img:statics/icons/icons8-kitchenwares-96.png" size="96px"/>
      <h1 class="text-h6 text-center text-uppercase text-weight-bold text-primary">
        Chá de casa nova
      </h1>
    </q-page>
    <q-page>
      <div class="flex flex-wrap justify-around">

      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
svg.curved-text {
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
