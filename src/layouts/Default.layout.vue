<template>
  <q-layout view="lHh Lpr lFf">
    <topbar/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Topbar from 'components/Layout/Topbar.component.vue'

export default {
  name: 'DefaultLayout',
  components: { Topbar },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
