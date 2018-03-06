<template>
  <!--Guideline Specified CI Document Context Parameter -->
  <div class="guidelineSpecifiedID">
    <h3>ข้อมูลคู่มือมาตรฐาน</h3>
    รหัสคู่มือมาตรฐาน : <input v-model="guidelineSpecifiedID"/><br>
  </div>
</template>
<script>
  export default {
    name: 'guidelineSpecifiedID',
    data () {
      return {
        guidelineSpecifiedID: ''
      };
    },
    methods: {
    }
  }
</script>
