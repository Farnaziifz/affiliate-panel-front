<script lang="ts" setup>
import ArrowRight from '../atoms/ArrowRight.vue';
</script>

<template>
  <div id="return-button" class="flex items-center">
    <slot name="return-button-icon">
      <arrow-right />
    </slot>

    <slot name="return-button-text">
      <span style="margin: 0 10px">
       بازگشت
      </span>
    </slot>
  </div>
</template>

<style lang="scss">
#return-button {
  &:hover {
    cursor: pointer;
  }
}
</style>
