<template>
  <q-layout view="hHh Lpr fFf">
    <topbar/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Topbar from 'components/Layout/Topbar.component'

export default {
  name: 'Auth.layout',
  components: { Topbar }
}
</script>
