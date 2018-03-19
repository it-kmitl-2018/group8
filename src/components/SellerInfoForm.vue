<template>
  <div>
    <!--Seller-->
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="sellerInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input type="text" maxlength="70" v-model="sellerInfoForm.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="sellerInfoForm.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="sellerInfoForm.taxID"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerInfoForm']
}
</script>
