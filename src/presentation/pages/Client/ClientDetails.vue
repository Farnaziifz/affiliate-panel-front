<script lang="ts" setup>
import ContentLayout from '../../layouts/ContentLayout.vue'
import {
  clientDetailList,
  clientDetail,
} from '../../../core/types/ClientDetail.type'
import {
  clientDetailOrder,
  clientDetailListOrder,
} from '../../../core/types/Clientdetailorder.type'
import { TableColumnType } from 'ant-design-vue'
import { ref, Ref } from 'vue'
const activeKey = ref('1')
const showStatusModal = ref(false)
const itemForChangeStatus = ref()
const datacol: Ref<clientDetailList> = ref({
  data: [
    { id: 1, chargingwallet: 'توسط کاربر', count: 554 },
    { id: 2, chargingwallet: 'کش بک', count: 54 },
    { id: 3, chargingwallet: 'هدیه اعتباری', count: 55 },
    { id: 4, chargingwallet: 'کوپن', count: 55 },
  ],
})
const datacolorder: Ref<clientDetailListOrder> = ref({
  data: [
    { orderNumber: 'توسط کاربر', dateoforder: 'kinnin', amountmoney: 1565165 },
  ],
})
const columnorder: TableColumnType<clientDetailOrder>[] = [
  {
    title: 'شماره سفارش',
    key: 'orderNumber',
    dataIndex: 'orderNumber',
  },
  {
    title: 'تاریخ ثبت سفارش',
    key: 'dateoforder',
    dataIndex: 'dateoforder',
  },
  {
    title: 'مبلغ پرداختی',
    key: 'amountmoney',
    dataIndex: 'amountmoney',
  },
]

const columns: TableColumnType<clientDetail>[] = [
  {
    title: 'نحوه ی شارژ کیف پول',
    key: 'chargingwallet',
    dataIndex: 'chargingwallet',
  },
  {
    title: 'مقدار',
    key: 'count',
    dataIndex: 'count',
  },
]

const changestatus = (status: boolean, id: number) => {
  showStatusModal.value = !showStatusModal.value
  itemForChangeStatus.value = { status, id }
}
</script>

<template>
  <ContentLayout place-return-button>
    <template #content-title>
      <p>جزییات مشتری</p>
      <a-space wrap>
        <a-button type="primary" @click="changestatus(data.status, data.id)"
          >تغییر وضعیت</a-button
        >
        <a-tag color="green"><span>فعال</span></a-tag>
      </a-space>
    </template>
    <template #content-body>
      <a-tabs v-model:activeKey="activeKey" class="mr-1">
        <a-tab-pane key="1" tab="اطلاعات مشتری">
          <div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >اطلاعات مشتری</a-typography-title
            >
          </div>
          <div></div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="کیف پول" force-render>
          <div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >کیف پول</a-typography-title
            >
          </div>
          <div>
            <a-typography-text disabled>موجودی</a-typography-text>
          </div>
          <div>/*async</div>
          <a-table :columns="columns" :data-source="datacol.data"> </a-table>
        </a-tab-pane>
        <a-tab-pane key="3" tab="سفارش ها">
          <div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >لیست سفارش ها</a-typography-title
            >
          </div>
          <a-table
            :columnorder="columnorder"
            :data-source="datacolorder.data"
          ></a-table>
        </a-tab-pane>
        <a-tab-pane key="4" tab="پرداخت ها">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="5" tab="مشوق ها">Content of Tab Pane 3</a-tab-pane>
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
