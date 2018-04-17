<template>
  <div>
    <h2>ผู้ซื้อ</h2>
    รหัสผู้ซื้อ : <input type="text" maxlength="35" v-model="buyerFormProp.id"/><br>
    รหัสผู้ค้าสากล : <input type="text" maxlength="70" v-model="buyerFormProp.globalID"/><br>
    ชื่อผู้ซื้อ : <input type="text" maxlength="256" v-model="buyerFormProp.name"/><br>

    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="buyerFormProp.taxID"/><br>

    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="buyerFormProp.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="buyerFormProp.departmentName"/><br>

    อีเมล: <input type="text" maxlength="256" v-model="buyerFormProp.email"/><br>

    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="buyerFormProp.phoneNumber"/><br>

    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="buyerFormProp.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="70" v-model="buyerFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="buyerFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="buyerFormProp.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="buyerFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="buyerFormProp.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="buyerFormProp.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="buyerFormProp.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="buyerFormProp.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="buyerFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="buyerFormProp.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="buyerFormProp.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="buyerFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['buyerFormProp']
}
</script>
