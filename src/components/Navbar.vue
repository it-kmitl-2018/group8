<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{name: 'InvoiceForm'}">Project</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <!-- <b-nav-item :to="{name: 'app'}" exact> หน้าแรก </b-nav-item> -->
        <b-nav-item :to="{name: 'InvoiceForm'}"> ใบแจ้งหนี้</b-nav-item>
        <b-nav-item :to="{name: 'EReceiptForm'}"> ใบเสร็จ</b-nav-item>
        <b-nav-item :to="{name: 'ETaxInvoiceForm'}"> ใบกำกับภาษี </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css" scoped>
.navbar {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
