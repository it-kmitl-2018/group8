<template>
  <div>
    <!--Payee-->
    <h2>ผู้รับชำระเงิน</h2>
    <!--Payee Trade Party-->
    รหัสผู้ค้า(ผู้รับชำระเงิน) : <input v-model="payeeFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับชำระเงิน) : <input v-model="payeeFormProp.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="payeeFormProp.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="payeeFormProp.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="payeeFormProp.personName"/><br>
    ชื่อแผนก: <input v-model="payeeFormProp.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="payeeFormProp.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="payeeFormProp.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="payeeFormProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="payeeFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="payeeFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="payeeFormProp.addressLineTwo"/><br>
    ซอย: <input v-model="payeeFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="payeeFormProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="payeeFormProp.addressLineFive"/><br>
    ถนน: <input v-model="payeeFormProp.street"/><br>
    ชื่ออำเภอ: <input v-model="payeeFormProp.district"/><br>
    ชื่อตำบล: <input v-model="payeeFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="payeeFormProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="payeeFormProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="payeeFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['payeeFormProp']
}
</script>
