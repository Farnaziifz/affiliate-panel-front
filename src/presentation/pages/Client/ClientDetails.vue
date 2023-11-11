<script lang="ts" setup>
import ContentLayout from '../../layouts/ContentLayout.vue'

import { ref } from 'vue';
const activeKey = ref('1');
</script>

<template>
    <ContentLayout place-return-button>
        <template #content-title>
            <p>جزییات مشتری</p>

        </template>

   <template #content-body>
    <a-tabs v-model:activeKey="activeKey" class="mr-1">
    <a-tab-pane key="1" tab="اطلاعات مشتری">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="کیف پول" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="سفارش ها">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="4" tab="پرداخت ها">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="5" tab="مشوق ها">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="6" tab="نظرات">Content of Tab Pane 3</a-tab-pane>
    <a-tab-pane key="7" tab="دسته بندی های عضو">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
   </template>
</ContentLayout>
</template>