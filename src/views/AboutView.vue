<template>
  <div class="about">
    <AboutUs></AboutUs>
  </div>
  <Footer></Footer>
</template>
<script>
  import HelloWorld from '@/components/Home/HelloWorld.vue'
  import AboutUs from '@/components/About/AboutUs.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
  name: 'AboutView',
  components: {
    HelloWorld,
    AboutUs,
    Footer,
  }
}
</script>