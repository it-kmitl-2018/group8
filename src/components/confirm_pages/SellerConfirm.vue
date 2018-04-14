<template>
  <div class="SellerInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Seller Trade Party-->
      รหัสผู้ค้า(ผู้ขาย) : <span>{{ sellerConfirmProp.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ sellerConfirmProp.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ sellerConfirmProp.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ sellerConfirmProp.taxID }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ sellerConfirmProp.personName }}</span><br>
      ชื่อแผนก: <span>{{ sellerConfirmProp.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ sellerConfirmProp.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ sellerConfirmProp.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ sellerConfirmProp.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ sellerConfirmProp.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ sellerConfirmProp.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ sellerConfirmProp.addressLineTwo }}</span><br>
      ซอย: <span>{{ sellerConfirmProp.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ sellerConfirmProp.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ sellerConfirmProp.addressLineFive }}</span><br>
      ถนน: <span>{{ sellerConfirmProp.street }}</span><br>
      ชื่ออำเภอ: <span>{{ sellerConfirmProp.district }}</span><br>
      ชื่อตำบล: <span>{{ sellerConfirmProp.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ sellerConfirmProp.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ sellerConfirmProp.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ sellerConfirmProp.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['sellerConfirmProp']
}
</script>
