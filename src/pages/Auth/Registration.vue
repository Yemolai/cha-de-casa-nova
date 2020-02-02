<template>
  <q-page class="flex items-center justify-center" padding>
    <user-sign-up />
  </q-page>
</template>

<script>
import UserSignUp from 'components/Forms/UserSignUp.component.vue'

export default {
  name: 'Auth.Registration.page',
  components: { UserSignUp }
}
</script>
