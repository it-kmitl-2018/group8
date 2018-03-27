<template>
  <div>
    <h2>ผู้ซื้อ</h2>
    รหัสผู้ค้า(ผู้ซื้อ) : <input v-model="buyerInfoForm.id"/><br>
    รหัสผู้ค้าสากล(ผู้ซื้อ) : <input v-model="buyerInfoForm.globalID"/><br>
    ชื่อผู้ซื้อ :  <input v-model="buyerInfoForm.name"/><br>
    เลขประจำตัวผู้เสียภาษีอากร :  <input v-model="buyerInfoForm.taxID"/><br>
    <U>การติดต่อ</U><br>
    ชื่อผู้ติดต่อ : <input v-model="buyerInfoForm.personName"/><br>
    ชื่อแผนก : <input v-model="buyerInfoForm.departName"/><br>
    อีเมล : <input v-model="buyerInfoForm.email"/><br>
    เบอร์โทรศัพท์ : <input v-model="buyerInfoForm.phoneNumber"/><br>
    <U>ที่อยู่</U><br>
    รหัสไปรษณีย์ : <input v-model="buyerInfoForm.postID"/><br>
    อาคาร: <input v-model="buyerInfoForm.buildingName"/><br>
    บ้านเลขที่ : <input v-model="buyerInfoForm.buildingNumber"/><br>
    ที่อยู่ :<input v-model="buyerInfoForm.lineOne"/><br>
    ที่อยู่ :<input v-model="buyerInfoForm.lineTwo"/><br>
    ซอย :<input v-model="buyerInfoForm.lineThree"/><br>
    หมู่บ้าน :<input v-model="buyerInfoForm.lineFour"/><br>
    หมู่ :<input v-model="buyerInfoForm.lineFive"/><br>
    ถนน : <input v-model="buyerInfoForm.streetName"/><br>
    ชื่ออำเภอ : <input v-model="buyerInfoForm.cityName"/><br>
    ชื่อตำบล : <input v-model="buyerInfoForm.divisionName"/><br>
    รหัสประเทศ : <input v-model="buyerInfoForm.countryID"/><br>
    รหัสจังหวัด : : <input v-model="buyerInfoForm.provinceID"/><br>



  </div>
</template>

<script>
export default {
  props: ['buyerInfoForm']
}
</script>
