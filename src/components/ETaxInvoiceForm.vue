<template>
   <div class="ETaxInvoiceForm">
      <br>
      <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
      <seller-form :sellerFormProp="seller"></seller-form>
      <recipient-form :recipientFormProp="recipient"></recipient-form>
      <tax-invoice-form :taxInvoiceFormProp="taxInvoice"></tax-invoice-form>
      <document-recipient-form :documentRecipientFormProp="documentRecipient"></document-recipient-form>
      <payee-form :payeeFormProp="payee"></payee-form>
      <router-link :to="{name: 'ETaxInvoiceConfirm'}">
        <button> ส่งข้อมูล </button>
      </router-link>
   </div>
</template>
<script>
import SellerForm from '@/components/form_pages/SellerForm.vue'
import SellerData from '@/data/Seller.data.js'
import RecipientForm from '@/components/form_pages/RecipientForm.vue'
import RecipientData from '@/data/Recipient.data.js'
import TaxInvoiceForm from '@/components/form_pages/TaxInvoiceForm.vue'
import TaxInvoiceData from '@/data/TaxInvoice.data.js'
import DocumentRecipientForm from '@/components/form_pages/DocumentRecipientForm.vue'
import DocumentRecipientData from '@/data/DocumentRecipient.data.js'
import PayeeForm from '@/components/form_pages/PayeeForm.vue'
import PayeeData from '@/data/Payee.data.js'

export default {
  data () {
    return {
      seller: SellerData.data,
      recipient: RecipientData.data,
      taxInvoice: TaxInvoiceData.data,
      documentRecipient: DocumentRecipientData.data,
      payee: PayeeData.data
    }
  },
  components: {
    SellerForm,
    RecipientForm,
    TaxInvoiceForm,
    DocumentRecipientForm,
    PayeeForm
  },
  methods: {
  }
}
</script>
