<template>
  <div id="app">
    <Navbar />
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {

    }
  }
}

</script>

<style>
body {
  margin-top: 48px;
}

</style>
