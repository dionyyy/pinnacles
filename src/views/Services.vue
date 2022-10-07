<template>
  <div class="service">
    <div class="imageHolder">
      <img class="img" src="../assets/images/About.svg">
    </div>
    <div class="pageTitle pt-4">
      <img class="imgnotext" src="../assets/images/Servicesnotext.svg">
      <h1 class="h1servicesmobile"><strong>SERVICES</strong></h1>
    </div>
    <hr>
    <!-- FIRST ROW ! -->
    <div class="row" style="padding-top: 7%;">
      <div class="column">
        <h4 class="h4top">Software Development</h4>
        <img src="../assets/images/Servicesimg1.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">Software Development</h4>
          <br>
          <p>To design, develop, implement, </p>
          <p>manage software development</p>
          <p class="pb-5">and provide quality assurance</p>
        </div>
      </div>
      <hr>
      <div class="column">
        <h4 class="h4top">Manual Testing</h4>
        <img src="../assets/images/Servicesimg2.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">Manual Testing</h4>
          <br>
          <p>Manual functional testing of </p>
          <p>system to ensure all features</p>
          <p class="pb-5">work as expected</p>
        </div>
      </div>
      <hr>
      <div class="column">
        <h4 class="h4top">Automation Testing</h4>
        <img src="../assets/images/Servicesimg3.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">Automation Testing</h4>
          <br>
          <p>Automate all possible manual</p>
          <p>functional testing</p>
          <br>
          <p>Tackle basic security testing and </p>
          <p class="pb-5">we also provide API load testing</p>
          <br>
        </div>
      </div>
      <hr>
    </div>
    <!-- SECOND ROW ! -->
    <div class="row py-5">
      <div class="column">
        <h4 class="h4top">Technical Support</h4>
        <img src="../assets/images/Servicesimg4.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">Technical Support</h4>
          <br>
          <p>Support and maintain system, </p>
          <p>install, and configures and solves</p>
          <p class="pb-5">technical issues as they arise</p>
        </div>
      </div>
      <hr>
      <div class="column">
        <h4 class="h4top">System Maintenance</h4>
        <img src="../assets/images/Servicesimg5.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">System Maintenance</h4>
          <br>
          <p>Fixes problems related to</p>
          <p>the software and hardware </p>
          <p class="pb-5">components of computers</p>
        </div>
      </div>
      <hr>
      <div class="column">
        <h4 class="h4top">Computer Installation</h4>
        <img src="../assets/images/Servicesimg6.svg" class="columnImage">
        <div class="cellText">
          <h4 class="h4bottom">Computer Installation</h4>
          <br>
          <p>Setting up hardware and</p>
          <p>installing, configuring software </p>
          <p class="pd-5">and computer drivers</p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .pageTitle{
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.3em;
    color: #111111;
    font-family: 'Poppins', sans-serif;
  }

  .service{
    width: 100%;
  }

  .img{
    object-fit: cover;
    /* object-position: -10% 45%; */
    height: 100%;
    width: 100%;
  }

  .imgnotext{
    object-fit: cover;
    object-position: -10% 35%;
    height: 80px;
    width: 100%;
  }

  .imageHolder{
    display: none;
  }

  .cellText{
    text-align: left;
    text-indent: 10%;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.1em;
    color: #111111;
  }

  .columnImage{
    width: 100%;
    padding-bottom: 15px;
  }

  hr{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .h1servicesmobile{
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }

  .h4top{
    display: block;
    padding-bottom: 10px;
  }

  .h4bottom{
    display: none;
  }

  @media only screen and (min-width: 768px){

    .pageTitle{
      display: none;
    }

    .imageHolder{
      display: block;
      height: 100%;
      widows: 100%;
    }
    .cellText{
      text-indent: 25%;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 0.3em;
    }
    .columnImage{
      width: 50%;
      padding-bottom: 35px;
    }

    hr{
      display: none;
    }

    .h4top{
      display: none;
    }

    .h4bottom{
      display: block;
    }
  }
  @media only screen and (min-width: 1000px){
  
    .img{
      object-fit: cover;
      /* object-position: -10% 45%; */
      height: 80%;
      width: 100%;
    }

    .imageHolder{
      background-color: green;
      height: auto;
    }

    .row{
      display: table;
      width: 100%; /*Optional*/
      table-layout: fixed; /*Optional*/
      padding-left: 5%;
      /* padding-top: 5%; */
      border-spacing: 60px 0px;
    }

    .column{
      display: table-cell;
      /* background-color: red; */
      border-style: solid;
      border-width: 1px;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .cellText{
      text-align: left;
      text-indent: 20px;
      font-size: 10px;
      line-height: 15px;
      letter-spacing: 0.1em;
      color: #111111;
    }
    .cellText h4{
      text-align: left;
      text-indent: 20px;
      font-size: 15px;
      line-height: 35px;
      letter-spacing: 0.1em;
      color: #111111;
    }

    .columnImage{
      width: 100%;
      padding-bottom: 20px;
    }
  }
  @media only screen and (min-width: 1400px){

    .imageHolder{
      background-color: green;
      height: auto;
    }

    .cellText{
      text-indent: 18px;
      font-size: 12px;
      letter-spacing: 0.19em;
    }

    .cellText h4{
      text-indent: 18px;
      font-size: 22px;
      line-height: 15px;
      letter-spacing: 0.19em;
    }

    .columnImage{
      padding-bottom: 30px;
    }

    .h4bottom{
      display: block;
    }
  }  
  @media only screen and (min-width: 2000px){
  
    .img{
      object-fit: cover;
      /* object-position: -10% 45%; */
      height: 100%;
      width: 100%;
    }

    .row{
      display: table;
      width: 85%; /*Optional*/
      padding-left: 20%;
    }

    .cellText{
      text-indent: 15%;
      font-size: 15px;
      line-height: 25px;
    }

    .cellText h4{
      text-indent: 15%;
      font-size: 20px;
      line-height: 25px;
    }

    .columnImage{
      padding-bottom: 70px;
    }
  }

</style>

