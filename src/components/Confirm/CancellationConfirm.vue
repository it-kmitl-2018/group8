<template>
  <div class="CancellationConfirm">
    <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
    <h1>ใบยกเลิกอิเล็กทรอนิกส์</h1>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="ผู้ขาย">
          <seller-confirm :sellerConfirmProp="input.seller"></seller-confirm>
        </b-tab>
        <b-tab title="ผู้รับ">
          <recipient-confirm :recipientConfirmProp="input.recipient"></recipient-confirm>
        </b-tab>
        <b-tab title="ผู้รับเอกสาร">
          <document-recipient-confirm :documentRecipientConfirmProp="input.documentRecipient"></document-recipient-confirm>
        </b-tab>
        <b-tab title="ผู้รับชำระเงิน">
          <payee-confirm :payeeConfirmProp="input.payee"></payee-confirm>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-button variant="success">ยืนยัน</b-button>
    <router-link :to="{name: 'CancellationForm'}">
      <b-button variant="danger">ยกเลิก</b-button>
    </router-link>

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
      input: {
        seller: SellerData.data,
        recipient: RecipientData.data,
        documentRecipient: DocumentRecipientData.data,
        payee: PayeeData.data
      }
    }
  },
  components: {
    SellerConfirm,
    RecipientConfirm,
    DocumentRecipientConfirm,
    PayeeConfirm
  }
}
</script>
