<template>
  <div>
    <!--Recipient-->
    <h2>ผู้รับ</h2>
    <!--Ship To Trade Party-->
    รหัสผู้รับ(ผู้รับ) : <input v-model="recipientFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับ) : <input v-model="recipientFormProp.globalID"/><br>
    ชื่อผู้รับ : <input v-model="recipientFormProp.name"/><br>
    <!--:Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="recipientFormProp.personName"/><br>
    ชื่อแผนก: <input v-model="recipientFormProp.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="recipientFormProp.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="recipientFormProp.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="recipientFormProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="recipientFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="recipientFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="recipientFormProp.addressLineTwo"/><br>
    ซอย: <input v-model="recipientFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="recipientFormProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="recipientFormProp.addressLineFive"/><br>
    ถนน: <input v-model="recipientFormProp.street"/><br>
    ชื่ออำเภอ: <input v-model="recipientFormProp.district"/><br>
    ชื่อตำบล: <input v-model="recipientFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="recipientFormProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="recipientFormProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="recipientFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['recipientFormProp']
}
</script>
