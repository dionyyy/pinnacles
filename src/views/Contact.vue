<!-- eslint-disable vue/multi-word-component-names -->
<template>

<!-- image -->
  
    <div class="imghold">
      <img src="../../src/assets/images/Contactus.svg" class="img"/>
    </div>
  

    <div class="container">
      <div class="contact">
        <label>CONTACT</label>
      </div>
    </div>

  <!-- pinnacle to send btn -->
<!-- background -->
<div class="body">
  <div class="container">
    
    <form autocomplete="off" action="" method="POST">
      <input autocomplete="false" name="hidden" type="text" style="display:none;"/>

      <!-- title -->
      <div class="titlehold">
        <div class="title mb-3">
          <strong><p>The Pinnacle</p>
          <p>Operating Systems Inc.</p></strong>
        </div>
    </div>


    <div class="boxholder">

      <!-- First Name -->
      <div class="mb-4">
        <label>First Name</label>
        <p>*</p>
        <input type="text" name="f_name" required>
      </div>

      <!-- Last Name -->
      <div class="mb-4">
        <label>Last Name</label>
        <p>*</p>
        <input type="text" name="l_name" required>
      </div>

      <!-- Email Address -->
      <div class="mb-4">
        <label>Email Address</label>
        <p>*</p>
        <input type="email" name="email" required>
      </div>

      <!-- Subject -->
      <div class="mb-4">
        <label>Subject</label>
        <p>*</p>
        <input type="text" name="subject" required>
      </div>

      <!-- Message -->
      <div class="mb-4">
        <label>Message</label>
        <p>*</p>
        <textarea class="message" rows="5" type="text" name="message" required></textarea>
      </div>

      <button type="submit" class="btnsend" name="send">Send</button>

    </div>
    </form>
</div>
<!-- end of-->


    <!-- address and call us -->
    <div class="container">
      <div class="sideinfo">

      <!-- address -->
      <div class="container">
        <div class="address">
          <h5>Our Address</h5>
          <p>554 Halcon corner Talumpong St., Brgy. Malamig Mandaluyong City</p>
        </div>
      </div>

      <!-- call us -->
      <div class="container">
        <div class="callus">
          <h5>Call Us</h5>
          <p>+63 1234 56 78</p>
        </div>
      </div>
        
      </div>
    </div>

</div>


</template>



<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
}

.body {
  background-image: url(../../src/assets/images/contactbg.png);
  background-repeat: no-repeat;
  background-size: 2280px 1160px;
  width: 100%;
  min-height: 90vh;
  background-position: 50px -200px;
}
.contact{
  position: absolute;
  margin-left: 100px;
  margin-top: -250px;
  color: #fff;
  font-size: 48px;
}

.imghold{
    height: 450px;
  }

.img{
    object-fit:cover;
    object-position: -10% 62%;
    height: 100%;
    width: 100%;
  }

.title{
  margin: 20px 0px 10px;
  letter-spacing: 4px;
}

.titlehold{
  display: flex;
  margin-left: 10px;
}

.titlehold .title p{
  font-size: 28px;
  text-align: left;
  width: 100%;
}

.boxholder{
  display: block;
  position: absolute;
  width: 528px;
  padding: 10px;
  transition: all 0.2s ease;
}

.boxholder input{
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.5;
  border: 1px solid black;
}

.boxholder input:focus{
  color: #212529;
  background-color: #fff;
  border-color: #a52b7a;
  outline: 0;
  box-shadow: 0 0 0 0.05rem #a52b7a;
}

.boxholder label{
  font-size: 14px;
  display: block;
  float: left;
  margin-bottom: 5px;
}

.boxholder p{
  font-size: 12px;
  display: block;
  float: left;
  color:red;
  margin-left: 5px;
}

.boxholder .message{
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  border: 1px solid black;
  resize: none;
}

.boxholder .message:focus{
  color: #212529;
  background-color: #fff;
  border-color: #a52b7a;
  outline: 0;
  box-shadow: 0 0 0 0.05rem #a52b7a;
}

.boxholder .message:hover , .boxholder input:hover{
  color: #212529;
  background-color: #fff;
  border-color: #a52b7a;
  outline: 1;
  box-shadow: 0 0 0 0.05rem #a52b7a;
}

.boxholder .btnsend{
  border-radius: 0.8rem;
  padding: 15px 90px;
  margin-left: 279px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #fff;
  font-size: 18px;
  border: none;
  background-color: #a52b7a;
  transition: all 0.2s ease;
}

.boxholder .btnsend:hover{
  background-color: #d859ac;
  transition: all 0.2s ease;
}

.sideinfo{
  margin: 210px 0px 0px 700px;
  display: flex;
  letter-spacing: 2px;
  width: 600px;
}

.sideinfo .address{
  width: 350px;
  margin-right: 25px;
}


.sideinfo h5{
  position: block;
  margin-bottom: 10px;
  text-align: left;
}

.sideinfo p{
  position: block;
  margin-bottom: 10px;
  text-align: left;
}

/*responsive laptopl */
@media screen and (max-width: 1440.65px){
  
  .imghold{
    width: 1470px;
    margin-left: -30px;
    height: 300px;
    transition: all 0.2s ease;
  }

  .img{
    object-fit:cover;
    object-position: 80%;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }

  .contact{
    margin-left: 180px;
    margin-top: -175px;
    transition: all 0.2s ease;
  }

  .boxholder{
    width: 528px;
    transition: all 0.2s ease;
    margin-left: 5px;
  }

  .boxholder .btnsend{
    display: flex;
    transition: all 0.2s ease;
    margin-left: 282px;
  }

  .sideinfo{
    padding: 20px;
    margin: 0px;
    display: flex;
    margin-top: 200px;
    transition: all 0.2s ease;
    text-align: center;
    width: 510px;
    margin-left: 680px;
  }

  .body{
    background-size: 1250px 1000px;
    width: 96%;
    min-height: 80vh;
    background-position: 100px -130px;
    transition: all 0.2s ease;
  }

  .sideinfo .address{
    width: 200px;
    margin-left: 25px;
    transition: all 0.2s ease;
  }

  .sideinfo .callus{
    width: 200px;
    margin-left: 100px;
    transition: all 0.2s ease;
  }
}

/*responsive laptop */
@media screen and (max-width: 1024.65px){
  
  .imghold{
    width: 1053px;
    margin-left: -30px;
    height: 300px;
    transition: all 0.2s ease;
  }

  .img{
    object-fit:cover;
    object-position: 80%;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }

  .contact{
    margin-left: 180px;
    margin-top: -165px;
    transition: all 0.2s ease;
  }

  .boxholder{
    width:455px;
    transition: all 0.2s ease;
    margin-left: 5px;
  }

  .boxholder .btnsend{
    display: flex;
    transition: all 0.2s ease;
    margin-left: 210px;
  }

  .sideinfo{
    padding: 20px;
    margin: 0px;
    display: flex;
    margin-top: 200px;
    transition: all 0.2s ease;
    text-align: center;
    width: 510px;
    margin-left: 450px;
  }

  .body{
    background-size: 1050px 840px;
    width: 96%;
    min-height: 80vh;
    background-position: -100px 10px;
    transition: all 0.2s ease;
  }

  .sideinfo .address{
    width: 200px;
    margin-left: 45px;
    transition: all 0.2s ease;
  }

  .sideinfo .callus{
    width: 200px;
    margin-left: 10px;
    transition: all 0.2s ease;
  }
}


/*responsive tablet */
@media screen and (max-width: 768.65px){
  
  .imghold{
    width: 797px;
    margin-left: -30px;
    height: 300px;
    transition: all 0.2s ease;
  }

  .img{
    object-fit:cover;
    object-position: 80%;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }

  .contact{
    margin-left: 140px;
    margin-top: -175px;
    transition: all 0.2s ease;
  }

  .boxholder{
    width:450px;
    transition: all 0.2s ease;
    margin-left: 5px;
  }

  .boxholder .btnsend{
    display: flex;
    transition: all 0.2s ease;
    margin-left: 205px;
  }

  .sideinfo{
    padding: 20px;
    margin: 0px;
    display: block;
    margin-top: 150px;
    transition: all 0.2s ease;
    text-align: center;
    width: 290px;
    margin-left: 450px;
  }

  .body{
    background-size: 820px 690px;
    width: 96%;
    min-height: 80vh;
    background-position: -80px 100px;
    transition: all 0.2s ease;
  }

  .sideinfo .address{
    width: 200px;
    margin-left: 25px;
    transition: all 0.2s ease;

  }

  .sideinfo .callus{
    width: 200px;
    margin-left: 25px;
    margin-top: 25px;
    transition: all 0.2s ease;
  }
}


/*responsive phone l */
@media screen and (max-width: 575.98px){
  
  .imghold{
    width: 606px;
    margin-left: -30px;
    height: 300px;
    transition: all 0.2s ease;
  }

  .img{
    object-fit:cover;
    object-position: 80%;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }

  .contact{
    margin-left: 170px;
    margin-top: -175px;
    transition: all 0.2s ease;
  }

  .boxholder{
    width:525px;
    transition: all 0.2s ease;
    margin-left: 5px;
  }

  .boxholder .btnsend{
    display: flex;
    transition: all 0.2s ease;
    margin-left: 275px;
  }

  .sideinfo{
    padding: 20px;
    margin: 0px;
    display: flex;
    margin-top: 700px;
    transition: all 0.2s ease;
    text-align: center;
    width: 100%;
  }

  .body{
    background-size: 680px 540px;
    width: 100%;
    min-height: 100vh;
    background-position: -100px 470px;
    transition: all 0.2s ease;
  }

  .sideinfo .address{
    width: 200px;
    margin-left: 25px;
    transition: all 0.2s ease;
  }

  .sideinfo .callus{
    width: 200px;
    transition: all 0.2s ease;
  }
}


/*responsive phone s */
@media screen and (max-width: 375px){

  .imghold{
    width: 405px;
    margin-left: -30px;
    height: 200px;
    transition: all 0.2s ease;
  }

  .img{
    object-fit:cover;
    object-position: 80%;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }

  .contact{
    margin-left: 70px;
    margin-top: -125px;
    transition: all 0.2s ease;
  }

  .boxholder{
    width:345px;
    transition: all 0.2s ease;
    margin-left: 5px;
  }

  .boxholder .btnsend{
    display: flex;
    transition: all 0.2s ease;
    margin-left: 55px;
  }

  .sideinfo{
    padding: 10px 15px;
    display: block;
    margin-top: 700px;
    transition: all 0.2s ease;
    text-align: center;
    width: 100%;
  }

  .body{
    background-size: 420px 520px;
    width: 100%;
    min-height: 100vh;
    background-position: -50px 600px;
    transition: all 0.2s ease;
  }

  .sideinfo .address{
    width: 260px;
    transition: all 0.2s ease;
  }
  
  .sideinfo h5, .sideinfo p{
    text-align: center;
    transition: all 0.2s ease;
  }

  .sideinfo .callus{
    width: 200px;
    margin-left: 50px;
    padding-top: 20px;
    transition: all 0.2s ease;
  }
}

</style>