<template>
  <li class="wish-list-item">
    <div class="box" @input="$emit('input', !item.checked)">
      <q-icon
        key="checkbox"
        v-if="item.checked === true"
        name="img:statics/icons/icons8-tick-box-64.png"
        size="32px"
      />
      <q-icon
        key="checkbox"
        v-else-if="item.checked === false"
        name="img:statics/icons/icons8-unchecked-checkbox-64.png"
        size="32px"
      />
      <q-icon
        key="checkbox"
        v-else
        name="img:statics/icons/icons8-unavailable-64.png"
        size="32px"
      />
      <input :value="item.checked" type="checkbox" />
    </div>
    <div class="text">
      {{ item.name }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'WishListItem',
  props: {
    item: Object
  }
}
</script>

<style lang="scss">
@import '../../css/mixins.scss';

li.wish-list-item {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  .box {
    margin-left: -0.8em;
    margin-right: 0.8em;
    input[type=checkbox] {
      display: none;
    }
  }
  .text {
    @include section-font();
    font-size: 2em;
    color: $primary;
  }
}
</style>
