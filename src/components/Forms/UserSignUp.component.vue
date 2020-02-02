<template>
  <q-card>
    <q-card-section class="q-py-sm">
      <h2 class="text-h6 Quicksand text-dark">
        Oh, please. Tell us more about you!
      </h2>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-input
            hide-hint
            label="Full Name"
            hint="your fully legal complete and whole (holy?) name"
            v-model="form.name"
            type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-select
            hide-hint
            multiple
            :readonly="!form.name"
            :options="names"
            v-model="form.preferredName"
            label="Preferred name"
            hint="That's all on you" />
        </div>
        <div class="col" v-if="goesByOtherName">
          <q-input hide-hint label="You go by" hint="Give us the name, Wachowsky!" v-model="form.goesBy" />
        </div>
        <div class="col">
          <q-select hide-hint :options="restrictions" label="Restrictions" multiple hint="So we can serve you better" v-model="form.restrictions" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input hide-hint label="Email" hint="we won't spam, promise 🤞" v-model="form.email" type="email" />
        </div>
        <div class="col-4">
          <q-input hide-hint label="Mobile number" type="tel" v-model="form.phone" hint="Fo da bootycalls 🌚" mask="(##) #####-####" unmasked-value />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input hide-hint label="Password" hint="use that one no one knows" v-model="form.password" type="password" />
        </div>
        <div class="col">
          <q-input hide-hint label="Repeat the password" hint="rinse, repeat, exactly" v-model="form.passwordConfirmation" type="password" />
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <q-input hide-hint label="Birthday" hint="Don't you wanna gift cards?" stack-label type="date" v-model="form.birthday" />
        </div>
        <div class="col-3">
          <q-select
            hide-hint
            :options="states"
            v-model="form.state"
            label="State"
            hint="not of the mind" />
        </div>
        <div class="col-4">
          <q-select
            hide-hint
            :options="cities"
            :readonly="!form.state"
            v-model="form.city"
            label="City"
            hint="So we can plan to visit" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { startCase } from 'lodash'
import { QCard, QCardSection, QInput, QSelect } from 'quasar'

const otherName = { value: 'other', label: 'Another' }

const restrictionList = [
  'lactose-intolerant',
  'vegan',
  'vegetarian',
  'no-alcohol',
  'no-beer',
  'no-fruits',
  'no-vegs'
]

export default {
  name: 'UserSignUp',
  components: { QCard, QCardSection, QInput, QSelect },
  created () {
    this.$services.locations.getUFs()
      .then(UFs => { this.states = UFs })
  },
  data () {
    const restrictions = restrictionList.slice(0).sort()
      .map(value => ({ value, label: startCase(value) }))
    return {
      restrictions,
      states: [],
      form: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    names () {
      const { name: fullName = '' } = this.form
      const names = fullName.length ? this.form.name.split(' ') : []
      const options = names
        .filter(name => `${name}`.charAt(0).toUpperCase() === `${name}`.charAt(0))
        .map((name, idx) => ({ value: idx, label: name }))
      const list = [ ...options, otherName ]
      return list
    },
    goesByOtherName () {
      return this.preferredName && this.preferredName.value === 'other'
    }
  }
}
</script>
