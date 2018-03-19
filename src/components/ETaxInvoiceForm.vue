<template>
   <div class="ETaxInvoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
       <seller-info-form :sellerInfoForm="form.seller"></seller-info-form>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
        <h2>ใบกำกับภาษีอิเล็กทรอนิกส์</h2>
        <confirm-seller-info :sellerInfoConfirm="form"></confirm-seller-info>
     </div>
   </div>
</template>

<script>
  import SellerInfoForm from '@/components/form_pages/SellerInfoForm.vue'
  import ConfirmSellerInfo from '@/components/confirm_pages/ConfirmSellerInfo.vue'

  export default {
    data () {
      return {
        buttonIsSubmitted: false,
        form: {
          seller: {
            id: '',
            globalID: '',
            name: '',
            taxID: ''
          }
        }
      };
    },
    components: {
      SellerInfoForm,
      ConfirmSellerInfo
    },
    methods: {
    },
  }
</script>
