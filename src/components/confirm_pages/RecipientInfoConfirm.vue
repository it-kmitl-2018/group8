<template>
  <div class="RecipientInfoConfirm">
    <h2>ผู้ขาย</h2>
      <!--Ship To Trade Party-->
      รหัสผู้ค้า(ผู้รับ) : <span>{{ recipient.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้รับ) : <span>{{ recipient.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ recipient.name }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ recipient.personName }}</span><br>
      ชื่อแผนก: <span>{{ recipient.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ recipient.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ recipient.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ recipient.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ recipient.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ recipient.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ recipient.addressLineTwo }}</span><br>
      ซอย: <span>{{ recipient.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ recipient.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ recipient.addressLineFive }}</span><br>
      ถนน: <span>{{ recipient.street }}</span><br>
      ชื่ออำเภอ: <span>{{ recipient.district }}</span><br>
      ชื่อตำบล: <span>{{ recipient.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ recipient.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ recipient.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ recipient.houseNumber }}</span><br>
   </div>
</template>
<script>
  import RecipientData from '@/data/Recipient.data.js'

  export default {
    data () {
      return {
        recipient: RecipientData
      };
    }
  }
</script>
