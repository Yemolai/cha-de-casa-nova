<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>
        <icon8 name="ladle" link to="/" />
      </q-toolbar-title>
      <icon8 name="name" link to="/auth" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { QHeader, QToolbar, QToolbarTitle } from 'quasar'
import Icon8 from './Icon8.component'

export default {
  name: 'Topbar',
  components: { QHeader, QToolbar, QToolbarTitle, Icon8 }
}
</script>
