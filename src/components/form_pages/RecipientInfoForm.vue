<template>
  <div>
    <!--Recipient-->
    <h2>ผู้รับ</h2>
    <!--Ship To Trade Party-->
    รหัสผู้รับ(ผู้รับ) : <input type="text" maxlength="35" v-model="recipientFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับ) : <input type="text" maxlength="70" v-model="recipientFormProp.globalID"/><br>
    ชื่อผู้รับ : <input type="text" maxlength="140" v-model="recipientFormProp.name"/><br>
    <!--:Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="recipientFormProp.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="recipientFormProp.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="recipientFormProp.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="recipientFormProp.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="recipientFormProp.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="140" v-model="recipientFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="recipientFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="recipientFormProp.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="recipientFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="recipientFormProp.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="recipientFormProp.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="recipientFormProp.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="recipientFormProp.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="recipientFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="recipientFormProp.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="recipientFormProp.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="recipientFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['recipientFormProp']
}
</script>
