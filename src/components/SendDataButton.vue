<template>
  <b-button variant="success" @click="sendData">ยืนยัน</b-button>
</template>

<script>
import { AXIOS } from '@/http-common'

export default{
  props: ['paras'],
  methods: {
    sendData () {
      AXIOS.post('/etaxinvoice', this.paras)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
