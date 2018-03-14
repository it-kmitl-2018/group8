<template>
   <div class="invoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
       <!--Seller-->
       <h2>ผู้ซื้อ</h2>
       <!--Seller Trade Party-->
       รหัสผู้ค้า(ผู้ขาย) : <input v-model="seller.id"/><br>
       รหัสผู้ค้าสากล(ผู้ขาย) : <input v-model="seller.globalID"/><br>
       ชื่อผู้ขาย : <input v-model="seller.name"/><br>
       <!--Specified Tax Registration-->
       เลขประจำตัวผู้เสียภาษีอากร : <input v-model="seller.taxID"/><br>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
        <!--Guideline Specified CI Document Context Parameter -->
        <h1>ใบกำกับภาษีอิเล็กทรอนิกส์</h1>
        <h2>ผู้ซื้อ</h2>
        รหัสคู่มือมาตรฐาน : <span>{{ seller.id }}</span><br>
        <!--Seller Trade Party-->
        รหัสผู้ค้า(ผู้ขาย) : <span>{{ seller.id }}</span><br>
        รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ seller.globalID }}</span><br>
        ชื่อผู้ขาย : <span>{{ seller.name }}</span><br>
        <!--Specified Tax Registration-->
        เลขประจำตัวผู้เสียภาษีอากร : <span>{{ seller.taxID }}</span><br>

     </div>
   </div>
</template>
<script>

  export default {
    data () {
      return {
        buttonIsSubmitted: false,
        seller: {
          id: '',
          globalID: '',
          name: '',
          taxID: ''
        }
      };
    },
    methods: {
    }
  }
</script>
