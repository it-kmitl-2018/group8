<template>
  <div class="ETaxInvoiceConfirm">
    <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
    <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
    <seller-confirm :sellerConfirmProp="seller"></seller-confirm>
    <recipient-confirm :recipientConfirmProp="recipient"></recipient-confirm>
    <document-recipient-confirm :documentRecipientConfirmProp="documentRecipient"></document-recipient-confirm>
    <payee-confirm :payeeConfirmProp="payee"></payee-confirm>
  </div>
</template>
<script>
import SellerConfirm from '@/components/confirm_pages/SellerConfirm.vue'
import SellerData from '@/data/Seller.data.js'
import RecipientConfirm from '@/components/confirm_pages/RecipientConfirm.vue'
import RecipientData from '@/data/Recipient.data.js'
import DocumentRecipientConfirm from '@/components/confirm_pages/DocumentRecipientConfirm.vue'
import DocumentRecipientData from '@/data/DocumentRecipient.data.js'
import PayeeConfirm from '@/components/confirm_pages/PayeeConfirm.vue'
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
    SellerConfirm,
    RecipientConfirm,
    DocumentRecipientConfirm,
    PayeeConfirm
  },
  methods: {
  }
}
</script>
