<script lang="ts" setup>
import {
  clientDetailListPay,
  clientPay,
  clientPay2,
  clientDetailListPay2,
  clientPay3,
  clientDetailListPay3,
  clientPay4,
  clientDetailListPay4,
} from '../../../../core/types/ClientPay.type'
import { TableColumnType } from 'ant-design-vue'
import { Ref, ref } from 'vue'

const columns: TableColumnType<clientPay>[] = [
  {
    title: 'نح.ه ی دریافت',
    key: 'HowToGet',
    dataIndex: 'HowToGet',
  },
  {
    title: 'مقدار',
    key: 'count',
    dataIndex: 'count',
  },
  {
    title: 'تاریخ دریافت امتیاز',
    key: 'dateOfCatch',
    dataIndex: 'dateOfCatch',
  },
  {
    title: 'میزان امتیاز',
    key: 'score',
    dataIndex: 'score',
  },
]
const columns2: TableColumnType<clientPay2>[] = [
  {
    title: 'عنوان جایزه',
    key: 'TitleScore',
    dataIndex: 'TitleScore',
  },
  {
    title: 'نوع جایزه',
    key: 'TypeOfScore',
    dataIndex: 'TypeOfScore',
  },
  {
    title: 'مقدار جایزه',
    key: 'CountOfScore',
    dataIndex: 'CountOfScore',
  },
  {
    title: 'تاربخ دریافت جایزه',
    key: 'DateOfScore',
    dataIndex: 'DateOfScore',
  },
  {
    title: 'میزان امتیاز مصرف شده',
    key: 'LevelOfScore',
    dataIndex: 'LevelOfScore',
  },
]
const columns3: TableColumnType<clientPay3>[] = [
  {
    title: 'عنوان جایزه',
    key: 'CreditAmount',
    dataIndex: 'CreditAmount',
  },
  {
    title: 'نوع جایزه',
    key: 'TimeOfAmount',
    dataIndex: 'TimeOfAmount',
  },
  {
    title: 'مقدار جایزه',
    key: 'Period',
    dataIndex: 'Period',
  },
  {
    title: 'تاربخ دریافت جایزه',
    key: 'PeriodOfUse',
    dataIndex: 'PeriodOfUse',
  },
]
const columns4: TableColumnType<clientPay4>[] = [
  {
    title: 'عنوان تخفیف و کدتخفیف',
    key: 'TitleOfDiscountAndCode',
    dataIndex: 'TitleOfDiscountAndCode',
  },
  {
    title: 'تنظیمات کدنخفیف',
    key: 'SettingsOfCode',
    dataIndex: 'SettingsOfCode',
  },
  {
    title: 'وضعیت تخفیف',
    key: 'StatusOfDiscount',
    dataIndex: 'StatusOfDiscount',
  },
  {
    title: 'مدت مصرف',
    key: 'PeriodOfUse',
    dataIndex: 'PeriodOfUse',
  },
]

const datacol: Ref<clientDetailListPay> = ref({
  data: [
    { HowToGet: '1', count: 'توسط کاربر', dateOfCatch: 554, score: 'sknfn' },
    { HowToGet: '2', count: 'کش بک', dateOfCatch: 54, score: 'sknfn' },
    { HowToGet: '3', count: 'هدیه اعتباری', dateOfCatch: 55, score: 'sknfn' },
    { HowToGet: '4', count: 'کوپن', dateOfCatch: 55, score: 'sknfn' },
  ],
})
const datacol2: Ref<clientDetailListPay2> = ref({
  data: [
    {
      TitleScore: '1',
      TypeOfScore: 'توسط کاربر',
      CountOfScore: 554,
      DateOfScore: 'sknfn',
      LevelOfScore: 'kfldnbjnt',
    },
  ],
})
const datacol3: Ref<clientDetailListPay3> = ref({
  data: [
    {
      CreditAmount: '1',
      TimeOfAmount: 'توسط کاربر',
      Period: 554,
      PeriodOfUse: 'sknfn',
    },
  ],
})
const datacol4: Ref<clientDetailListPay4> = ref({
  data: [
    {
      TitleOfDiscountAndCode: '1',
      SettingsOfCode: 'توسط کاربر',
      StatusOfDiscount: "استفاده شده",
      PeriodOfUse: 'sknfn',
    },
  ],
})
</script>

<template>
  <a-tabs v-model:activeKey="activeKey" class="mr-1">
    <a-tab-pane key="1" tab="امتیاز های دریافتی">
      <a-table :columns="columns" :data-source="datacol.data"> </a-table>
    </a-tab-pane>
    <a-tab-pane key="2" tab="جایزه">
      <a-table :columns="columns2" :data-source="datacol2.data"> </a-table>
    </a-tab-pane>
    <a-tab-pane key="3" tab="هدیه ی اعتباری">
      <a-table :columns="columns3" :data-source="datacol3.data"> </a-table>
    </a-tab-pane>
    <a-tab-pane key="4" tab="کد تخفیف">
      <a-table :columns="columns4" :data-source="datacol4.data">
        <template #bodyCell="{ column ,record}">
          <div v-if="column.key === 'SettingsOfCode'">
            <a-tag color="blue">تومانی</a-tag>
            <a-tag color="blue"> پلکانی</a-tag>
            <a-tag color="blue"> چندبارمصرف</a-tag>
          </div>
          <div v-if="column.key === 'StatusOfDiscount'">
            <a-tag v-if="record.StatusOfDiscount==='استفاده شده'" color="green">{{record.StatusOfDiscount}}</a-tag>
            <a-tag v-else-if="record.StatusOfDiscount === '1 مرتبه استفاده شده'" color="orange"> {{record.StatusOfDiscount}}</a-tag>
            <a-tag v-else color="red"> </a-tag>
          </div>
        </template>
      </a-table>
    </a-tab-pane>
    <a-tab-pane key="5" tab="کش بک"></a-tab-pane>
    <a-tab-pane key="6" tab="کوپن"></a-tab-pane>
  </a-tabs>
</template>
