<template>
  <div>
    <!--Seller-->
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="sellerFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input type="text" maxlength="70" v-model="sellerFormProp.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="sellerFormProp.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="sellerFormProp.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="sellerFormProp.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="sellerFormProp.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="sellerFormProp.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="sellerFormProp.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="sellerFormProp.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="70" v-model="sellerFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="sellerFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="sellerFormProp.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="sellerFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="sellerFormProp.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="sellerFormProp.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="sellerFormProp.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="sellerFormProp.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="sellerFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="sellerFormProp.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="sellerFormProp.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="sellerFormProp.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerFormProp']
}
</script>
