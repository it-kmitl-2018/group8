<template>
   <div class="ConfirmSellerInfo">
      <h3>ผู้ขาย</h3>
      <!--Seller Trade Party-->
      รหัสผู้ค้า(ผู้ขาย) : <span>{{ sellerInfoConfirm.seller.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ sellerInfoConfirm.seller.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ sellerInfoConfirm.seller.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ sellerInfoConfirm.seller.taxID }}</span><br>
   </div>
</template>

<script>
  export default {
    props: ['sellerInfoConfirm']
  }
</script>
