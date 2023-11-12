<script setup lang="ts">
import ContentLayout from '../../layouts/ContentLayout.vue'
import {client, clientList} from '../../../core/types/client.type'
import { TableColumnType } from 'ant-design-vue'
import {ref, Ref} from 'vue'
import router from '../../../resources/router'

const showStatusModal = ref(false)
const itemForChangeStatus = ref()

const data: Ref<clientList > = ref({
    data: [{id: 345, name: 'farnaz',  subscribeDate: '14/2/234',
    avgPeyment: 4843,
    orderCount: 3,
    customerValue: 3534,
    status: false,
    customerLable: 'راضی' }],
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
const RouteToDetail =(id:number)=>{
    console.log(id)
    router.push(`/client/details/${id}`)
}

const showChangeStatusModal = (status: boolean, id: number) => {
    itemForChangeStatus.value = {status, id}
    showStatusModal.value = !showStatusModal.value
}

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
        <a-table :columns="columns"  :data-source="data.data">
            <template #bodyCell="{ column, record }">
                <div v-if="column.key === 'customerLable' ">
                    <a-tag v-if="record.customerLable === 'ناراضی'" color="red"> {{record.customerLable}}</a-tag>
                    <a-tag v-else-if="record.customerLable === 'راضی'" color="green"> {{record.customerLable}}</a-tag>
                    <a-tag v-else > {{record.customerLable}}</a-tag>
                </div>
                <div v-if="column.key === 'status'">
                        <a-tag v-if="record.status === true" color="green"><span>فعال</span></a-tag>
                        <a-tag v-else color="red"><span>غیر فعال</span></a-tag>
                    </div>
<div v-if="column.key === 'actions'">
    <a-typography-text
                  class="cursor-pointer"
                  type="primary"
                  @click="showChangeStatusModal(record.status, record.id)"
                  >تغییر وضعیت</a-typography-text
                >
                <a class="mr-1">
                    <a-typography-text
                  class="cursor-pointer"
                  type="primary"
                  @click="RouteToDetail(record.id)"
                  >جزییات</a-typography-text
                >
                    
                </a>
</div>
        </template>
        </a-table>
    </template>
   
  </content-layout>
  <a-modal
          v-model:visible="showStatusModal"
          title="تغییر وضعیت مشتری"
        >
          <p>ایا از تغییر وضعیت مشتری به <span v-if="itemForChangeStatus.status">غیرفعال</span><span v-else>فعال</span> مطمین هستید؟</p>
         
          <template #footer>
          <a-button key="back">بستن</a-button>
            <a-button
              v-if="!itemForChangeStatus.status"
              type="primary"
              >فعال</a-button
            >
            <a-button v-else type="danger" 
              >غیرفعال</a-button
            >
            </template>
        </a-modal>
</template>

<style scoped>
.test {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>