<template>
   <div class="invoiceForm">
     <div v-if="isSubmit===false">
       <br>
       <!--CI Exchanged Document Context-->
       รหัสคู่มือมาตรฐาน : <input name="idSpecifiedCIDocument" v-model="idSpecifiedCIDocument"/><br>
       <!--CIIH Exchanged Document-->
       เลขที่เอกสาร : <input name="idCIIHExchangedDocument" v-model="idCIIHExchangedDocument"/><br>
       ชื่อเอกสาร : <input name="nameCodeSCIIHExchangedDocument" v-model="nameCodeSCIIHExchangedDocument"/><br>
       รหัสประเภทเอกสาร : <input name="typeCodeSCIIHExchangedDocument" v-model="typeCodeSCIIHExchangedDocument"/><br>
       วันเดือนปี ที่ออกเอกสาร  : <input name="issueDateTimeCodeSCIIHExchangedDocument" v-model="issueDateTimeCodeSCIIHExchangedDocument"/><br>
       สาเหตุการออกเอกสาร : <input name="purposeSCIIHExchangedDocument" v-model="purposeSCIIHExchangedDocument"/><br>
       รหัสสาเหตุการออกเอกสาร : <input name="purposeCodeSCIIHExchangedDocument" v-model="purposeCodeSCIIHExchangedDocument"/><br>
       เลขที่เอกสารสากล : <input name="GlobalIDSCIIHExchangedDocument" v-model="GlobalIDSCIIHExchangedDocument"/><br>
       วันเดือนปีและเวลาที่สร้างเอกสาร : <input name="creationDateTimeSCIIHExchangedDocument" v-model="creationDateTimeSCIIHExchangedDocument"/><br>
       <button @click="isSubmit=true">ส่งข้อมูล</button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1><br>
        รหัสคู่มือมาตรฐาน : <span>{{ idSpecifiedCIDocument }}</span><br>
        เลขที่เอกสาร : <span>{{ idCIIHExchangedDocument }}</span><br>
        ชื่อเอกสาร : <span>{{ nameCodeSCIIHExchangedDocument }}</span><br>
        รหัสประเภทเอกสาร : <span>{{ typeCodeSCIIHExchangedDocument }}</span><br>
        วันเดือนปี ที่ออกเอกสาร  : <span>{{ issueDateTimeCodeSCIIHExchangedDocument }}</span><br>
        สาเหตุการออกเอกสาร : <span>{{ purposeSCIIHExchangedDocument }}</span><br>
        รหัสสาเหตุการออกเอกสาร : <span>{{ purposeCodeSCIIHExchangedDocument }}</span><br>
        เลขที่เอกสารสากล : <span>{{ GlobalIDSCIIHExchangedDocument }}</span><br>
        วันเดือนปีและเวลาที่สร้างเอกสาร : <span>{{ creationDateTimeSCIIHExchangedDocument }}</span><br>
     </div>
   </div>
</template>
<script>
  export default {
    name: 'invoiceForm',
    data () {
      return {
        //CI Exchanged Document Context
        idSpecifiedCIDocument: '',
        //CIIH Exchanged Document
        idCIIHExchangedDocument: '',
        nameCodeSCIIHExchangedDocument: '',
        typeCodeSCIIHExchangedDocument: '',
        issueDateTimeCodeSCIIHExchangedDocument: '',
        purposeSCIIHExchangedDocument: '',
        purposeCodeSCIIHExchangedDocument: '',
        GlobalIDSCIIHExchangedDocument: '',
        creationDateTimeSCIIHExchangedDocument: '',
        //Submit button
        isSubmit: false
      };
    },
    methods: {

    }
  }
</script>
