<script setup lang="ts">
import ContentLayout from '../../layouts/ContentLayout.vue'
</script>

<template>
  <content-layout >
      <template #content-title>
          <div class="test">
              <p>list moshtarian</p>
              <a-button>salam</a-button>
          </div>
      </template>
    <template #content-body>
        <a-table></a-table>
    </template>
  </content-layout>
</template>

<style scoped>
.test {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>