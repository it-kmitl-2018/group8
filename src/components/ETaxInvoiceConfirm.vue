<template>
  <div class="ETaxInvoiceConfirm">
    <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
    <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
    <seller-info-confirm :sellerConfirmProp="seller"></seller-info-confirm>
    <recipient-info-confirm :recipientConfirmProp="recipient"></recipient-info-confirm>
    <document-recipient-info-confirm :documentRecipientConfirmProp="documentRecipient"></document-recipient-info-confirm>
    <payee-info-confirm :payeeConfirmProp="payee"></payee-info-confirm>
  </div>
</template>
<script>
import SellerInfoConfirm from '@/components/confirm_pages/SellerInfoConfirm.vue'
import SellerData from '@/data/Seller.data.js'
import RecipientInfoConfirm from '@/components/confirm_pages/RecipientInfoConfirm.vue'
import RecipientData from '@/data/Recipient.data.js'
import DocumentRecipientInfoConfirm from '@/components/confirm_pages/DocumentRecipientInfoConfirm.vue'
import DocumentRecipientData from '@/data/DocumentRecipient.data.js'
import PayeeInfoConfirm from '@/components/confirm_pages/PayeeInfoConfirm.vue'
import PayeeData from '@/data/Payee.data.js'

export default {
  data () {
    return {
      buttonIsSubmitted: false,
      seller: SellerData.data,
      recipient: RecipientData.data,
      documentRecipient: DocumentRecipientData.data,
      payee: PayeeData.data
    }
  },
  components: {
    SellerInfoConfirm,
    RecipientInfoConfirm,
    DocumentRecipientInfoConfirm,
    PayeeInfoConfirm
  },
  methods: {
  }
}
</script>
