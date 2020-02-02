<template>
  <q-page class="flex items-center justify-center" padding>
    <login-form />
  </q-page>
</template>

<script>
import LoginForm from 'components/LoginForm.vue'

export default {
  name: 'Auth.Authentication.page',
  components: { LoginForm }
}
</script>
