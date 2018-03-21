<template>
  <div>
    <!--Seller-->
    <h2>ผู้ขาย</h2>
    <!--Seller Trade Party-->
    รหัสผู้ค้า(ผู้ขาย) : <input v-model="sellerInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้ขาย) : <input v-model="sellerInfoForm.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="sellerInfoForm.name"/><br>
    <!--Specified Tax Registration-->
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="sellerInfoForm.taxID"/><br>
    <!--Defined Trade Contact-->
    ชื่อผู้ติดต่อ: <input v-model="sellerInfoForm.personName"/><br>
    ชื่อแผนก: <input v-model="sellerInfoForm.departmentName"/><br>
    <!--E-mail URI Universal Communication-->
    อีเมล: <input v-model="sellerInfoForm.email"/><br>
    <!--Telephone Universal Communication -->
    เบอร์โทรศัพท์: <input v-model="sellerInfoForm.phoneNumber"/><br>
    <!--Postal Trade Address -->
    รหัสไปรษณีย์: <input v-model="sellerInfoForm.postalCode"/><br>
    ชื่ออาคาร: <input v-model="sellerInfoForm.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="sellerInfoForm.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="sellerInfoForm.addressLineTwo"/><br>
    ซอย: <input v-model="sellerInfoForm.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="sellerInfoForm.addressLineFour"/><br>
    หมู่ที่: <input v-model="sellerInfoForm.addressLineFive"/><br>
    ถนน: <input v-model="sellerInfoForm.street"/><br>
    ชื่ออำเภอ: <input v-model="sellerInfoForm.district"/><br>
    ชื่อตำบล: <input v-model="sellerInfoForm.subDistrict"/><br>
    รหัสประเทศ: <input v-model="sellerInfoForm.countryID"/><br>
    รหัสจังหวัด: <input v-model="sellerInfoForm.provinceID"/><br>
    บ้านเลขที่: <input v-model="sellerInfoForm.houseNumber"/><br>
  </div>
</template>

<script>
export default {
  props: ['sellerInfoForm']
}
</script>
