<template>
  <div>
    <h2>ข้อมูลภาษี</h2>
    รหัสประเภทภาษี : <input v-model="taxFormProp.taxCode"/><br>
    อัตราภาษี : <input v-model="taxFormProp.taxRate"/><br>
    มูลค่าสินค้าบริการ (ไม่รวมภาษี) : <input v-model="taxFormProp.valueAmount"/><br>
    มูลต่าภาษีมูลค่าเพิ่ม: <input v-model="taxFormProp.vatAmount"/><br>
  </div>
</template>

<script>
export default {
  props: ['taxFormProp']
}
</script>
