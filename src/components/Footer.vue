<template>
<div class="row bgpin py-5">
      <div class="col-sm-12 m-auto">
        <h3 class="text-dark">Need more details? Contact us</h3>
        <p>We are here to assist. Contact us by phone, email or via our social media channels.</p> 
        <router-link class="btn" to="contact">Contact us</router-link>
      </div>
     
        
      
</div>
<div class="row bgpin1">
  <div class="py-5 bg-light">
    <div class="container px-5"><p class="m-0 text-center text-dark">© 2022 by QA — Technical Department</p><span></span></div>
</div>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="css" scoped>

  .bgpin {
    background-color: #FFFAFE;
    height: 250px;
  }

  .bgpin1 {
    background-color: #EDDE;
  }

   .btn{
        background-color: #a52b7a;
        border: none;
        color:white;
        transition-duration: 0.4s;
        width: 200px;
        
    }

    .btn:hover{
        background-color: violet;
        color: white;
    }

    p {
      letter-spacing: 2px;
    }

</style>