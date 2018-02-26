<template>
   <div class="invoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <!--Guideline Specified CI Document Context Parameter -->
       รหัสคู่มือมาตรฐาน : <input name="guidelineSpecifiedID" v-model="guidelineSpecifiedID"/><br>
       <!--CIIH Exchanged Document-->
       เลขที่เอกสาร : <input name="exchangedDocument.id" v-model="exchangedDocument.id"/><br>
       ชื่อเอกสาร : <input name="exchangedDocument.name" v-model="exchangedDocument.name"/><br>
       รหัสประเภทเอกสาร : <input name="exchangedDocument.typeCode" v-model="exchangedDocument.typeCode"/><br>
       วันเดือนปี ที่ออกเอกสาร  : <input name="exchangedDocument.issueDateTime" v-model="exchangedDocument.issueDateTime"/><br>
       สาเหตุการออกเอกสาร : <input name="exchangedDocument.purpose" v-model="exchangedDocument.purpose"/><br>
       รหัสสาเหตุการออกเอกสาร : <input name="exchangedDocument.purposeCode" v-model="exchangedDocument.purposeCode"/><br>
       เลขที่เอกสารสากล : <input name="exchangedDocument.globalID" v-model="exchangedDocument.globalID"/><br>
       วันเดือนปีและเวลาที่สร้างเอกสาร : <input name="exchangedDocument.creationDateTime" v-model="exchangedDocument.creationDateTime"/><br>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1><br>
        <!--Guideline Specified CI Document Context Parameter -->
        รหัสคู่มือมาตรฐาน : <span>{{ guidelineSpecifiedID }}</span><br>
        <!--CIIH Exchanged Document-->
        เลขที่เอกสาร : <span>{{ exchangedDocument.id }}</span><br>
        ชื่อเอกสาร : <span>{{ exchangedDocument.name }}</span><br>
        รหัสประเภทเอกสาร : <span>{{ exchangedDocument.typeCode }}</span><br>
        วันเดือนปี ที่ออกเอกสาร  : <span>{{ exchangedDocument.issueDateTime }}</span><br>
        สาเหตุการออกเอกสาร : <span>{{ exchangedDocument.purpose }}</span><br>
        รหัสสาเหตุการออกเอกสาร : <span>{{ exchangedDocument.purposeCode }}</span><br>
        เลขที่เอกสารสากล : <span>{{ exchangedDocument.globalID }}</span><br>
        วันเดือนปีและเวลาที่สร้างเอกสาร : <span>{{ exchangedDocument.creationDateTime }}</span><br>
     </div>
   </div>
</template>
<script>
  export default {
    name: 'invoiceForm',
    data () {
      return {
        buttonIsSubmitted: false,
        guidelineSpecifiedID: '',
        exchangedDocument: {
          id: '',
          name: '',
          typeCode: '',
          issueDateTime: '',
          purpose: '',
          purposeCode: '',
          globalID: '',
          creationDateTime: ''
        }
      };
    },
    methods: {
    }
  }
</script>
