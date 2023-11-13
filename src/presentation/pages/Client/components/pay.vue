<script lang="ts" setup>
import {clientDetailListPay,clientPay} from '../../../../core/types/ClientPay.type'
import { TableColumnType } from 'ant-design-vue'
import {Ref, ref} from 'vue'

const columns: TableColumnType<clientPay>[] = [
  {
    title: 'پرداختی ها',
    key: 'pays',
    dataIndex: 'pays',
  },
  {
    title: 'تاریخ پرداخت',
    key: 'dateofpay',
    dataIndex: 'dateofpay',
  },
  {
    title: 'وضعیت سفارش',
    key: 'orderstatus',
    dataIndex: 'orderstatus',
  },
  {
    title: 'مبلغ پرداختی',
    key: 'numberofpay',
    dataIndex: 'numberofpay',
  },
]

const datacol: Ref<clientDetailListPay> = ref({
  data: [
    { pays: "1", dateofpay: 'توسط کاربر', orderstatus: 554  ,numberofpay:'sknfn'},
    { pays: "2", dateofpay: 'کش بک', orderstatus: 54 ,numberofpay:'sknfn' },
    { pays: "3", dateofpay: 'هدیه اعتباری', orderstatus: 55  ,numberofpay:'sknfn'},
    { pays: "4", dateofpay: 'کوپن', orderstatus: 55 ,numberofpay:'sknfn' },
  ],
})
</script>

<template >
    <div>
            <a-typography-title :level="4" class="mr-2 mb-1"
              >کیف پول</a-typography-title
            >
          </div>
          <div>
            <a-typography-text disabled>موجودی</a-typography-text>
          </div>
        
          <a-table :columns="columns" :data-source="datacol.data"> </a-table>
</template>
