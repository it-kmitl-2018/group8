import Vue from 'vue'
import Router from 'vue-router'
import ETaxInvoiceForm from '@/components/Form/ETaxInvoiceForm'
import ETaxInvoiceConfirm from '@/components/Confirm/ETaxInvoiceConfirm'
import EReceiptForm from '@/components/Form/EReceiptForm'
import EReceiptConfirm from '@/components/Confirm/EReceiptConfirm'
import InvoiceForm from '@/components/Form/InvoiceForm'
import InvoiceConfirm from '@/components/Confirm/InvoiceConfirm'
import DebitCreditForm from '@/components/Form/DebitCreditForm'
import DebitCreditConfirm from '@/components/Confirm/DebitCreditConfirm'
import CancellationForm from '@/components/Form/CancellationForm'
import CancellationConfirm from '@/components/Confirm/CancellationConfirm'
import ShortTaxForm from '@/components/Form/ShortTaxForm'
import ShortTaxConfirm from '@/components/Confirm/ShortTaxConfirm'

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
    },
    {
      path: '/DebitCreditForm',
      name: 'DebitCreditForm',
      component: DebitCreditForm
    },
    {
      path: '/DebitCreditConfirm',
      name: 'DebitCreditConfirm',
      component: DebitCreditConfirm
    },
    {
      path: '/CancellationForm',
      name: 'CancellationForm',
      component: CancellationForm
    },
    {
      path: '/CancellationConfirm',
      name: 'CancellationConfirm',
      component: CancellationConfirm
    },
    {
      path: '/ShortTaxForm',
      name: 'ShortTaxForm',
      component: ShortTaxForm
    },
    {
      path: '/ShortTaxConfirm',
      name: 'ShortTaxConfirm',
      component: ShortTaxConfirm
    }
  ]
})
