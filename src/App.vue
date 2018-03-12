<template>
  <div id="app">
    <div>
        <router-link :to="{name: 'app'}"> หน้าแรก </router-link>
        <router-link :to="{name: 'invoiceForm'}"> ใบแจ้งหนี้ </router-link>
        <router-link :to="{name: 'receiptForm'}"> ใบรับอิเล็กทรอนิกส์ </router-link>
        <br>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return{

    }
  }
}

</script>
