<script setup lang="ts">
import {
  clientDetailList,
  clientDetail,
} from '../../../../core/types/ClientDetail.type'
import { TableColumnType } from 'ant-design-vue'
import {Ref, ref} from 'vue'

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

const datacol: Ref<clientDetailList> = ref({
  data: [
    { id: 1, chargingwallet: 'توسط کاربر', count: 554 },
    { id: 2, chargingwallet: 'کش بک', count: 54 },
    { id: 3, chargingwallet: 'هدیه اعتباری', count: 55 },
    { id: 4, chargingwallet: 'کوپن', count: 55 },
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
          <div>
            api calll
            </div>
          <a-table :columns="columns" :data-source="datacol.data"> </a-table>
</template>