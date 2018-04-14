<template>
  <div class="InvoiceeInfoConfirm">
    <h2>ผู้รับเอกสาร</h2>
      <!--Invoicee Trade Party-->
      รหัสผู้ค้า(ผู้รับเอกสาร) : <span>{{ documentRecipientConfirmProp.id }}</span><br>
      รหัสผู้ค้าสากล(ผู้รับเอกสาร) : <span>{{ documentRecipientConfirmProp.globalID }}</span><br>
      ชื่อผู้ขาย : <span>{{ documentRecipientConfirmProp.name }}</span><br>
      <!--Specified Tax Registration-->
      เลขประจำตัวผู้เสียภาษีอากร : <span>{{ documentRecipientConfirmProp.taxID }}</span><br>
      <!--Defined Trade Contact-->
      ชื่อผู้ติดต่อ: <span>{{ documentRecipientConfirmProp.personName }}</span><br>
      ชื่อแผนก: <span>{{ documentRecipientConfirmProp.departmentName }}</span><br>
      <!--E-mail URI Universal Communication-->
      อีเมล: <span>{{ documentRecipientConfirmProp.email }}</span><br>
      <!--Telephone Universal Communication -->
      เบอร์โทรศัพท์: <span>{{ documentRecipientConfirmProp.phoneNumber }}</span><br>
      <!--Postal Trade Address -->
      รหัสไปรษณีย์: <span>{{ documentRecipientConfirmProp.postalCode }}</span><br>
      ชื่ออาคาร: <span>{{ documentRecipientConfirmProp.building }}</span><br>
      ที่อยู่บรรทัดที่ 1: <span>{{ documentRecipientConfirmProp.addressLineOne }}</span><br>
      ที่อยู่บรรทัดที่ 2: <span>{{ documentRecipientConfirmProp.addressLineTwo }}</span><br>
      ซอย: <span>{{ documentRecipientConfirmProp.addressLineThree }}</span><br>
      หมู่บ้าน: <span>{{ documentRecipientConfirmProp.addressLineFour }}</span><br>
      หมู่ที่: <span>{{ documentRecipientConfirmProp.addressLineFive }}</span><br>
      ถนน: <span>{{ documentRecipientConfirmProp.street }}</span><br>
      ชื่ออำเภอ: <span>{{ documentRecipientConfirmProp.district }}</span><br>
      ชื่อตำบล: <span>{{ documentRecipientConfirmProp.subDistrict }}</span><br>
      รหัสประเทศ: <span>{{ documentRecipientConfirmProp.countryID }}</span><br>
      รหัสจังหวัด: <span>{{ documentRecipientConfirmProp.provinceID }}</span><br>
      บ้านเลขที่: <span>{{ documentRecipientConfirmProp.houseNumber }}</span><br>
   </div>
</template>
<script>
export default {
  props: ['documentRecipientConfirmProp']
}
</script>
