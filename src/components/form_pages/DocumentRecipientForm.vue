<template>
  <div>
    <!--Invoicee-->
    <h2>ผู้รับเอกสาร</h2>
    <!--Invoicee Trade Party-->
    รหัสผู้ค้า(ผู้รับเอกสาร) : <input v-model="documentRecipientFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับเอกสาร) : <input v-model="documentRecipientFormProp.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="documentRecipientFormProp.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="documentRecipientFormProp.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="documentRecipientFormProp.personName"/><br>
    ชื่อแผนก: <input v-model="documentRecipientFormProp.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="documentRecipientFormProp.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="documentRecipientFormProp.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="documentRecipientFormProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="documentRecipientFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="documentRecipientFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="documentRecipientFormProp.addressLineTwo"/><br>
    ซอย: <input v-model="documentRecipientFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="documentRecipientFormProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="documentRecipientFormProp.addressLineFive"/><br>
    ถนน: <input v-model="documentRecipientFormProp.street"/><br>
    ชื่ออำเภอ: <input v-model="documentRecipientFormProp.district"/><br>
    ชื่อตำบล: <input v-model="documentRecipientFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="documentRecipientFormProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="documentRecipientFormProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="documentRecipientFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
