<script lang="ts" setup>

import ContentLayout from '../../layouts/ContentLayout.vue'
import { ref } from 'vue'
import Wallet from './components/wallet.vue'
import Orders from './components/orders.vue'
import Pay from './components/pay.vue'
import Encouragers from './components/encouragers.vue'

const activeKey = ref('1')
const showStatusModal = ref(false)
const itemForChangeStatus = ref()

const changestatus = (status: boolean, id: number) => {
  showStatusModal.value = !showStatusModal.value
  itemForChangeStatus.value = { status, id }
}
</script>

<template>
  <ContentLayout place-return-button>
    <template #content-title>
      <p>جزییات مشتری</p>
     
    </template>
    <template #content-actions>
  
       <div class="d-flex w-full">
        <a-button type="primary" class="ml-2" @click="changestatus(data.status, data.id)"
          >تغییر وضعیت</a-button
        >
        <a-tag color="green" ><span>فعال</span></a-tag>
       </div>
    </template>

    <template #content-body>
      <a-tabs v-model:activeKey="activeKey" class="mr-1">
        <a-tab-pane key="1" tab="اطلاعات مشتری">
          <div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >اطلاعات مشتری</a-typography-title
            >
          </div>
          <div class="grid grid-cols-4 gap-4">
           <div>01</div>
  <!-- ... -->
           <div>09</div>
         </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="کیف پول" force-render>
          <Wallet />
        </a-tab-pane>
        <a-tab-pane key="3" tab="سفارش ها">
          <Orders />
        </a-tab-pane>
        <a-tab-pane key="4" tab="پرداخت ها">
            <Pay/>
        </a-tab-pane>
        <a-tab-pane key="5" tab="مشوق ها">
            <a-typography-title :level="4" class="mr-2 mb-1"
              >مشوق ها</a-typography-title
            >
            <Encouragers/>
        </a-tab-pane>
        <a-tab-pane key="6" tab="نظرات">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="7" tab="دسته بندی های عضو"
          >Content of Tab Pane 3</a-tab-pane
        >
      </a-tabs>
    </template>
  </ContentLayout>
  <a-modal v-model:visible="showStatusModal" title="تغییر وضعیت مشتری">
    <p>
      ایا از تغییر وضعیت مشتری به
      <span v-if="itemForChangeStatus.status">غیرفعال</span
      ><span v-else>فعال</span> مطمین هستید؟
    </p>

    <template #footer>
      <a-button key="back">بستن</a-button>
      <a-button v-if="!itemForChangeStatus.status" type="primary"
        >فعال</a-button
      >
      <a-button v-else type="danger">غیرفعال</a-button>
    </template>
  </a-modal>
</template>

<style scoped></style>
