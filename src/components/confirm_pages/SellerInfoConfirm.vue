<template>
  <div class="SellerInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Seller Trade Party-->
      รหัสผู้ค้า(ผู้ขาย) : <span>{{ seller.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้ขาย) : <span>{{ seller.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ seller.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ seller.taxID }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ seller.personName }}</span><br>
      ชื่อแผนก: <span>{{ seller.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ seller.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ seller.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ seller.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ seller.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ seller.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ seller.addressLineTwo }}</span><br>
      ซอย: <span>{{ seller.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ seller.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ seller.addressLineFive }}</span><br>
      ถนน: <span>{{ seller.street }}</span><br>
      ชื่ออำเภอ: <span>{{ seller.district }}</span><br>
      ชื่อตำบล: <span>{{ seller.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ seller.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ seller.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ seller.houseNumber }}</span><br>
   </div>
</template>
<script>
  import SellerData from '@/data/Seller.data.js'
  
  export default {
    data () {
      return {
        seller: SellerData
      };
    }
  }
</script>
