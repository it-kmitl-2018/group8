<template>
  <div>
    <!--Seller-->
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input type="text" maxlength="35" v-model="sellerInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input type="text" maxlength="70" v-model="sellerInfoForm.globalID"/><br>
    ชื่อผู้ขาย : <input type="text" maxlength="256" v-model="sellerInfoForm.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input type="text" maxlength="35" v-model="sellerInfoForm.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input type="text" maxlength="140" v-model="sellerInfoForm.personName"/><br>
    ชื่อแผนก: <input type="text" maxlength="140" v-model="sellerInfoForm.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input type="text" maxlength="256" v-model="sellerInfoForm.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input type="text" maxlength="35" v-model="sellerInfoForm.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input type="text" maxlength="16" v-model="sellerInfoForm.postalCode"/><br>
    ชื่ออาคาร: <input type="text" maxlength="70" v-model="sellerInfoForm.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input type="text" maxlength="256" v-model="sellerInfoForm.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input type="text" maxlength="256" v-model="sellerInfoForm.addressLineTwo"/><br>
    ซอย: <input type="text" maxlength="70" v-model="sellerInfoForm.addressLineThree"/><br>
    หมู่บ้าน: <input type="text" maxlength="70" v-model="sellerInfoForm.addressLineFour"/><br>
    หมู่ที่: <input type="text" maxlength="70" v-model="sellerInfoForm.addressLineFive"/><br>
    ถนน: <input type="text" maxlength="70" v-model="sellerInfoForm.street"/><br>
    ชื่ออำเภอ: <input type="text" maxlength="70" v-model="sellerInfoForm.district"/><br>
    ชื่อตำบล: <input type="text" maxlength="70" v-model="sellerInfoForm.subDistrict"/><br>
    รหัสประเทศ: <input v-model="sellerInfoForm.countryID"/><br>
    รหัสจังหวัด: <input type="text" maxlength="35" v-model="sellerInfoForm.provinceID"/><br>
    บ้านเลขที่: <input type="text" maxlength="16" v-model="sellerInfoForm.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerInfoForm']
}
</script>
