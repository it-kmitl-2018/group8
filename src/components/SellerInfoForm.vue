<template>
  <div>
    <!--Seller-->
    <h2>ผู้ซื้อ</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input v-model="sellerInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input v-model="sellerInfoForm.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="sellerInfoForm.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="sellerInfoForm.taxID"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerInfoForm']
}
</script>
