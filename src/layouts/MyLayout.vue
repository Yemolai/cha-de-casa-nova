<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon
            size="32px"
            name="img:statics/icons/icons8-ladle-80.png"
          />
        </q-toolbar-title>
        <div>
          User
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QIcon } from 'quasar'

export default {
  name: 'DefaultLayout',
  components: { QIcon },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
