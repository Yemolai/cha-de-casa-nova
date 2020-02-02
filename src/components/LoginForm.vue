<template>
  <q-card class="q-pa-md" style="min-width: 24rem">
    <q-card-section>
      <h2 class="text-h6 text-dark Quicksand">
        Hi, welcome back
      </h2>
    </q-card-section>
    <q-card-section>
      <q-form>
        <div class="column">
          <q-input label="Email" v-model="form.email" type="email" />
          <q-input label="Password" v-model="form.password" type="password" />
          <div class="row reverse justify-between q-py-md">
            <q-btn unelevated @click="login" color="primary">
              Sign in
            </q-btn>
            <q-btn flat color="secondary">
              Register
            </q-btn>
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions class="column q-mt-md">
      <div class="row justify-center">
        <span class="text-subtitle1 Quicksand text-dark">
          Or login with
        </span>
      </div>
      <div class="row justify-around items-center q-mt-md">
        <q-btn
          class="q-mr-sm"
          color="red-4"
          @click="() => social('google')"
          icon="fab fa-google"
          no-caps
          flat>
          Google
        </q-btn>
        <q-btn
          class="q-ml-sm"
          color="blue-4"
          @click="() => social('twitter')"
          icon="fab fa-twitter"
          no-caps
          flat>
          Twitter
        </q-btn>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import { QForm, QInput, QBtn, QSeparator, QCard, QCardSection, QCardActions } from 'quasar'

export default {
  name: 'LoginForm',
  components: { QForm, QInput, QBtn, QSeparator, QCard, QCardSection, QCardActions },
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
