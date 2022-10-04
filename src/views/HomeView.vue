<template>
  <div class="home">
    <MainHeader></MainHeader>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home/HelloWorld.vue'
import MainHeader from '../components/Home/MainHeader.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainHeader,
    Footer,
  }
}
</script>

<style scoped>

</style>
