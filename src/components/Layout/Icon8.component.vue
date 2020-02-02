<template>
  <q-icon
    :class="{ link }"
    @click="emit('click')"
    @dblclick="emit('dblclick')"
    @contextmenu="emit('contextmenu')"
    :size="size"
    :name="iconName"
  />
</template>

<script>
import { QIcon } from 'quasar'

const iconPath = 'statics/icons/'

const icons = [
  'account',
  'chef-hat',
  'conference',
  'double-bed',
  'face-smile',
  'gantt-chart',
  'id-not-verified',
  'kitchen',
  'kitchenwares',
  'ladle',
  'mixer',
  'mixer-96',
  'name',
  'pay-wall',
  'resume',
  'tea',
  'tick-box',
  'unavailable',
  'unchecked-checkbox'
]

export default {
  name: 'Icon8',
  components: { QIcon },
  props: {
    size: {
      type: String,
      default: '32px'
    },
    name: {
      type: String,
      required: true,
      enum: icons
    },
    to: {
      type: [String, Object]
    },
    link: Boolean
  },
  created () {
    if (this.to) {
      this.link = true
    }
  },
  computed: {
    iconName () {
      return `img:${iconPath}icons8-${this.name}.png`
    }
  },
  methods: {
    emit (...args) {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit(...args)
      }
    }
  }
}
</script>
<style>
.link {
  cursor: pointer;
}
</style>
