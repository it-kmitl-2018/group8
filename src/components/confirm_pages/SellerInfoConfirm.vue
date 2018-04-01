<template>
  <div class="SellerInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Seller Trade Party-->
      รหัสผู้ค้า(ผู้ขาย) : <span>{{ sellerInfoConfirm.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ sellerInfoConfirm.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ sellerInfoConfirm.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ sellerInfoConfirm.taxID }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ sellerInfoConfirm.personName }}</span><br>
      ชื่อแผนก: <span>{{ sellerInfoConfirm.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ sellerInfoConfirm.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ sellerInfoConfirm.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ sellerInfoConfirm.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ sellerInfoConfirm.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ sellerInfoConfirm.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ sellerInfoConfirm.addressLineTwo }}</span><br>
      ซอย: <span>{{ sellerInfoConfirm.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ sellerInfoConfirm.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ sellerInfoConfirm.addressLineFive }}</span><br>
      ถนน: <span>{{ sellerInfoConfirm.street }}</span><br>
      ชื่ออำเภอ: <span>{{ sellerInfoConfirm.district }}</span><br>
      ชื่อตำบล: <span>{{ sellerInfoConfirm.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ sellerInfoConfirm.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ sellerInfoConfirm.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ sellerInfoConfirm.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['sellerInfoConfirm']
}
</script>
