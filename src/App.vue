<template>
  <div id="app">
    <NavigationBar />
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>
<script>

import NavigationBar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    NavigationBar
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
