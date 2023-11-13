<script setup lang="ts" >
import { TableColumnType } from 'ant-design-vue'
import {
  clientDetailOrder,
  clientDetailListOrder,
} from '../../../../core/types/Clientdetailorder.type'
import {ref, Ref} from 'vue'

const columnOrder: TableColumnType<clientDetailOrder>[] = [
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

const datacolorder: Ref<clientDetailListOrder> = ref({
  data: [
    { orderNumber: 'توسط کاربر', dateoforder: 'kinnin', amountmoney: 1565165 },
  ],
})
</script>

<template>
<div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >لیست سفارش ها</a-typography-title
            >
          </div>
          <a-table
            :columns="columnOrder"
            :data-source="datacolorder.data"
          ></a-table>
          <!--   -->
</template>