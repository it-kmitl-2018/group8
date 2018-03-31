<template>
   <div class="ETaxInvoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
       <seller-info-form :sellerInfoForm="seller"></seller-info-form>
       <recipient-info-form :recipientInfoForm="recipient"></recipient-info-form>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
        <!--Guideline Specified CI Document Context Parameter -->
        <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
        <seller-info-confirm></seller-info-confirm>
     </div>
   </div>
</template>
<script>
import SellerInfoForm from '@/components/form_pages/SellerInfoForm.vue'
import RecipientInfoForm from '@/components/form_pages/RecipientInfoForm.vue'
import SellerData from '@/data/Seller.data.js'
import RecipientData from '@/data/Recipient.data.js'
import SellerInfoConfirm from '@/components/confirm_pages/SellerInfoConfirm.vue'

export default {
  data () {
    return {
      buttonIsSubmitted: false,
      seller: SellerData,
      recipient: RecipientData
    }
  },
  components: {
    SellerInfoForm,
    SellerInfoConfirm,
    RecipientInfoForm
  },
  methods: {
  }
}
</script>
