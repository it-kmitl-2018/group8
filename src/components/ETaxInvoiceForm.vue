<template>
   <div class="ETaxInvoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
       <seller-info-form :sellerInfoForm="sellerInfo"></seller-info-form>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
        <!--Guideline Specified CI Document Context Parameter -->
        <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
        <h2>ผู้ขาย</h2>
        <!--Seller Trade Party-->
        รหัสผู้ค้า(ผู้ขาย) : <span>{{ sellerInfo.id }}</span><br>
        รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ sellerInfo.globalID }}</span><br>
        ชื่อผู้ขาย : <span>{{ sellerInfo.name }}</span><br>
        <!--Specified Tax Registration-->
        เลขประจำตัวผู้เสียภาษีอากร : <span>{{ sellerInfo.taxID }}</span><br>
     </div>
   </div>
</template>
<script>
  import SellerInfoForm from '@/components/form_pages/SellerInfoForm.vue'

  export default {
    data () {
      return {
        buttonIsSubmitted: false,
        sellerInfo: {
          id: '',
          globalID: '',
          name: '',
          taxID: ''
        }
      };
    },
    components: {
      SellerInfoForm
    },
    methods: {
    }
  }
</script>
