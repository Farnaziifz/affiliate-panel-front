<script setup lang="ts">
import ContentLayout from '../../layouts/ContentLayout.vue'
import {client, clientList} from '../../../core/types/client.type'
import { TableColumnType } from 'ant-design-vue'
import {ref, Ref} from 'vue'

const data: Ref<clientList > = ref({
    data: [{id: 1, name: 'farnaz',  subscribeDate: '14/2/234',
    avgPeyment: 4843,
    orderCount: 3,
    customerValue: 3534,
    status: true,
    customerLable: 'ناراضی' }],
    totalPage: 3,
    pageNumber:1 
})

const columns: TableColumnType<client>[] = [
    {
    title: 'مشتری',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'تاریخ عضویت',
    key: 'subscribeDate',
    dataIndex: 'subscribeDate',
  },
  {
    title: 'میانگین پرداختی',
    dataIndex: 'avgPeyment',
    key: 'avgPeyment',
  },
  {
    title: 'تعداد سفارش',
    dataIndex: 'orderCount',
    key: 'orderCount',
  },
  {
    title: 'ارزش مشتری',
    dataIndex: 'customerValue',
    key: 'customerValue',
  },
  {
    title: 'برچسب مشتری',
    dataIndex: 'customerLable',
    key: 'customerLable',
  },
  {
    title: 'وضعیت',
    dataIndex: 'status',
    key: 'status',
  },

  {
    title: 'عملیات',
    dataIndex: 'actions',
    key: 'actions',
  },
]
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
        <a-table :columns="columns"  :data-source="data.data"></a-table>
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