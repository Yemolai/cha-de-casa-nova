<template>
  <q-form>
    <div class="column">
      <q-input label="Email" v-model="form.email" type="email" />
      <q-input label="password" v-model="form.password" type="password" />
      <div class="row reverse">
        <q-btn @click="login()">
          Login
        </q-btn>
      </div>
    <hr>
    <div class="row justify-between items-center">
      <q-btn @click="() => social('google')" icon="google">Google</q-btn>
      <q-btn @click="() => social('twitter')" icon="twitter">Twitter</q-btn>
    </div>
    </div>
  </q-form>
</template>

<script>
import { QForm, QInput, QBtn } from 'quasar'

export default {
  name: 'LoginForm',
  components: { QForm, QInput, QBtn },
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login () {
      if (this.busy) return
      this.busy = true
      const { email, password } = this.form
      this.$services.auth.login(email, password)
        .catch(err => this.$q.dialog({ message: err.message }))
        .then(() => { this.busy = false })
    },
    social (network) {
      if (this.busy) return
      this.busy = true
      this.$services.auth.socialLogin(network)
        .catch(({ message }) => this.$q.dialog({ message }))
        .then(() => { this.busy = false })
    }
  }
}
</script>
