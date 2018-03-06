import Vue from 'vue'
import Router from 'vue-router'
import invoiceForm from '@/components/invoiceForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/invoiceForm',
      name: 'invoiceForm',
      component: invoiceForm
    }
  ]
})
