<template>
  <div>
    <!--Recipient-->
    <h2>ผู้รับ</h2>
    <!--Ship To Trade Party-->
    รหัสผู้รับ(ผู้รับ) : <input v-model="recipientInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับ) : <input v-model="recipientInfoForm.globalID"/><br>
    ชื่อผู้รับ : <input v-model="recipientInfoForm.name"/><br>
    <!--:Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="recipientInfoForm.personName"/><br>
    ชื่อแผนก: <input v-model="recipientInfoForm.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="recipientInfoForm.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="recipientInfoForm.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="recipientInfoForm.postalCode"/><br>
    ชื่ออาคาร: <input v-model="recipientInfoForm.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="recipientInfoForm.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="recipientInfoForm.addressLineTwo"/><br>
    ซอย: <input v-model="recipientInfoForm.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="recipientInfoForm.addressLineFour"/><br>
    หมู่ที่: <input v-model="recipientInfoForm.addressLineFive"/><br>
    ถนน: <input v-model="recipientInfoForm.street"/><br>
    ชื่ออำเภอ: <input v-model="recipientInfoForm.district"/><br>
    ชื่อตำบล: <input v-model="recipientInfoForm.subDistrict"/><br>
    รหัสประเทศ: <input v-model="recipientInfoForm.countryID"/><br>
    รหัสจังหวัด: <input v-model="recipientInfoForm.provinceID"/><br>
    บ้านเลขที่: <input v-model="recipientInfoForm.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['recipientInfoForm']
}
</script>
