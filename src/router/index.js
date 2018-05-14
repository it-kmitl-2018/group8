import Vue from 'vue'
import Router from 'vue-router'
import ETaxInvoiceForm from '@/components/ETaxInvoiceForm'
import ETaxInvoiceConfirm from '@/components/ETaxInvoiceConfirm'
import EReceiptForm from '@/components/EReceiptForm'
import EReceiptConfirm from '@/components/EReceiptConfirm'
import InvoiceForm from '@/components/InvoiceForm'
import InvoiceConfirm from '@/components/InvoiceConfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/InvoiceForm',
      name: 'InvoiceForm',
      component: InvoiceForm
    },
    {
      path: '/InvoiceConfirm',
      name: 'InvoiceConfirm',
      component: InvoiceConfirm
    },
    {
      path: '/ETaxInvoiceForm',
      name: 'ETaxInvoiceForm',
      component: ETaxInvoiceForm
    },
    {
      path: '/ETaxInvoiceConfirm',
      name: 'ETaxInvoiceConfirm',
      component: ETaxInvoiceConfirm
    },
    {
      path: '/EReceiptForm',
      name: 'EReceiptForm',
      component: EReceiptForm
    },
    {
      path: '/EReceiptConfirm',
      name: 'EReceiptConfirm',
      component: EReceiptConfirm
    }
  ]
})
