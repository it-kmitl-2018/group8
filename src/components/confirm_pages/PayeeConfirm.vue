<template>
  <div class="PayeeInfoConfirm">
    <h2>ผู้รับชำระเงิน</h2>
      <!--Seller Trade Party-->
      รหัสผู้ค้า(ผู้รับชำระเงิน) : <span>{{ payeeConfirmProp.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้รับชำระเงิน) : <span>{{ payeeConfirmProp.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ payeeConfirmProp.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ payeeConfirmProp.taxID }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ payeeConfirmProp.personName }}</span><br>
      ชื่อแผนก: <span>{{ payeeConfirmProp.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ payeeConfirmProp.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ payeeConfirmProp.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ payeeConfirmProp.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ payeeConfirmProp.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ payeeConfirmProp.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ payeeConfirmProp.addressLineTwo }}</span><br>
      ซอย: <span>{{ payeeConfirmProp.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ payeeConfirmProp.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ payeeConfirmProp.addressLineFive }}</span><br>
      ถนน: <span>{{ payeeConfirmProp.street }}</span><br>
      ชื่ออำเภอ: <span>{{ payeeConfirmProp.district }}</span><br>
      ชื่อตำบล: <span>{{ payeeConfirmProp.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ payeeConfirmProp.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ payeeConfirmProp.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ payeeConfirmProp.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['payeeConfirmProp']
}
</script>
