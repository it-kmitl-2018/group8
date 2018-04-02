<template>
  <div class="RecipientInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Ship To Trade Party-->
      รหัสผู้ค้า(ผู้รับ) : <span>{{ recipientConfirmProp.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้รับ) : <span>{{ recipientConfirmProp.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ recipientConfirmProp.name }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ recipientConfirmProp.personName }}</span><br>
      ชื่อแผนก: <span>{{ recipientConfirmProp.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ recipientConfirmProp.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ recipientConfirmProp.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ recipientConfirmProp.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ recipientConfirmProp.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ recipientConfirmProp.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ recipientConfirmProp.addressLineTwo }}</span><br>
      ซอย: <span>{{ recipientConfirmProp.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ recipientConfirmProp.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ recipientConfirmProp.addressLineFive }}</span><br>
      ถนน: <span>{{ recipientConfirmProp.street }}</span><br>
      ชื่ออำเภอ: <span>{{ recipientConfirmProp.district }}</span><br>
      ชื่อตำบล: <span>{{ recipientConfirmProp.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ recipientConfirmProp.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ recipientConfirmProp.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ recipientConfirmProp.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['recipientConfirmProp']
}
</script>
