<template>
  <div class="wish-list-wrapper">
    <div class="title">
      <q-icon class="icon" :name="icon" size="64px"/>
      <span class="text">{{ title }}</span>
    </div>
    <ul class="wish-list">
      <WishListItem
        class="wish-list-item"
        v-for="(item, k) in items"
        :key="`${rndId}-${k}`"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import WishListItem from './WishListItem'

export default {
  name: 'WishList',
  components: { WishListItem },
  props: {
    icon: String,
    title: String,
    items: Array
  },
  data () {
    const rndId = Math.random().toString(36).slice(2)
    return {
      rndId
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../css/mixins.scss';

.wish-list-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &>.title {
    vertical-align: bottom;
    .icon {
      margin-bottom: 0.2em;
      margin-right: 0.2em;
    }
    .text {
      @include title-font();
      font-size: 3em;
      color: $accent;
      vertical-align: bottom;
    }
  }
  &>.wish-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
