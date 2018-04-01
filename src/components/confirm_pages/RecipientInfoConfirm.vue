<template>
  <div class="RecipientInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Ship To Trade Party-->
      รหัสผู้ค้า(ผู้รับ) : <span>{{ recipientInfoConfirm.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้รับ) : <span>{{ recipientInfoConfirm.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ recipientInfoConfirm.name }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ recipientInfoConfirm.personName }}</span><br>
      ชื่อแผนก: <span>{{ recipientInfoConfirm.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ recipientInfoConfirm.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ recipientInfoConfirm.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ recipientInfoConfirm.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ recipientInfoConfirm.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ recipientInfoConfirm.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ recipientInfoConfirm.addressLineTwo }}</span><br>
      ซอย: <span>{{ recipientInfoConfirm.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ recipientInfoConfirm.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ recipientInfoConfirm.addressLineFive }}</span><br>
      ถนน: <span>{{ recipientInfoConfirm.street }}</span><br>
      ชื่ออำเภอ: <span>{{ recipientInfoConfirm.district }}</span><br>
      ชื่อตำบล: <span>{{ recipientInfoConfirm.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ recipientInfoConfirm.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ recipientInfoConfirm.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ recipientInfoConfirm.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['recipientInfoConfirm']
}
</script>
