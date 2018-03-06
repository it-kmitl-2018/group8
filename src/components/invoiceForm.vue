<template>
   <div class="invoiceForm">
     <div v-if="buttonIsSubmitted===false">
       <br>
       <h1>ใบแจ้งหนี้และใบรับอิเล็กทรอนิกส์</h1>
       <guidelineSpecified></guidelineSpecified>
       <!--CIIH Exchanged Document-->
       <h3>หัวเรื่องเอกสาร</h3>
       เลขที่เอกสาร : <input v-model="exchangedDocument.id"/><br>
       ชื่อเอกสาร : <input v-model="exchangedDocument.name"/><br>
       รหัสประเภทเอกสาร : <input v-model="exchangedDocument.typeCode"/><br>
       วันเดือนปี ที่ออกเอกสาร  : <input v-model="exchangedDocument.issueDateTime"/><br>
       สาเหตุการออกเอกสาร : <input v-model="exchangedDocument.purpose"/><br>
       รหัสสาเหตุการออกเอกสาร : <input v-model="exchangedDocument.purposeCode"/><br>
       เลขที่เอกสารสากล : <input v-model="exchangedDocument.globalID"/><br>
       วันเดือนปีและเวลาที่สร้างเอกสาร : <input v-model="exchangedDocument.creationDateTime"/><br>
       <!--Included Note-->
       <h3>ข้อความเพิ่มเติม</h3>
       หัวข้อ : <input v-model="includeNote.subject"/><br>
       เนื้อหา : <textarea v-model="includeNote.content"/><br>
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>
        <h1> โปรดตรวจสอบข้อมูลดังกล่าวว่าถูกต้องหรือไม่ </h1>
        <!--Guideline Specified CI Document Context Parameter -->
        <h3>ข้อมูลคู่มือมาตรฐาน</h3>
        รหัสคู่มือมาตรฐาน : <span>{{ guidelineSpecifiedID }}</span><br>
        <!--CIIH Exchanged Document-->
        <h3>หัวเรื่องเอกสาร</h3>
        เลขที่เอกสาร : <span>{{ exchangedDocument.id }}</span><br>
        ชื่อเอกสาร : <span>{{ exchangedDocument.name }}</span><br>
        รหัสประเภทเอกสาร : <span>{{ exchangedDocument.typeCode }}</span><br>
        วันเดือนปี ที่ออกเอกสาร  : <span>{{ exchangedDocument.issueDateTime }}</span><br>
        สาเหตุการออกเอกสาร : <span>{{ exchangedDocument.purpose }}</span><br>
        รหัสสาเหตุการออกเอกสาร : <span>{{ exchangedDocument.purposeCode }}</span><br>
        เลขที่เอกสารสากล : <span>{{ exchangedDocument.globalID }}</span><br>
        วันเดือนปีและเวลาที่สร้างเอกสาร : <span>{{ exchangedDocument.creationDateTime }}</span><br>
        <!--Included Note-->
        <h3>ข้อความเพิ่มเติม</h3>
        หัวข้อ : <span>{{ includeNote.subject }}</span><br>
        เนื้อหา : <span>{{ includeNote.content }}</span><br>
     </div>
   </div>
</template>
<script>
  import guidelineSpecified from '@/components/guidelineSpecifiedID.vue'

  export default {
    name: 'invoiceForm',
    components: {
      'guidelineSpecified': guidelineSpecified
    },
    data () {
      return {
        buttonIsSubmitted: false,
        //guidelineSpecifiedID: '',
        exchangedDocument: {
          id: '',
          name: '',
          typeCode: '',
          issueDateTime: '',
          purpose: '',
          purposeCode: '',
          globalID: '',
          creationDateTime: ''
        },
        includeNote: {
          subject: '',
          content: ''
        }
      };
    },
    methods: {
    }
  }
</script>
