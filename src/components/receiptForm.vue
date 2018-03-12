<template>
   <div class="receiptForm">
     <div v-if="buttonIsSubmitted===false">
       <button @click="buttonIsSubmitted=true"> ส่งข้อมูล </button>
     </div>
     <div v-else>

     </div>
   </div>

</template>
<script>
  export default {
    name: 'receiptForm',
    data () {
      return {
        buttonIsSubmitted: false
      };
    },
    methods: {
    }
  }
</script>
