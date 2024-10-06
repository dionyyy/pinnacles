<template>
  <div class="home">
    <div class="row">
      <MainHeader @scrollFromChild="scrollMethod"></MainHeader>
    </div>
    <div class="container-fluid">
      <div class="row pt-5" ref="HomeContent2">
        <HomeContent></HomeContent>
      </div>
    </div>
    <div class="container-fluid bgpin">
      <div class="row p-5">
        <HomeContent2></HomeContent2>
      </div>
    </div>
    <div class="container">
      <div class="row py-5">
        <HomeContent3></HomeContent3>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home/HelloWorld.vue'
import MainHeader from '../components/Home/MainHeader.vue'
import HomeContent from '../components/Home/HomeContent.vue'
import HomeContent2 from '../components/Home/HomeContent2.vue'
import HomeContent3 from '../components/Home/HomeContent3.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainHeader,
    HomeContent,
    HomeContent2,
    HomeContent3,
    Footer,
  },

  methods: {
    scrollMethod(sectionRef) {
        var element = this.$refs[sectionRef];
        var top = element.offsetTop;
        window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>
  .bgpin {
    padding: auto;
    margin: auto;
    background-color: #FFFAFE;
  }
</style>
