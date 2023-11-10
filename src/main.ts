import './style.css'
import App from './Main.vue'
import { createApp } from 'vue'
import store from './resources/store'
import 'ant-design-vue/dist/antd.less'
import router from './resources/router'
import { toPersianCurrency } from './logics/shared/toPersianCurrency'
import { toPersianDate } from './logics/shared/toPersianDate'



const app = createApp(App).use(store).use(router)

app.config.globalProperties.$filters = {
  toPersianCurrency,
  toPersianDate,
}

// TODO => apply this code to seprate file
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: {
      toPersianCurrency: (number: number, symbol: string | null) => string
      toPersianDate: (date: string) => string
    }
  }
}

app.mount('#app')
