<template>
   <div class="DebitCreditForm">
      <br>
      <h1>ใบเพิ่ม/ลดอิเล็กทรอนิกส์</h1>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="ผู้ขาย">
            <seller-form :sellerFormProp="seller"></seller-form>
          </b-tab>
          <b-tab title="ผู้รับ">
            <recipient-form :recipientFormProp="recipient"></recipient-form>
          </b-tab>
          <b-tab title="ข้อมูลภาษี">
            <tax-invoice-form :taxInvoiceFormProp="taxInvoice"></tax-invoice-form>
          </b-tab>
          <b-tab title="ผู้รับเอกสาร">
            <document-recipient-form :documentRecipientFormProp="documentRecipient"></document-recipient-form>
          </b-tab>
          <b-tab title="ผู้รับชำระเงิน">
            <payee-form :payeeFormProp="payee"></payee-form>
          </b-tab>
        </b-tabs>
      </b-card>

      <router-link :to="{name: 'DebitCreditConfirm'}">
        <b-button variant="success">ยืนยัน</b-button>
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
