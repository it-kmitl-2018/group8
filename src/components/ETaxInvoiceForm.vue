<template>
   <div class="ETaxInvoiceForm">
      <br>
      <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
      <seller-info-form :sellerFormProp="seller"></seller-info-form>
      <recipient-info-form :recipientFormProp="recipient"></recipient-info-form>
      <document-recipient-info-form :documentRecipientFormProp="documentRecipient"></document-recipient-info-form>
      <payee-info-form :payeeFormProp="payee"></payee-info-form>
      <router-link :to="{name: 'ETaxInvoiceConfirm'}">
        <button> ส่งข้อมูล </button>
      </router-link>
   </div>
</template>
<script>
import SellerInfoForm from '@/components/form_pages/SellerInfoForm.vue'
import SellerData from '@/data/Seller.data.js'
import RecipientInfoForm from '@/components/form_pages/RecipientInfoForm.vue'
import RecipientData from '@/data/Recipient.data.js'
import DocumentRecipientInfoForm from '@/components/form_pages/DocumentRecipientInfoForm.vue'
import DocumentRecipientData from '@/data/DocumentRecipient.data.js'
import PayeeInfoForm from '@/components/form_pages/PayeeInfoForm.vue'
import PayeeData from '@/data/Payee.data.js'

export default {
  data () {
    return {
      seller: SellerData.data,
      recipient: RecipientData.data,
      documentRecipient: DocumentRecipientData.data,
      payee: PayeeData.data
    }
  },
  components: {
    SellerInfoForm,
    RecipientInfoForm,
    DocumentRecipientInfoForm,
    PayeeInfoForm
  },
  methods: {
  }
}
</script>
