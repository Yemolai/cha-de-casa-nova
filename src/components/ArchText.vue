<template>
  <svg class="arch-text" viewBox="0 0 500 160">
    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="500">
      <textPath xlink:href="#curve">
        <slot/>
      </textPath>
    </text>
  </svg>
</template>
<style lang="scss" scoped>
svg.arch-text {
  path {
    fill: transparent;
  }

  text {
    fill: $primary;
    font-size: 2.8em;
    font-weight: 600;
  }
}
</style>
