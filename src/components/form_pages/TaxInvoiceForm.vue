<template>
  <div>
    <h2>ข้อมูลภาษี</h2>
    รหัสประเภทภาษี : <input v-model="taxInvoiceFormProp.taxCode"/><br>
    อัตราภาษี : <input v-model="taxInvoiceFormProp.taxInvoiceRate"/><br>
    มูลค่าสินค้าบริการ (ไม่รวมภาษี) : <input v-model="taxInvoiceFormProp.valueAmount"/><br>
    มูลต่าภาษีมูลค่าเพิ่ม: <input v-model="taxInvoiceFormProp.vatAmount"/><br>
  </div>
</template>

<script>
export default {
  props: ['taxInvoiceFormProp']
}
</script>
